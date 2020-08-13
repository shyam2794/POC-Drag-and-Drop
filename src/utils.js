import { initialComponentConfig } from "./constants/constants";
import { v4 as uuidv4 } from "uuid";

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const listToGroup = (result, listToFilter, groups) => {
  const deepClonedGroup = JSON.parse(JSON.stringify(groups));
  const groupToUpdate = deepClonedGroup.find(
    group => result.destination.droppableId === group.groupId
  );

  // if all the component in when is not null then block the drag
  const hasComponents = groupToUpdate.when.every(
    condition => condition.component !== null
  );
  if (hasComponents) {
    return {
      list: listToFilter,
      groups
    };
  }

  const componentToMove = listToFilter[result.source.index];

  const updatedGrouplist = updateCondition(
    groupToUpdate,
    result.destination.index,
    groups,
    { component: { id: uuidv4(), name: componentToMove.name } }
  );

  return {
    updatedGrouplist
  };
};

export const groupToList = (result, listToAdd, groups) => {
  // Find the Lab to be moved
  const deepClonedGroup = JSON.parse(JSON.stringify(groups));
  const groupToUpdate = deepClonedGroup.find(
    group => result.source.droppableId === group.groupId
  );

  const updatedGrouplist = updateCondition(
    groupToUpdate,
    result.source.index,
    groups,
    initialComponentConfig
  );

  return {
    updatedGrouplist
  };
};

// Update Conditions in Groups
export const updateCondition = (
  group,
  conditionIndex,
  groupsList,
  modifiedProp
) => {
  const clonedGroup = { ...group };

  const updatedCondition = {
    ...clonedGroup.when[conditionIndex],
    ...modifiedProp
  };

  clonedGroup.when.splice(conditionIndex, 1);
  clonedGroup.when.splice(conditionIndex, 0, updatedCondition);

  const clonedGroupsList = [...groupsList];

  //
  const indexToReplace = clonedGroupsList.findIndex(
    item => item.groupId === group.groupId
  );
  clonedGroupsList.splice(indexToReplace, 1);
  clonedGroupsList.splice(indexToReplace, 0, clonedGroup);

  return clonedGroupsList;
};
