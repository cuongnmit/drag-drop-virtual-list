const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out me away 1' },
    'task-2': { id: 'task-2', content: 'Take out me away 2' },
    'task-3': { id: 'task-3', content: 'Take out me away 3' },
    'task-4': { id: 'task-4', content: 'Take out me away 4' },
    'task-5': { id: 'task-5', content: 'Take out me away 5' },
    'task-6': { id: 'task-6', content: 'Take out me away 6' },
    'task-7': { id: 'task-7', content: 'Take out me away 7' },
    'task-8': { id: 'task-8', content: 'Take out me away 8' },
    'task-9': { id: 'task-9', content: 'Take out me away 9' },
    'task-10': { id: 'task-10', content: 'Take out me away 10' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Inprogress',
      taskIds: ['task-6', 'task-7', 'task-8', 'task-9', 'task-10'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;
