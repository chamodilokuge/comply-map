// useFetch.test.js
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import MapComponent from "../../components/MapComponent";

describe("useFetch Hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn();
  });

  afterEach(() => {
    delete global.fetch;
  });

  test("should handle error when fetch fails", async () => {
    const mockError = new Error("Fetch Error");
    global.fetch = jest.fn().mockRejectedValueOnce(mockError);

    render(<MapComponent />);

    // Check if error message appears when fetch fails
    expect(await screen.findByText("Error fetching data!")).toBeInTheDocument();
  });

  test("should handle empty data response", async () => {
    const mockData = []; // Empty data set
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    render(<MapComponent />);

    // Ensure fetch was called once
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
