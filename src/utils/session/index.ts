import cookie from "js-cookie";

interface CookieConfig {
  expires: number;
  secure: boolean;
  sameSite: "strict" | "lax";
}

const sessionConfig = {
  key: "__session",
  cookieConfig: {
    // 5 minutes convert to days
    expires: 0.00347222,
    secure: true,
    sameSite: "strict",
  },
};

export const saveSession = (value: string) => {
  cookie.set(
    sessionConfig.key,
    value,
    sessionConfig.cookieConfig as CookieConfig
  );
};

export const getSession = () => cookie.get(sessionConfig.key);

export const removeSession = () => {
  cookie.remove(sessionConfig.key);
};
