import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
  display: grid;
  grid-template-columns: 65px 1fr;
  align-items: center;
  word-break: break-all;
`;

function ucFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <span className="text-bold">{ucFirst(task.id)}</span>
          <span className="text-name">{task.content}</span>
        </Container>
      )}
    </Draggable>
  );
}

export default Task;
