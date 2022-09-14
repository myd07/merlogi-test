import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import * as RR from "react-router-dom";

import store from "src/redux";
import type { Character } from "src/domains/character";

import CharacterList from "../index";

const Component = (
  <Provider store={store}>
    <RR.BrowserRouter>
      <CharacterList />
    </RR.BrowserRouter>
  </Provider>
);

const mockResponse = [
  {
    id: "1",
    name: "satu",
  },
  {
    id: "2",
    name: "dua",
  },
];

jest.mock("src/utils/axios", () => () => ({
  data: mockResponse,
}));

jest.mock("react-router-dom", () => {
  return {
    __esModule: true,
    ...jest.requireActual("react-router-dom"),
  };
});

describe("Character List Page Component Test Group", () => {
  afterEach(() => {
    cleanup();
  });
  // 1. Component Mount
  it("1. Component Mount", async () => {
    render(Component);
    const characterList = screen.queryByTestId("character-list");
    expect(characterList).toBeTruthy();
  });
  // 2. Render With No Route State
  it("2. Render With No Route State", async () => {
    render(Component);
    const warning = await screen.findByText(/no state detected/i);
    expect(warning).toBeTruthy();
  });
  // 3. Render With Route State
  it("3. Render With Route State", async () => {
    const mockUseLocation = jest.spyOn(RR, "useLocation");
    mockUseLocation.mockImplementation(() => ({
      state: ["satu"],
      key: "",
      pathname: "",
      search: "",
      hash: "",
    }));
    render(Component);
    const title = await screen.findByText(/satu/i);
    expect(title).toBeTruthy();
  });
});
