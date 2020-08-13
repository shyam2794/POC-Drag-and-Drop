import React, { useContext } from "react";
import { Button } from "semantic-ui-react";

import {
  GroupsContainer as StyledGroupsContainer,
  MainContent,
  LogicalOperationsContainer,
  WhenContainer,
  ThenContainer
} from "./GroupsContainer.styled";
import ComponentsContainer from "./ComponentsContainer";
import { GroupsContext } from "../context/GroupsContextManager";
import { initialComponentConfig } from "../constants/constants";
import { updateCondition } from "../utils";

const GroupsContainer = ({ group }) => {
  const { groups: groupsList, updateState } = useContext(GroupsContext);

  const addComponent = () => {
    if (group.when.length + 1 > 2) {
      return;
    }

    const updatedGroupsList = updateCondition(
      group,
      group.when.length,
      groupsList,
      initialComponentConfig
    );

    updateState({ groups: updatedGroupsList });
  };

  return (
    <StyledGroupsContainer>
      <MainContent>
        <WhenContainer>
          <h3>When</h3>
          {group.when.map((condition, index) => {
            return (
              <ComponentsContainer
                key={index}
                condition={condition}
                droppableId={group.groupId}
                index={index}
                group={group}
              />
            );
          })}
        </WhenContainer>
        <ThenContainer>
          <h3>Then</h3>
        </ThenContainer>
        <pre>{JSON.stringify(group, null, 2)}</pre>
      </MainContent>
      <LogicalOperationsContainer>
        <Button attached="left" basic onClick={addComponent}>
          AND
        </Button>
        <Button attached="right" basic onClick={addComponent}>
          OR
        </Button>
      </LogicalOperationsContainer>
    </StyledGroupsContainer>
  );
};

export default GroupsContainer;
