import React from "react";
import { Layout, Tabs } from "antd";
//import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/png/logo extended - copia.png";
import "./SignIn.scss";
import RegisterForm from "../../../components/Admin/RegisterForm";
import LoginForm from "../../../components/Admin/LogInForm/LoginForm";
import { getAccessTokenApi } from "../../../api/auth";
import { Redirect } from "react-router-dom";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  if (getAccessTokenApi()) {
    return <Redirect to="/admin"></Redirect>;
  }
  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="NarenDev"></img>
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Entrar</span>} key="!">
              <LoginForm />
            </TabPane>
            <TabPane tab={<span>Nuevo Usuario</span>} key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
