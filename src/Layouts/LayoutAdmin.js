import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutAdmin.scss";

export default function LayouAdmin(props) {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;
  console.log("props");
  console.log(props);

  return (
    <Layout>
      {/*TO DO: Menu Sider*/}
      <Layout className="layout-admin">
        <Header className="layout-admin__header">{/*TO DO: enu top*/}</Header>
        <Content className="layout-admin__content">
          <LoadRoutes routes={routes} />
        </Content>
        <Footer className="layout-admin__footer">Naren Parra 2020</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, indes) => (
        <Route
          key={indes}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
