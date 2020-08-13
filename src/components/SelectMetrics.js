import React, { useContext } from "react";
import { Select } from "semantic-ui-react";

import { metrics } from "../constants/constants";
import { GroupsContext } from "../context/GroupsContextManager";
import { updateCondition } from "../utils";

const SelectMetrics = ({ index: conditionIndex, condition, group }) => {
  const { groups: groupsList, updateState } = useContext(GroupsContext);

  const handleChange = (e, { value }) => {
    const updatedGroupList = updateCondition(
      group,
      conditionIndex,
      groupsList,
      { metric: value }
    );
    updateState({ groups: updatedGroupList });
  };
  return (
    <Select
      placeholder="Select Metric"
      value={condition.metric || ""}
      onChange={handleChange}
      options={metrics}
    />
  );
};

export default SelectMetrics;
