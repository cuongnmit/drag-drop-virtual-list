import { loremIpsum } from 'lorem-ipsum';

const length = 300;
const numberOfColumns = 10;
const sentences = [1, 2, 3];
const tasks = Array.from({ length }, (_, index) => ({
  id: `task-${index}`,
  content: loremIpsum({
    count: sentences[Math.floor(Math.random() * sentences.length)],
    units: 'sentences',
  }),
}));

const taskIds = tasks.map(({ id }) => id);
const taskIds1 = taskIds.slice(0, (length / numberOfColumns));
const taskIds2 = taskIds.slice((length / numberOfColumns), 2 * (length / numberOfColumns));
const taskIds3 = taskIds.slice(2 * (length / numberOfColumns), 3 * (length / numberOfColumns));
const taskIds4 = taskIds.slice(3 * (length / numberOfColumns), 4 * (length / numberOfColumns));
const taskIds5 = taskIds.slice(4 * (length / numberOfColumns), 5 * (length / numberOfColumns));
const taskIds6 = taskIds.slice(5 * (length / numberOfColumns), 6 * (length / numberOfColumns));
const taskIds7 = taskIds.slice(6 * (length / numberOfColumns), 7 * (length / numberOfColumns));
const taskIds8 = taskIds.slice(7 * (length / numberOfColumns), 8 * (length / numberOfColumns));
const taskIds9 = taskIds.slice(8 * (length / numberOfColumns), 9 * (length / numberOfColumns));
const taskIds10 = taskIds.slice(9 * (length / numberOfColumns), 10 * (length / numberOfColumns));

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
      title: 'Twitter',
      taskIds: taskIds3,
    },
    'column-4': {
      id: 'column-4',
      title: 'Facebook',
      taskIds: taskIds4,
    },
    'column-5': {
      id: 'column-5',
      title: 'Google',
      taskIds: taskIds5,
    },
    'column-6': {
      id: 'column-6',
      title: 'Youtube',
      taskIds: taskIds6,
    },
    'column-7': {
      id: 'column-7',
      title: 'Done',
      taskIds: taskIds7,
    },
    'column-8': {
      id: 'column-8',
      title: 'Netflix',
      taskIds: taskIds8,
    },
    'column-9': {
      id: 'column-9',
      title: 'Roll Royce',
      taskIds: taskIds9,
    },
    'column-10': {
      id: 'column-10',
      title: 'BMW',
      taskIds: taskIds10,
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6', 'column-7', 'column-8', 'column-9', 'column-10'],
};

export default initialData;
