import React, { useContext } from "react";
import { Input } from "semantic-ui-react";

import { GroupsContext } from "../context/GroupsContextManager";
import { updateCondition } from "../utils";

const ValuesInput = ({ index: conditionIndex, condition, group }) => {
  const { groups: groupsList, updateState } = useContext(GroupsContext);

  const handleChange = (e, { value }) => {
    const updatedGroupList = updateCondition(
      group,
      conditionIndex,
      groupsList,
      { value }
    );
    updateState({ groups: updatedGroupList });
  };
  return (
    <Input
      style={{ width: "70%" }}
      value={condition.value || ""}
      onChange={handleChange}
    />
  );
};

export default ValuesInput;
