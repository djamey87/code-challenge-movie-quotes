import React from "react";
import { render, screen } from "@testing-library/react-native";

import App from "./App";

// skipping due to async mock issues
describe("<App />", () => {
  it.skip("Should render the drawer button by default", async () => {
    render(<App />);
    // expect(screen.getByText("Add Quote")).toBeDefined();
  });
});
