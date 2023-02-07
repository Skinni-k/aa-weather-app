import userEvent from "@testing-library/user-event";
import { screen, waitFor } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { renderWithProvider } from "../testUtils/renderWithProviders";
import { Tabs } from "./Tabs";

const setupProps = {
  cities: ["OTTAWA", "MOSCOW", "TOKYO"],
  selectedValue: "OTTAWA",
  OnClick: vi.fn(),
};

describe("<Tabs />", () => {
  it("should render correctly", () => {
    const props = setupProps;
    renderWithProvider(<Tabs {...props} />);

    expect(screen.getByText("OTTAWA")).toBeVisible();
    expect(screen.getByText("OTTAWA")).toHaveStyle("color: rgb(95, 176, 232)");
    expect(screen.getByText("MOSCOW")).toBeVisible();
    expect(screen.getByText("TOKYO")).toBeVisible();
  });

  it("should call OnClick on click", async () => {
    renderWithProvider(<Tabs {...setupProps} />);

    userEvent.click(screen.getByText("MOSCOW"));
    await waitFor(() => {
      expect(setupProps.OnClick.mock.calls[0]).toEqual(["MOSCOW"]);
    });
  });

  it("should give style color to selectedValue", () => {
    setupProps.selectedValue = "MOSCOW";
    const props = setupProps;
    renderWithProvider(<Tabs {...props} />);

    expect(screen.getByText("OTTAWA")).toBeVisible();
    expect(screen.getByText("MOSCOW")).toBeVisible();
    expect(screen.getByText("MOSCOW")).toHaveStyle("color: rgb(95, 176, 232)");
    expect(screen.getByText("TOKYO")).toBeVisible();
  });
});
