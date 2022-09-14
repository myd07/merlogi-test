import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Home from "../index";

const Component = (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

describe("Home Page Component Test Group", () => {
  afterEach(() => {
    cleanup();
  });
  // 1. Component Mount
  it("1. Component Mount", async () => {
    render(Component);
    const homelink = screen.queryByText(/movie list page/i);
    expect(homelink).toBeTruthy();
  });
});
