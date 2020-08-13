import React from "react";

import RulesContainer from "./components/RulesContainer";
import GroupsContextManager from "./context/GroupsContextManager";

function App() {
  return (
    <GroupsContextManager>
      <RulesContainer />
    </GroupsContextManager>
  );
}

export default App;
