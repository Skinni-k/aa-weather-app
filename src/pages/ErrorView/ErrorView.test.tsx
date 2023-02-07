import { screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { renderWithProvider } from "../../testUtils/renderWithProviders";
import { ErrorView } from "./ErrorView";

describe("<ErrorView />", () => {
  it("should render correctly", () => {
    renderWithProvider(<ErrorView />);

    expect(screen.getByText("404 Page Not Found")).toBeVisible();
    expect(
      screen.getByText(
        "Sorry, the page you are looking for could not be found."
      )
    ).toBeVisible();
  });
});
