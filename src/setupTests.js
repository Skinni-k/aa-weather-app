import "@testing-library/jest-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

afterEach(() => {
  cleanup();
});
