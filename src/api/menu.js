import { BASE_PATH, API_VERSION } from "./config";

export function getMenuApi() {
  const URL = `${BASE_PATH}/${API_VERSION}/get-menus`;

  return fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}

export function updateMenuOrderApi(token, menuId, data) {
  const URL = `${BASE_PATH}/${API_VERSION}/update-menu/${menuId}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },

    body: JSON.stringify(data),
  };

  return fetch(URL, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result.message;
    })
    .catch((err) => {
      return err;
    });
}

export function activateMenuApi(token, menuId, status) {
  const URL = `${BASE_PATH}/${API_VERSION}/activate-menu/${menuId}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      active: status,
    }),
  };

  return fetch(URL, params)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function addMenuApi(token, menu) {
  const URL = `${BASE_PATH}/${API_VERSION}/add-menu/`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(menu),
  };

  return fetch(URL, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result.message;
    })
    .catch((err) => {
      return err.message;
    });
}

export function deleteMenuApi(token, menuId) {
  const URL = `${BASE_PATH}/${API_VERSION}/delete-menu/${menuId}`;

  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(URL, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result.message;
    })
    .catch((err) => {
      return err.message;
    });
}
