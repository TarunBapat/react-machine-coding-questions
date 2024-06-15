import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { driver, mockDrive } from "driver.js";

// Manually mock the driver.js module
jest.mock("driver.js", () => {
  const mockDrive = jest.fn();
  const mockDriver = jest.fn(() => ({
    drive: mockDrive,
  }));
  return {
    driver: mockDriver,
    mockDrive,
  };
});

// Import the mocked module

describe("App Component", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear any previous mock calls
  });

  // test("renders the App component correctly", () => {
  //   render(<App />);
  //   expect(screen.getByText("Start Tour")).toBeInTheDocument();
  //   expect(screen.getByText("Element 1")).toBeInTheDocument();
  //   expect(screen.getByText("Element 2")).toBeInTheDocument();
  // });

  test("calls startTour function on button click", () => {
    render(<App />);
    const startTourButton = screen.getByText("Start Tour");
    fireEvent.click(startTourButton);
    expect(mockDrive).toHaveBeenCalled(); // Check if drive method was called
  });

  test("initializes driver.js with correct steps", () => {
    render(<App />);
    expect(driver).toHaveBeenCalledWith({
      animate: false,
      showProgress: false,
      showButtons: ["next", "previous", "close"],
      onCloseClick: expect.any(Function),
      steps: [
        {
          element: "#element1",
          popover: {
            title: "Title 1",
            description: "Description 1",
          },
        },
        {
          element: "#element2",
          popover: {
            title: "Title 2",
            description: "Description 2",
          },
        },
      ],
    });
  });

  test("initializes driver.js with correct steps", () => {
    render(<App />);
    expect(driver.mock.calls[0][0].steps.length).toBe(2);
  });
});
