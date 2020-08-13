import React from "react";

import { labs, visits } from "../constants/constants";

export const GroupsContext = React.createContext();

class GroupsContextManager extends React.Component {
  state = {
    labs,
    visits,
    groups: []
  };

  updateState = newState => {
    this.setState(newState);
  };

  render() {
    const { labs: labsList, visits: visitsList, groups } = this.state;
    return (
      <GroupsContext.Provider
        value={{
          groups,
          labs: labsList,
          visits: visitsList,
          updateState: this.updateState
        }}
      >
        {this.props.children}
      </GroupsContext.Provider>
    );
  }
}

export default GroupsContextManager;
