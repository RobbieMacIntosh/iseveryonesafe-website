'use client'

import { useEffect, useMemo } from 'react'
import { Circle, CircleMarker, GeoJSON, MapContainer, TileLayer, useMap } from 'react-leaflet'
import type { LatLngBounds, LatLngLiteral } from 'leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { CohortCoverageSummary } from '@/lib/cohorts/shared'

const DEFAULT_CENTER: LatLngLiteral = { lat: 54.5, lng: -3.4 }

type CohortCoveragePreviewProps = {
  coverage: CohortCoverageSummary
}

const FitBounds = ({ bounds }: { bounds: LatLngBounds | null }) => {
  const map = useMap()

  useEffect(() => {
    if (bounds && bounds.isValid()) {
      map.fitBounds(bounds, { padding: [12, 12], maxZoom: 13 })
    }
  }, [bounds, map])

  return null
}

const parseGeoJson = (payload: CohortCoverageSummary['geoJson']) => {
  if (!payload) {
    return null
  }

  if (typeof payload === 'string') {
    try {
      return JSON.parse(payload)
    } catch (error) {
      console.warn('Unable to parse cohort GeoJSON payload', error)
      return null
    }
  }

  return payload
}

const normaliseCenter = (center: CohortCoverageSummary['center']): LatLngLiteral | null => {
  if (!center || typeof center.latitude !== 'number' || typeof center.longitude !== 'number') {
    return null
  }
  return { lat: center.latitude, lng: center.longitude }
}

const computeBounds = (
  geoJson: ReturnType<typeof parseGeoJson>,
  center: LatLngLiteral | null,
  radiusMeters: number,
): LatLngBounds | null => {
  let bounds: LatLngBounds | null = null

  if (geoJson) {
    const geoLayer = L.geoJSON(geoJson as any)
    const layerBounds = geoLayer.getBounds()
    if (layerBounds.isValid()) {
      bounds = layerBounds
    }
  }

  if (center) {
    if (radiusMeters > 0) {
      const circleBounds = L.circle(center, { radius: radiusMeters }).getBounds()
      bounds = bounds ? bounds.extend(circleBounds) : circleBounds
    } else {
      const pointBounds = L.latLngBounds([center, center])
      bounds = bounds ? bounds.extend(pointBounds) : pointBounds
    }
  }

  return bounds
}

export function CohortCoveragePreview({ coverage }: CohortCoveragePreviewProps) {
  const geoJson = useMemo(() => parseGeoJson(coverage.geoJson), [coverage.geoJson])
  const center = useMemo(() => normaliseCenter(coverage.center ?? undefined), [coverage.center])
  const radiusMeters =
    typeof coverage.radiusMeters === 'number' && !Number.isNaN(coverage.radiusMeters)
      ? coverage.radiusMeters
      : 0

  const bounds = useMemo(() => computeBounds(geoJson, center, radiusMeters), [geoJson, center, radiusMeters])
  const hasRenderableCoverage = Boolean(geoJson) || Boolean(center)

  if (!hasRenderableCoverage) {
    return null
  }

  const mapCenter = bounds?.getCenter() ?? center ?? DEFAULT_CENTER
  const mapKey = JSON.stringify({
    center: center ?? mapCenter,
    radius: radiusMeters,
    hasGeoJson: Boolean(geoJson),
  })

  return (
    <MapContainer
      key={mapKey}
      center={mapCenter}
      zoom={13}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      dragging={false}
      zoomControl={false}
      attributionControl={false}
      style={{ width: '100%', height: '100%' }}
      className="rounded-xl border border-border"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <FitBounds bounds={bounds} />
      {geoJson ? (
        <GeoJSON
          data={geoJson as any}
          style={{
            weight: 1.5,
            color: '#2f5e0a',
            fillColor: '#bff234',
            fillOpacity: 0.25,
          }}
        />
      ) : null}
      {center ? (
        radiusMeters > 0 ? (
          <Circle
            center={center}
            radius={radiusMeters}
            pathOptions={{ color: '#2f5e0a', fillColor: '#bff234', fillOpacity: 0.18, weight: 1 }}
          />
        ) : (
          <CircleMarker
            center={center}
            radius={8}
            pathOptions={{ color: '#2f5e0a', fillColor: '#bff234', fillOpacity: 0.9, weight: 1 }}
          />
        )
      ) : null}
    </MapContainer>
  )
}
