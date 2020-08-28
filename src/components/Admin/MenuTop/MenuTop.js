import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import NdLogo from "../../../assets/img/png/logo-azul-extended.png";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setmenuCollapsed } = props;

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Link to={"/admin"}>
          <img className=" menu-top__left-logo" src={NdLogo} alt="Nd"></img>
        </Link>
        <Button type="link" onClick={() => setmenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link">
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
