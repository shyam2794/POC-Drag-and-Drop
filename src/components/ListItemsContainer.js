import React, { useState, useContext } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Accordion, Icon } from "semantic-ui-react";

import {
  AccordianContainer,
  ItemsContainer,
  Item,
  Clone
} from "./ListItemsContainer.styled";
import { GroupsContext } from "../context/GroupsContextManager";

const ListItemsContainer = ({ listName }) => {
  const [toggle, setToggle] = useState(true);
  const groupsContext = useContext(GroupsContext);

  return (
    <AccordianContainer>
      <Accordion styled>
        <Accordion.Title
          active={toggle}
          onClick={() => setToggle(prevToggle => !prevToggle)}
        >
          <Icon name="dropdown" /> {listName}
        </Accordion.Title>
        <Accordion.Content active={toggle}>
          <Droppable droppableId={listName}>
            {(provided, snapshot) => {
              return (
                <ItemsContainer
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <>
                    {groupsContext[listName].map((item, index) => {
                      return (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <>
                              <Item
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                {item.name}
                              </Item>
                              {snapshot.isDragging && (
                                <Clone>{item.name}</Clone>
                              )}
                            </>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </>
                </ItemsContainer>
              );
            }}
          </Droppable>
        </Accordion.Content>
      </Accordion>
    </AccordianContainer>
  );
};

export default ListItemsContainer;
