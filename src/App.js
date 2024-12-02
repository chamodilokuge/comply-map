import { useRef, useEffect } from "react";
import "./App.css";
import L from "leaflet";

const App = () => {
  const mapRef = useRef(null);
  const comply_cube_coordinates = [51.5040521, -0.0148848];

  useEffect(() => {
    if (mapRef.current) {
      const mapInstance = L.map(mapRef.current).setView(
        comply_cube_coordinates,
        13
      );
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapInstance);
      L.marker(comply_cube_coordinates).addTo(mapInstance);

      const fetchData = async () => {
        try {
          const lat = comply_cube_coordinates[0];
          const lon = comply_cube_coordinates[1];
          const url = `https://nominatim.openstreetmap.org/search?format=json&q=restaurant&lat=${lat}&lon=${lon}&radius=1000`;

          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();

      return () => {
        mapInstance.remove();
      };
    }
  }, []);

  return (
    <div className="App">
      <div ref={mapRef} style={{ height: "90vh", width: "100%" }}></div>
    </div>
  );
};

export default App;
