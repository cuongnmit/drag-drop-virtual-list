import { loremIpsum } from 'lorem-ipsum';

const tasks = Array.from({ length: 300 }, (_, index) => ({
  id: `task-${index}`,
  content: loremIpsum(),
}));

const taskIds = tasks.map(({ id }) => id);

const convertArrayToObject = (array, key, prefix = '') => array.reduce((object, item) => ({
  ...object,
  [`${prefix}${item[key]}`]: item,
}), {});

const initialData = {
  tasks: convertArrayToObject(tasks, 'id'),
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: taskIds.slice(0, 99),
    },
    'column-2': {
      id: 'column-2',
      title: 'Inprogress',
      taskIds: taskIds.slice(100, 199),
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: taskIds.slice(200, 299),
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;
