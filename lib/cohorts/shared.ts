export type CohortRadiusChoice = number

export const COHORT_RADIUS_CHOICES: CohortRadiusChoice[] = [0.5, 1, 2, 5, 10, 15, 25]

export type CohortCoverageSummary = {
  center?: { latitude: number; longitude: number } | null
  radiusMeters?: number | null
  geoJson?: any
}

export type CohortSearchResult = {
  id: number
  name: string
  cohortType: string
  description?: string | null
  status: 'Active' | 'Inactive'
  joinLink?: string | null
  corporationId: number
  distanceKm?: number | null
  coverage: CohortCoverageSummary
}

type CohortSearchRow = {
  id: number | string
  name?: string | null
  cohort_type?: CohortSearchResult['cohortType']
  description?: string | null
  status?: string | null
  join_by_code_deeplink?: string | null
  corporation_id: number | string
  coverage_geojson?: any
  coverage_center?: any
  coverage_radius_m?: number | string | null
  distance_km?: number | string | null
}

const parseNumeric = (value: any): number | null => {
  if (value == null) return null
  if (typeof value === 'number') return Number.isFinite(value) ? value : null
  if (typeof value === 'string') {
    const trimmed = value.trim()
    if (!trimmed) return null
    const parsed = Number(trimmed)
    return Number.isFinite(parsed) ? parsed : null
  }
  return null
}

const normalizeCoverageCenter = (input: any): CohortCoverageSummary['center'] => {
  if (!input || typeof input !== 'object') return null

  const latValue = input.latitude ?? input.lat ?? input[0]
  const lonValue = input.longitude ?? input.lon ?? input[1]

  const latitude = parseNumeric(latValue)
  const longitude = parseNumeric(lonValue)

  if (latitude == null || longitude == null) {
    return null
  }

  return { latitude, longitude }
}

export const mapCohortSearchRowToResult = (row: CohortSearchRow): CohortSearchResult => {
  const radiusMeters = parseNumeric(row.coverage_radius_m)
  const distanceKm = parseNumeric(row.distance_km)

  return {
    id: typeof row.id === 'number' ? row.id : Number(row.id ?? 0),
    name: row.name ?? 'Unknown cohort',
    cohortType: row.cohort_type ?? 'Community',
    description: row.description ?? null,
    status: row.status === 'Inactive' ? 'Inactive' : 'Active',
    joinLink: row.join_by_code_deeplink ?? null,
    corporationId:
      typeof row.corporation_id === 'number'
        ? row.corporation_id
        : Number(row.corporation_id ?? 0),
    distanceKm,
    coverage: {
      center: normalizeCoverageCenter(row.coverage_center),
      radiusMeters,
      geoJson: row.coverage_geojson ?? null,
    },
  }
}
