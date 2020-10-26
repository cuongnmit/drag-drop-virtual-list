import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { List, CellMeasurer, CellMeasurerCache } from 'react-virtualized';

import Task from './task';
import { getBackgroundColor } from './utils';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    background-color: #ebecf0;
    width: 300px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    padding: 8px;
    height: 40px;
    margin: 0;
`;

function Column({ column, index, tasks }) {
  const cache = new CellMeasurerCache({
    fixedWidth: true,
    minHeight: 75,
  });

  const getRowRender = (_tasks) => ({
    key,
    parent,
    style,
    index: taskIndex,
  }) => {
    const task = _tasks[taskIndex];

    if (!task) return null;
    const grid = 8;

    const patchedStyle = {
      ...style,
      left: style.left + grid,
      // top: style.top + grid,
      width: `calc(${style.width} - ${grid * 2}px)`,
      height: style.height === 'auto' ? style.height : style.height - grid,
    };

    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={taskIndex}
      >
        {({ registerChild }) => (
          <Draggable
            draggableId={task.id}
            index={taskIndex}
            key={task.id}
            style={style}
          >
            {(provided, snapshot) => (
              <Task
                provided={provided}
                isDragging={snapshot.isDragging}
                task={task}
                style={patchedStyle}
                ref={registerChild}
              />
            )}
          </Draggable>
        )}
      </CellMeasurer>
    );
  };

  return (
    <Draggable draggableId={column.id} index={index}>
      {(draggaleProvided) => (
        <Container {...draggaleProvided.draggableProps} ref={draggaleProvided.innerRef}>
          <Title {...draggaleProvided.dragHandleProps}>{column.title}</Title>
          <Droppable
            type="task"
            droppableId={column.id}
            mode="virtual"
            renderClone={(
              provided,
              snapshot,
              rubric,
            ) => (
              <Task
                provided={provided}
                isDragging={snapshot.isDragging}
                task={tasks[rubric.source.index]}
              />
            )}
          >
            {(droppableProvided, snapshot) => {
              const itemCount = snapshot.isUsingPlaceholder ? tasks.length + 1 : tasks.length;

              return (
                <List
                  deferredMeasurementCache={cache}
                  height={document.documentElement.clientHeight - 40}
                  overscanRowCount={0}
                  rowCount={itemCount}
                  rowHeight={cache.rowHeight}
                  width={298}
                  ref={(ref) => {
                    if (ref) {
                      // eslint-disable-next-line react/no-find-dom-node
                      const DOMRef = ReactDOM.findDOMNode(ref);
                      if (DOMRef instanceof HTMLElement) {
                        droppableProvided.innerRef(DOMRef);
                      }
                    }
                  }}
                  style={{
                    backgroundColor: getBackgroundColor(snapshot.isDraggingOver, Boolean(snapshot.draggingFromThisWith)),
                  }}
                  rowRenderer={getRowRender(tasks)}
                />
              );
            }}
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
