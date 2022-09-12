import React, { ChangeEvent, FormEvent } from "react";

import useAuthAction from "src/redux/auth/action";
import type { LoginPayload } from "src/domains/auth";

import { Wrapper } from "./style";

const LoginPage = () => {
  const [state, setState] = React.useState<LoginPayload>({
    username: "",
    password: "",
  });
  const { requestLogin } = useAuthAction();

  const onChange = React.useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setState((prev) => ({
        ...prev,
        [target.name]: target.value,
      }));
    },
    []
  );

  const onSubmit = React.useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      requestLogin(state);
    },
    [state]
  );

  return (
    <>
      <Wrapper>
        <form className="login_form" onSubmit={onSubmit}>
          <p>Welcome</p>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={onChange}
          />
          <button type="submit">login</button>
        </form>
      </Wrapper>
    </>
  );
};

export default LoginPage;
