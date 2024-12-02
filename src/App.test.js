import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Restaurants and Cafes/);
  expect(headingElement).toBeInTheDocument();
});
