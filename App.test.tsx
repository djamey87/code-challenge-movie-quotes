import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";

import App from "./App";

describe("<App />", () => {
  it("has 1 child", () => {
    render(<App />);
    expect(screen.getByText("Add Quote")).toBeDefined();
  });
});
