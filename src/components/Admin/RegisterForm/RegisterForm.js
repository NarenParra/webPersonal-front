import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserAddOutlined, LockOutlined } from "@ant-design/icons";
import {
  minLengthValidation,
  emailValidation,
} from "../../../utils/formValidation";

import { signUpApi } from "../../../api/user";

import "./RegisterForm.scss";

export default function RegisterForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });

  const [formValid, setFomrValid] = useState({
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false,
  });

  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInput({
        ...input,
        [e.target.name]: e.target.checked,
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  };

  const inputValidation = (e) => {
    const { type, name } = e.target;
    if (type === "email") {
      setFomrValid({
        ...formValid,
        [name]: emailValidation(e.target),
      });
    }

    if (type === "checkbox") {
      setFomrValid({
        ...formValid,
        [name]: e.target.checked,
      });
    }

    if (type === "password") {
      setFomrValid({
        ...formValid,
        [name]: minLengthValidation(e.target, 6),
      });
    }
  };

  const registerUser = async () => {
    const { email, password, repeatPassword, privacyPolicy } = formValid;
    const passwordVal = input.password;
    const repeatPasswordVal = input.repeatPassword;

    if (!email || !repeatPassword || !password) {
      notification["error"]({
        message: "Todos los campos son obligatorios",
      });
    } else if (!privacyPolicy) {
      notification["error"]({
        message: "Debe aceptar los terminos",
      });
    } else {
      if (passwordVal !== repeatPasswordVal) {
        notification["error"]({
          message: "Las contraseñas no coinciden",
        });
      } else {
        const result = await signUpApi(input);
        if (!result.ok) {
          notification["error"]({
            message: result.message,
          });
        } else {
          notification["success"]({
            message: result.message,
          });
          resetForm();
        }
      }
    }
  };

  const resetForm = () => {
    const input = document.getElementsByTagName("input");

    for (let i = 0; i < input.length; i++) {
      input[i].classList.remove("success");
      input[i].classList.remove("error");
    }

    setInput({
      email: "",
      password: "",
      repeatPassword: "",
      privacyPolicy: false,
    });

    setFomrValid({
      email: false,
      password: false,
      repeatPassword: false,
      privacyPolicy: false,
    });
  };

  return (
    <Form
      className="register-form"
      onFinish={registerUser}
      onChange={changeForm}
    >
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
          className="register-form__input"
          onChange={inputValidation}
          value={input.email}
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
          className="register-form__input"
          onChange={inputValidation}
          value={input.password}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={
            <LockOutlined style={{ color: "rgba(0,0,0,0.5)", opacity: 0.7 }} />
          }
          type="password"
          name="repeatPassword"
          placeholder="Repetir contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={input.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox
          name="privacyPolicy"
          onChange={inputValidation}
          checked={input.privacyPolicy}
        >
          He leido y acepto la politica de privacidad.
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="register-form__button">
          Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  );
}
