import { BASE_PATH, API_VERSION } from "./config";
//conectar con API
export function signUpApi(data) {
  const url = `${BASE_PATH}/${API_VERSION}/sing-up`;

  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.user) {
        return {
          ok: true,
          message: "Usuario creado correctamente",
        };
      }
      return {
        ok: false,
        message: result.message,
      };
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}
export function signInApi(data) {
  const url = `${BASE_PATH}/${API_VERSION}/sing-in`;

  const paramas = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, paramas)
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

export function getUsersApi(token) {
  const url = `${BASE_PATH}/${API_VERSION}/users`;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
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

export function getUsersActiveApi(token, status) {
  const url = `${BASE_PATH}/${API_VERSION}/users-active?active=${status}`;

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
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
export function uploadAvatarApi(token, avatar, userId) {
  const URL = `${BASE_PATH}/${API_VERSION}/upload-avatar/${userId}`;
  //obligatorio cuando queremos enviar una imagen mediante una peticion
  const formData = new FormData();

  formData.append("avatar", avatar, avatar.name);
  const params = {
    method: "PUT",
    body: formData,
    headers: {
      Authorization: token,
    },
  };

  return fetch(URL, params)
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

export function getAvatarApi(avatarName) {
  const URL = `${BASE_PATH}/${API_VERSION}/get-avatar/${avatarName}`;

  return fetch(URL)
    .then((response) => {
      return response.url;
    })
    .catch((err) => {
      return err.message;
    });
}
export function updateUserApi(token, user, userId) {
  const URL = `${BASE_PATH}/${API_VERSION}/update-user/${userId}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(user),
  };

  return fetch(URL, params)
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

export function activateUserApi(token, userId, status) {
  const URL = `${BASE_PATH}/${API_VERSION}/activate-user/${userId}`;
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
      return response.json();
    })
    .then((result) => {
      return result.message;
    })
    .catch((err) => {
      return err.message;
    });
}

export function deleteUserApi(token, userId) {
  const URL = `${BASE_PATH}/${API_VERSION}/delete-user/${userId}`;
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

export function signUpAdminApi(token, data) {
  const URL = `${BASE_PATH}/${API_VERSION}/sing-up-admin`;
  const params = {
    method: "POST",
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
      return err.message;
    });
}
