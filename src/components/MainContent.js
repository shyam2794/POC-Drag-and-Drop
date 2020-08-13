import React, { Component } from "react";
import { Button } from "semantic-ui-react";

import { MainContentContainer } from "./MainContent.styled";
import { GroupsContext } from "../context/GroupsContextManager";
import GroupsContainer from "./GroupsContainer";

const initialGroupConfig = {
  when: [
    {
      component: null,
      operator: null,
      value: null,
      metric: null
    }
  ],
  condition: null,
  then: {}
};

class MainContent extends Component {
  addGroups = (groups, updateState) => {
    updateState({
      groups: [
        ...groups,
        { ...initialGroupConfig, groupId: `group${groups.length + 1}` }
      ]
    });
  };

  render() {
    return (
      <GroupsContext.Consumer>
        {({ groups, updateState }) => {
          return (
            <MainContentContainer>
              <Button
                content="Add Groups"
                icon="plus"
                onClick={() => this.addGroups(groups, updateState)}
                primary
                labelPosition="left"
              />
              {groups.map((group, index) => {
                return <GroupsContainer key={index} group={group} />;
              })}
            </MainContentContainer>
          );
        }}
      </GroupsContext.Consumer>
    );
  }
}

export default MainContent;
