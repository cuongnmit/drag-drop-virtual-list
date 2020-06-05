import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    background-color: white;
    width: 300px;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    transition: background-color .2s ease;
    background-color: ${(props) => (props.isDraggingOver ? 'skyblue' : 'inherit')};
    flex-grow: 1;
`;

function Column({ column, index, tasks }) {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(draggaleProvided) => (
        <Container {...draggaleProvided.draggableProps} ref={draggaleProvided.innerRef}>
          <Title {...draggaleProvided.dragHandleProps}>{column.title}</Title>
          <Droppable droppableId={column.id} type="task">
            {(droppableProvided, snapshot) => (
              <TaskList
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                { tasks.map((task, taskIndex) => <Task key={task.id} task={task} index={taskIndex} />) }
                { droppableProvided.placeholder }
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
}

Column.propTypes = {
  index: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  column: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Column;
