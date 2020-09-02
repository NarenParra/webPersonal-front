import { API_VERSION, BASE_PATH } from "./config";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../utils/constants";
import jwtDecode from "jwt-decode";

export function getAccessToken() {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  if (!accessToken || accessToken === "null") {
    return null;
  }
  return willExpireToken(accessToken) ? null : accessToken;
}

export function getRefreshToken() {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);

  if (!refreshToken || refreshToken === "null") {
    return null;
  }
  return willExpireToken(refreshToken) ? null : refreshToken;
}

export function refreshAccessToken(refreshToken) {
  const url = `${BASE_PATH}/${API_VERSION}/refresh-access-token`;

  const bodyObj = {
    refreshToken: refreshToken,
  };

  const params = {
    method: "POST",
    body: JSON.stringify(bodyObj),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, params)
    .then((response) => {
      if (response.status !== 200) {
        return null;
      } else {
        return response.json;
      }
    })
    .then((result) => {
      if (!result) {
        // to do : desloguear user
      } else {
        const { accessToken, refreshToken } = result;
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
      }
    });
}

function willExpireToken(token) {
  const seconds = 60;
  const metaToken = jwtDecode(token);
  const { exp } = metaToken;
  const now = (Date.now() + seconds) / 1000;

  return now > exp;
}
