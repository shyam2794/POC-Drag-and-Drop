import React, { useContext } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { RulesContainer as Container } from "./RulesContainer.styled";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
import { GroupsContext } from "../context/GroupsContextManager";
import { listToGroup, groupToList } from "../utils";

const RulesContainer = () => {
  const { groups, updateState, ...rest } = useContext(GroupsContext);

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    // reorder the items within the individual list;
    if (result.source.droppableId === result.destination.droppableId) {
      return;
    }

    // should not drag and drop between labs and visits
    if (
      !result.destination.droppableId.includes("group") &&
      !result.source.droppableId.includes("group")
    ) {
      return;
    }

    // Moving Item from List to Group
    if (result.destination.droppableId.includes("group")) {
      const itemName = result.draggableId.split("-")[0];
      const { updatedGrouplist } = listToGroup(result, rest[itemName], groups);
      updateState({ groups: updatedGrouplist });
    } else {
      const { updatedGrouplist } = groupToList(result, groups);
      updateState({ groups: updatedGrouplist });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <SideBar />
        <MainContent />
      </Container>
    </DragDropContext>
  );
};

export default RulesContainer;
