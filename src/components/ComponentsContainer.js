import React from "react";

import {
  StyledComponentsContainer,
  DroppableComponentContainer,
  OperatorContainer,
  ValueContainer,
  MetricContainer
} from "./ComponentsContainer.styled";
import ComponentDropZone from "./ComponentDropZone";
import SelectOperator from "./SelectOperator";
import ValuesInput from "./ValuesInput";
import SelectMetrics from "./SelectMetrics";

const ComponentsContainer = ({ droppableId, condition, index, group }) => {
  return (
    <StyledComponentsContainer>
      <DroppableComponentContainer>
        <ComponentDropZone
          droppableId={droppableId}
          component={condition.component}
          index={index}
        />
      </DroppableComponentContainer>
      <OperatorContainer>
        <SelectOperator index={index} group={group} condition={condition} />
      </OperatorContainer>
      <ValueContainer>
        <ValuesInput index={index} group={group} condition={condition} />
      </ValueContainer>
      <MetricContainer>
        <SelectMetrics index={index} group={group} condition={condition} />
      </MetricContainer>
    </StyledComponentsContainer>
  );
};

export default ComponentsContainer;
