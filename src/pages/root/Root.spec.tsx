import userEvent from "@testing-library/user-event";
import { screen, waitFor } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { renderWithProvider } from "../../testUtils/renderWithProviders";
import { Root } from "./Root";
import { successWeatherResponse } from "../../testUtils/fixtures/weatherResponse";

describe("<Root />", () => {
  beforeEach(() => {
    const fetch = vi.fn();
    fetch.mockResolvedValue({ json: () => successWeatherResponse });
    global.fetch = fetch;
  });

  it("should render correctly", () => {
    renderWithProvider(<Root />);

    expect(screen.getByText("OTTAWA")).toBeVisible();
    expect(screen.getByText("MOSCOW")).toBeVisible();
    expect(screen.getByText("TOKYO")).toBeVisible();
  });

  it("should have correct selected value", async () => {
    renderWithProvider(<Root />);
    userEvent.click(screen.getByText("MOSCOW"));
    await waitFor(() => {
      expect(screen.getByText("MOSCOW")).toHaveStyle(
        "color: rgb(95, 176, 232)"
      );
    });
  });

  it("should show loading when fetching data", () => {
    renderWithProvider(<Root />);
    expect(screen.getByText("Loading...")).toBeVisible();
  });

  it("should show correct data for today", async () => {
    renderWithProvider(<Root />);

    const todayCard = await screen.findByTestId("Today");
    const todayTemp = todayCard.querySelector(".temperature")?.innerHTML;
    expect(todayTemp).toEqual("12°");
  });
});
