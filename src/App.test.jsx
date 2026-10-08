import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders h1 title ", () => {
    render(<App />);
    expect(screen.getByText("Weather App")).toBeInTheDocument();
  });

  it("should handle input event", async () => {
    render(<App />);
    const textInput = screen.getByPlaceholderText(/enter a city name/i);
    await userEvent.type(textInput, 'New York');
    expect(textInput.value).toBe('New York');
  });
  
  it("renders search button", async () => {
    render(<App />);
    const searchBtn = screen.getByRole('button', { name: /search/i });
    await userEvent.click(searchBtn);
    expect(searchBtn).toBeInTheDocument();
  });
});
