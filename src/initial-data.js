import { loremIpsum } from 'lorem-ipsum';

const length = 99;
const sentences = [1, 2, 3];
const tasks = Array.from({ length }, (_, index) => ({
  id: `task-${index}`,
  content: loremIpsum({
    count: sentences[Math.floor(Math.random() * sentences.length)],
    units: 'sentences',
  }),
}));

const taskIds = tasks.map(({ id }) => id);
const taskIds1 = taskIds.slice(0, (length / 3));
const taskIds2 = taskIds.slice((length / 3), 2 * (length / 3));
const taskIds3 = taskIds.slice(2 * (length / 3), length);

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
      taskIds: taskIds1,
    },
    'column-2': {
      id: 'column-2',
      title: 'Inprogress',
      taskIds: taskIds2,
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: taskIds3,
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;
