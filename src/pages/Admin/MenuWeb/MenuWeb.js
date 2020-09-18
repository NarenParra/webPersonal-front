import React, { useEffect, useState } from "react";
import { getMenuApi } from "../../../api/menu";
import MenuWebList from "../../../components/Admin/MenuWeb/MenuWebList";

export default function MenuWeb() {
  const [menu, setmenu] = useState([]);
  const [reloadMenu, setReloadMenu] = useState(false);

  useEffect(() => {
    getMenuApi().then((response) => {
      setmenu(response.menu);
    });
    setReloadMenu(false);
  }, [reloadMenu]);

  return (
    <div>
      <MenuWebList menu={menu} setReloadMenu={setReloadMenu} />
    </div>
  );
}
