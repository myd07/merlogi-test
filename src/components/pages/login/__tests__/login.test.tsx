import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

import store from "src/redux";

import Login from "../index";

const Component = (
  <Provider store={store}>
    <Login />
  </Provider>
);

describe("Login Page Component Test Group", () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });
  // 1. Component Mount
  it("1. Component Mount", async () => {
    render(Component);
    const login = screen.queryByTestId("login");
    expect(login).toBeTruthy();
  });
  // 2. Input Wrong Username And Password
  it("2. Input Wrong Username And Password", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    render(Component);
    const usernameInput = screen.getByTestId(/username/i);
    const passwordInput = screen.getByTestId(/password/i);
    const button = screen.getByRole("button", { name: /login/i });
    userEvent.type(usernameInput, "not username");
    userEvent.type(passwordInput, "not password");
    userEvent.click(button);
    expect(alertMock).toHaveBeenCalled();
  });
  // 3. Input Right Username And Password
  it("3. Input Right Username And Password", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    render(Component);
    const usernameInput = screen.getByTestId(/username/i);
    const passwordInput = screen.getByTestId(/password/i);
    const button = screen.getByRole("button", { name: /login/i });
    userEvent.type(usernameInput, "username");
    userEvent.type(passwordInput, "password");
    userEvent.click(button);
    expect(alertMock).not.toHaveBeenCalled();
  });
});
