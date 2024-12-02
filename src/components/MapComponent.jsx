import React, { useRef, useEffect } from "react";
import L from "leaflet";
import useFetch from "../hooks/useFetch";
import {
  COMPLY_CUBE_COORDINATES,
  OPEN_STREET_MAP_SEARCH_URL,
} from "../config/constants";

const RADIUS = 1000; // 1km radius

const MapComponent = () => {
  const mapRef = useRef(null);

  // prepare fetch url
  const lat = COMPLY_CUBE_COORDINATES[0];
  const lon = COMPLY_CUBE_COORDINATES[1];
  const url = `${OPEN_STREET_MAP_SEARCH_URL}?format=json&q=restaurant&lat=${lat}&lon=${lon}&radius=${RADIUS}`;

  const { data, isLoading, error } = useFetch(url);

  useEffect(() => {
    if (mapRef.current) {
      const mapInstance = L.map(mapRef.current).setView(
        COMPLY_CUBE_COORDINATES,
        13
      );

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapInstance);

      L.marker(COMPLY_CUBE_COORDINATES).addTo(mapInstance).bindPopup("HQ");

      if (!isLoading && !error && data) {
        data.forEach((place) => {
          const { lat, lon, display_name } = place;
          const placeLat = parseFloat(lat);
          const placeLon = parseFloat(lon);

          if (!isNaN(placeLat) && !isNaN(placeLon)) {
            L.marker([placeLat, placeLon])
              .addTo(mapInstance)
              .bindPopup(`<b>${display_name || "Unknown place"}</b>`);
          }
        });
      }

      return () => mapInstance.remove();
    }
  }, [data, isLoading, error]);

  return (
    <div>
      <div ref={mapRef} style={{ height: "80vh", width: "100%" }}></div>
      {isLoading && <p>Loading nearby places...</p>}
      {error && <p>Error fetching data!</p>}
    </div>
  );
};

export default MapComponent;
