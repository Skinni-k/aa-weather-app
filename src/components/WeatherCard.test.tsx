import { screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { renderWithProvider } from "../testUtils/renderWithProviders";
import snow from "../../assets/snow.svg";
import { WeatherCard } from "./WeatherCard";

const setupProps = {
  day: "Today",
  temperature: 2,
  icon: snow,
  weather: "Snow",
};

describe("<WeatherCard />", () => {
  it("should render correctly", () => {
    const props = setupProps;
    renderWithProvider(<WeatherCard {...props} />);

    expect(screen.getByText("Today")).toBeVisible();
    expect(screen.getByText("2°")).toBeVisible();
    expect(screen.getByText("Snow")).toBeVisible();
  });

  it("should render correctly without weather prop", () => {
    const props = { ...setupProps, weather: undefined };
    renderWithProvider(<WeatherCard {...props} />);

    expect(screen.getByText("Today")).toBeVisible();
    expect(screen.getByText("2°")).toBeVisible();
    expect(screen.queryByText("Snow")).not.toBeInTheDocument();
  });
});
