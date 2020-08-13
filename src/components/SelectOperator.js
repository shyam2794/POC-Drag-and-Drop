import React, { useContext } from "react";
import { Select } from "semantic-ui-react";

import { operators } from "../constants/constants";
import { GroupsContext } from "../context/GroupsContextManager";
import { updateCondition } from "../utils";

const SelectOperator = ({ index: conditionIndex, condition, group }) => {
  const { groups: groupsList, updateState } = useContext(GroupsContext);

  const handleChange = (e, { value }) => {
    const updatedGroupList = updateCondition(
      group,
      conditionIndex,
      groupsList,
      { operator: value }
    );
    updateState({ groups: updatedGroupList });
  };
  return (
    <Select
      placeholder="Select Operator"
      value={condition.operator || ""}
      onChange={handleChange}
      options={operators}
    />
  );
};

export default SelectOperator;
