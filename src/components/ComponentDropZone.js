import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import {
  DropComponentContainer,
  DroppedItem
} from "./ComponentDropZone.styled";

// Todo:
// style the drop zone when the component is draged over
// when there is already a item in the drop zone , remove the dashed border

const ComponentDropZone = ({ droppableId, component, index }) => {
  if (!component) {
    return (
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => {
          return (
            <DropComponentContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              Drop Component Here
              {provided.placeholder}
            </DropComponentContainer>
          );
        }}
      </Droppable>
    );
  }

  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => {
        return (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Draggable
              key={component.id}
              draggableId={component.id}
              index={index}
            >
              {(provided, snapshot) => (
                <DroppedItem
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  key={component.id}
                >
                  {component.name}
                </DroppedItem>
              )}
            </Draggable>
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default ComponentDropZone;
