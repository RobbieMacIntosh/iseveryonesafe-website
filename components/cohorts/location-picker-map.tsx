'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { Circle, MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet'
import type { LatLngLiteral } from 'leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const UK_CENTROID: LatLngLiteral = { lat: 54.5, lng: -3.4 }

const markerIcon = L.icon({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

type LocationPickerMapProps = {
  value?: LatLngLiteral | null
  radiusKm?: number | null
  onChange: (point: LatLngLiteral) => void
  className?: string
}

function MapClickHandler({ onSelect }: { onSelect: (point: LatLngLiteral) => void }) {
  useMapEvents({
    click(event) {
      onSelect(event.latlng)
    },
  })

  return null
}

const zoomForRadius = (radiusMeters: number | null, hasMarker: boolean): number => {
  if (!radiusMeters || radiusMeters <= 0) {
    return hasMarker ? 12 : 6
  }

  if (radiusMeters <= 500) return 14
  if (radiusMeters <= 1000) return 13
  if (radiusMeters <= 2500) return 12
  if (radiusMeters <= 5000) return 11
  if (radiusMeters <= 10000) return 10
  if (radiusMeters <= 20000) return 9
  if (radiusMeters <= 40000) return 8
  return 7
}

export function LocationPickerMap({
  value,
  radiusKm = null,
  onChange,
  className,
}: LocationPickerMapProps) {
  const [marker, setMarker] = useState<LatLngLiteral | null>(value ?? null)

  useEffect(() => {
    if (value) {
      setMarker(value)
    }
  }, [value])

  const handleSelect = useCallback(
    (point: LatLngLiteral) => {
      setMarker(point)
      onChange(point)
    },
    [onChange],
  )

  const center = marker ?? value ?? UK_CENTROID
  const radiusMeters = useMemo(() => {
    if (typeof radiusKm !== 'number' || Number.isNaN(radiusKm) || radiusKm <= 0) {
      return null
    }
    return radiusKm * 1000
  }, [radiusKm])
  const zoom = zoomForRadius(radiusMeters, Boolean(marker))

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className={className}
      scrollWheelZoom={false}
      style={{ minHeight: 320 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClickHandler onSelect={handleSelect} />
      {marker ? <Marker icon={markerIcon} position={marker} /> : null}
      {marker && radiusMeters ? (
        <Circle
          center={marker}
          radius={radiusMeters}
          pathOptions={{ color: '#2f5e0a', fillColor: '#bff234', fillOpacity: 0.18, weight: 1.5 }}
        />
      ) : null}
    </MapContainer>
  )
}
