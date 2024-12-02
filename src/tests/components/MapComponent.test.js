// MapComponent.test.js
import { render } from "@testing-library/react";
import MapComponent from "../../components/MapComponent";
import "@testing-library/jest-dom";

// Mocking the global fetch function
global.fetch = jest.fn();

const mockData = [
  {
    lat: "35.46942435",
    lon: "-80.61067922383344",
    display_name: "Restaurant 1",
  },
  {
    lat: "51.5210069",
    lon: "-0.2630093",
    display_name: "Restaurant 2",
  },
];

test("renders the MapComponent", () => {
  // Mocking fetch to return the mockData
  fetch.mockResolvedValueOnce({
    ok: true,
    json: jest.fn().mockResolvedValue(mockData),
  });

  // Render the MapComponent
  render(<MapComponent />);

  // No assertion is needed; if no errors are thrown, the test passes
});
