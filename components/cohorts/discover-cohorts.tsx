'use client'

import dynamic from 'next/dynamic'
import { useCallback, useMemo, useState } from 'react'
import {
  COHORT_RADIUS_CHOICES,
  type CohortRadiusChoice,
  type CohortSearchResult,
  mapCohortSearchRowToResult,
} from '@/lib/cohorts/shared'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'

const LocationPickerMap = dynamic(
  () => import('./location-picker-map').then((mod) => mod.LocationPickerMap),
  { ssr: false },
)
const CohortCoveragePreview = dynamic(
  () => import('./cohort-coverage-preview').then((mod) => mod.CohortCoveragePreview),
  { ssr: false },
)

const formatChoiceLabel = (choice: CohortRadiusChoice) => (choice >= 20 ? '>20' : choice.toString())

const choiceToIndex = (choices: CohortRadiusChoice[], value: CohortRadiusChoice): number => {
  const index = choices.findIndex((choice) => Math.abs(choice - value) < 0.0001)
  return index >= 0 ? index : 0
}

const indexToChoice = (choices: CohortRadiusChoice[], index: number): CohortRadiusChoice =>
  choices[Math.min(Math.max(index, 0), choices.length - 1)]

export function DiscoverCohorts() {
  const supabase = useMemo(() => createClient(), [])

  const [search, setSearch] = useState('')
  const [radiusChoice, setRadiusChoice] = useState<CohortRadiusChoice>(2)
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [postcode, setPostcode] = useState('')
  const [showMap, setShowMap] = useState(false)
  const [results, setResults] = useState<CohortSearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sliderIndex = useMemo(
    () => choiceToIndex(COHORT_RADIUS_CHOICES, radiusChoice),
    [radiusChoice],
  )

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude.toFixed(6))
        setLongitude(position.coords.longitude.toFixed(6))
        setShowMap(false)
      },
      (geoError) => {
        setError(geoError.message || 'Unable to fetch your location.')
      },
      { enableHighAccuracy: true, timeout: 10000 },
    )
  }

  const handleMapSelect = useCallback((point: { lat: number; lng: number }) => {
    setLatitude(point.lat.toFixed(6))
    setLongitude(point.lng.toFixed(6))
    setShowMap(false)
  }, [])

  const handleClearLocation = () => {
    setLatitude('')
    setLongitude('')
    setPostcode('')
    setShowMap(false)
  }

  const executeSearch = useCallback(
    async (event?: React.FormEvent) => {
      if (event) {
        event.preventDefault()
      }
      setLoading(true)
      setError(null)

      try {
        const { data, error: rpcError } = await supabase.rpc('search_public_cohorts', {
          search_text: search.trim() || null,
          filter_lat: latitude ? Number(latitude) : null,
          filter_lon: longitude ? Number(longitude) : null,
          radius_km: radiusChoice,
          result_limit: 50,
          search_postcode: postcode.trim() || null,
        })

        if (rpcError) {
          throw rpcError
        }

        const payload = Array.isArray(data) ? data : []
        const mapped = payload
          .map((row) => mapCohortSearchRowToResult(row as any))
          .filter((result) => result.cohortType !== 'Corporate')

        setResults(mapped)
        if (!mapped.length) {
          setError('No cohorts found. Try widening your radius or adjusting the keywords.')
        }
      } catch (rpcErr: any) {
        console.error('Cohort search failed', rpcErr)
        setResults([])
        setError(rpcErr?.message || 'Search failed. Please try again.')
      } finally {
        setLoading(false)
      }
    },
    [latitude, longitude, postcode, radiusChoice, search, supabase],
  )

  return (
    <section className="mx-auto max-w-5xl rounded-3xl border border-border bg-card p-8 shadow-sm">
      <header className="mb-6 space-y-3 text-center md:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Discover Cohorts
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Search for public cohorts near you
        </h1>
        <p className="text-base text-muted-foreground">
          Enter keywords, drop a pin, or pick a postcode to explore non-corporate cohorts and request to join.
        </p>
      </header>

      <form onSubmit={executeSearch} className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row">
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by cohort name or description"
            className="h-12 flex-1 rounded-xl border-border bg-background/60"
          />
          <Button type="submit" className="h-12 rounded-xl px-6" disabled={loading}>
            {loading ? 'Searching…' : 'Search'}
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex items-baseline justify-between text-sm text-muted-foreground">
            <span>Radius (km)</span>
            <span className="font-semibold text-foreground">
              {radiusChoice >= 20 ? '>20 km' : `${radiusChoice} km`}
            </span>
          </div>
          <Slider
            min={0}
            max={COHORT_RADIUS_CHOICES.length - 1}
            step={1}
            value={[sliderIndex]}
            onValueChange={([value]) => setRadiusChoice(indexToChoice(COHORT_RADIUS_CHOICES, value))}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            {COHORT_RADIUS_CHOICES.map((choice) => (
              <span key={formatChoiceLabel(choice)}>{formatChoiceLabel(choice)}</span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <Label htmlFor="latitude">Latitude</Label>
            <Input
              id="latitude"
              type="number"
              value={latitude}
              placeholder="51.5074"
              onChange={(event) => setLatitude(event.target.value)}
              className="rounded-xl border-border bg-background/60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="longitude">Longitude</Label>
            <Input
              id="longitude"
              type="number"
              value={longitude}
              placeholder="-0.1278"
              onChange={(event) => setLongitude(event.target.value)}
              className="rounded-xl border-border bg-background/60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="postcode">Postcode</Label>
            <Input
              id="postcode"
              value={postcode}
              placeholder="SW1A 1AA"
              onChange={(event) => setPostcode(event.target.value.toUpperCase())}
              className="rounded-xl border-border bg-background/60"
            />
          </div>
          <div className="flex items-end gap-3">
            <Button type="button" variant="secondary" className="w-full rounded-xl" onClick={handleUseMyLocation} disabled={loading}>
              Use my location
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            type="button"
            variant="secondary"
            className="rounded-xl"
            onClick={() => setShowMap((current) => !current)}
            disabled={loading}
          >
            {showMap ? 'Hide map' : 'Drop a pin'}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="rounded-xl"
            onClick={handleClearLocation}
            disabled={loading}
          >
            Clear location
          </Button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-dashed border-border bg-muted/40 p-4">
          {showMap ? (
            <div className="space-y-3">
              <LocationPickerMap
                value={
                  latitude && longitude
                    ? { lat: Number(latitude), lng: Number(longitude) }
                    : undefined
                }
                radiusKm={radiusChoice}
                onChange={handleMapSelect}
                className="h-[320px] w-full rounded-xl"
              />
              <p className="text-sm text-muted-foreground">
                Tap anywhere on the map to drop a pin and reuse that location for your search.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                Enable location or drop a pin to preview your search radius on the map. Only public cohorts are displayed.
              </p>
              <Button
                type="button"
                variant="secondary"
                className="rounded-xl"
                onClick={() => setShowMap(true)}
                disabled={loading}
              >
                Drop a pin
              </Button>
            </div>
          )}
        </div>
      </form>

      {error ? <p className="mt-6 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">{error}</p> : null}

      <div className="mt-8 space-y-4">
        {loading && !results.length ? (
          <div className="rounded-2xl border border-dashed border-border bg-muted/60 p-6 text-center text-sm text-muted-foreground">
            Searching cohorts…
          </div>
        ) : null}

        {!loading && !results.length && !error ? (
          <div className="rounded-2xl border border-dashed border-border bg-muted/60 p-6 text-center text-sm text-muted-foreground">
            Adjust the filters to discover cohorts near you.
          </div>
        ) : null}

        {results.map((cohort) => {
          const hasCoverage = Boolean(cohort.coverage.geoJson) || Boolean(cohort.coverage.center)
          return (
            <article
              key={cohort.id}
              className="grid gap-6 rounded-3xl border border-border bg-card/70 p-6 shadow-sm md:grid-cols-[minmax(0,1fr)_220px]"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant={cohort.status === 'Inactive' ? 'outline' : 'secondary'}
                      className={cohort.status === 'Inactive' ? 'border-destructive text-destructive' : ''}
                    >
                      {cohort.status}
                    </Badge>
                    <Badge variant="outline">
                      {cohort.distanceKm != null ? `${cohort.distanceKm.toFixed(1)} km` : 'Distance unknown'}
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">{cohort.name}</h2>
                  {cohort.description ? (
                    <p className="text-sm leading-6 text-muted-foreground">{cohort.description}</p>
                  ) : null}
                </div>
                {cohort.joinLink ? (
                  <Button asChild className="rounded-xl">
                    <a href={cohort.joinLink} target="_blank" rel="noreferrer">
                      Join cohort
                    </a>
                  </Button>
                ) : null}
              </div>

              <div className="space-y-3">
                <Badge variant="secondary" className="w-fit rounded-full px-3 py-1 text-xs font-semibold">
                  {cohort.cohortType}
                </Badge>
                {hasCoverage ? (
                  <div className="h-48 w-full overflow-hidden rounded-2xl border border-border">
                    <CohortCoveragePreview coverage={cohort.coverage} />
                  </div>
                ) : (
                  <div className="flex h-48 w-full items-center justify-center rounded-2xl border border-dashed border-border text-sm text-muted-foreground">
                    No coverage map available
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
