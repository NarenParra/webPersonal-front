import Item from "antd/lib/list/Item";
import React, { useEffect, useState } from "react";
import { Switch, List, Button, Modal as ModalAntd, notification } from "antd";
import Modal from "../../../Modal";
import { updateMenuOrderApi, activateMenuApi } from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";
import DragSortableList from "react-drag-sortable";

import { EditFilled, DeleteOutlined } from "@ant-design/icons";
import "./MenuWebList.scss";

const { confirm } = ModalAntd;

export default function MenuWebList(props) {
  const { menu, setReloadMenu } = props;

  const [listItems, setlistItems] = useState([]);
  const [isVisibleModal, setisVisibleModal] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");
  const [modalContent, setmodalContent] = useState(null);

  useEffect(() => {
    const listItemsArray = [];

    menu.forEach((item) => {
      listItemsArray.push({
        content: <MenuItem item={item} activateMenu={activateMenu} />,
      });
    });
    setlistItems(listItemsArray);
  }, [menu]);

  const activateMenu = (menu, status) => {
    const accessToken = getAccessTokenApi();

    activateMenuApi(accessToken, menu._id, status)
      .then((response) => {
        console.log(response);
        notification["success"]({
          message: response.message,
        });
      })
      .catch((err) => {
        notification["error"]({
          message: "Error",
        });
      });
  };

  const onSort = (sortedList, dropEvent) => {
    const accessToken = getAccessTokenApi();
    sortedList.forEach((item) => {
      const { _id } = item.content.props.item;
      const order = item.rank;

      updateMenuOrderApi(accessToken, _id, { order });
    });
  };

  return (
    <div className="menu-web-list">
      <div className="menu-web-list__header">
        <Button type="primary">Menu Web</Button>
      </div>

      <div className="menu-web-list__items">
        <DragSortableList items={listItems} onSort={onSort} type="vertical" />
      </div>
    </div>
  );
}

function MenuItem(props) {
  const { item, activateMenu } = props;

  return (
    <List.Item
      actions={[
        <Switch
          defaultChecked={item.active}
          onChange={(e) => activateMenu(item, e)}
        />,
        <Button type="primary">
          <EditFilled />
        </Button>,
        <Button type="danger">
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta title={item.title} description={item.url} />
    </List.Item>
  );
}
