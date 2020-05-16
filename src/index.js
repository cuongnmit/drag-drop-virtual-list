import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import initialData from './initial-data';
import Column from './column';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends React.Component {
  state = initialData;

  onDragEnd = (result) => {
    console.log(result);
  };

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        <Container>
          {
            this.state.columnOrder.map((columnId) => {
              const column = this.state.columns[columnId];
              const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

              return <Column key={column.id} column={column} tasks={tasks} />;
            })
          }
        </Container>
    </DragDropContext>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
