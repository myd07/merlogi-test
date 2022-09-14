import React from "react";
import { render, cleanup, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "src/redux";

import MovieList from "../index";

const Component = (
  <Provider store={store}>
    <BrowserRouter>
      <MovieList />
    </BrowserRouter>
  </Provider>
);

const mockResponse = [
  {
    id: "1",
    people: "people",
    movie_banner: "banner",
    original_title: "title",
  },
];

jest.mock("src/utils/axios", () => () => ({
  data: mockResponse,
}));

describe("Movie List Page Component Test Group", () => {
  afterEach(() => {
    cleanup();
  });
  // 1. Component Mount
  it("1. Component Mount", async () => {
    render(Component);
    const movieList = screen.queryByTestId("movie-list");
    expect(movieList).toBeTruthy();
  });
  // 2. Render With No Route State
  it("2. Render With No Route State", async () => {
    render(Component);
    const warning = await screen.findByText(/title/i);
    expect(warning).toBeTruthy();
  });
});
