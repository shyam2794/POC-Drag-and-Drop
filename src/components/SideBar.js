import React from "react";

import { SideBarContainer } from "./SideBar.styled";
import ListItemsContainer from "./ListItemsContainer";

const SideBar = () => {
  return (
    <SideBarContainer>
      <ListItemsContainer listName="labs" />
      <ListItemsContainer listName="visits" />
    </SideBarContainer>
  );
};

export default SideBar;
