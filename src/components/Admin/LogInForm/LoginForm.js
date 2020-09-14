import React, { useState } from "react";
import "./LoginForm.scss";
import { Form, Input, Button, notification } from "antd";
import { UserAddOutlined, LockOutlined } from "@ant-design/icons";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";
import { signInApi } from "../../../api/user";

export default function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const login = async (e) => {
    const result = await signInApi(inputs);

    if (result.message) {
      notification["error"]({
        message: result.message,
      });
    } else {
      const { accessToken, refreshToken } = result;

      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);

      notification["success"]({
        message: "Login correcto",
      });
      window.location.href = "/admin";
    }
  };

  return (
    <Form className="login-form" onChange={changeForm} onFinish={login}>
      <Form.Item>
        <Input
          prefix={
            <UserAddOutlined
              style={{ color: "rgba(0,0,0,0.5)", opacity: 0.7 }}
            />
          }
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={
            <LockOutlined style={{ color: "rgba(0,0,0,0.5)", opacity: 0.7 }} />
          }
          type="password"
          name="password"
          placeholder="Contraseña"
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="login-form__button">
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
}
