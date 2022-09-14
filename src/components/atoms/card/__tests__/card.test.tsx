import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import Card from "../index";

const Component = <Card img="" title="movie title" />;

describe("Card Component Test Group", () => {
  afterEach(() => {
    cleanup();
  });
  // 1. Component Mount
  it("1. Component Mount", async () => {
    render(Component);
    const card = screen.queryByTestId("card");
    expect(card).toBeTruthy();
  });
  // 2. Card Title
  it("2. Card Title", async () => {
    render(Component);
    const title = await screen.findByText(/movie title/i);
    expect(title).toBeTruthy();
  });
});
