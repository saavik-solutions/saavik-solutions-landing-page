"use client"

import { useState, useCallback, useEffect } from "react"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "100%",
}

// Example coordinates - replace with your actual location
const center = {
  lat: 17.4065,
  lng: 78.4772, // Hyderabad coordinates as an example
}

export default function GoogleMapComponent() {
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBZMS5xYbRRXbYVvRIYFEPxLAvzGjLpIQQ", // This is a placeholder key, it won't work
  })

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback() {
    setMap(null)
  }, [])

  if (!isClient) return null

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
        streetViewControl: true,
        mapTypeControl: true,
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-gray-100">Loading Map...</div>
  )
}

