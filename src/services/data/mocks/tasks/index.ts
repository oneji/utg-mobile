import { TaskSchema } from '../..';

export const noSignTasks: TaskSchema[] = [
  {
    id: 9807789,
    title: 'ППО (предварительная)',
    time: '2021-05-27T18:21:00',
    location: 'АБВ5040',
    status: 'pending',
    signDetails: '23:00:21 для получения подписи',
    type: 'ppo',
  },
  {
    id: 9807781,
    title: 'ППО (предварительная)',
    time: '2021-05-27T18:21:00',
    location: 'АБВ5040',
    status: 'in_progress',
    signDetails: '23:00:21 для получения подписи',
    type: 'towing',
  },
  {
    id: 9807782,
    title: 'ППО (предварительная)',
    time: '2021-05-27T18:21:00',
    location: 'АБВ5040',
    status: 'in_progress',
    signDetails: '23:00:21 для получения подписи',
    type: 'ppo',
  },
  {
    id: 980739,
    title: 'ППО (предварительная)',
    time: '2021-05-27T18:21:00',
    location: 'АБВ5040',
    status: 'pending',
    signDetails: '23:00:21 для получения подписи',
    type: 'towing',
  },
];

export const singleTask: TaskSchema = {
  id: 9807789,
  title: 'ППО (предварительная)',
  time: '2021-05-27T18:21:00',
  location: 'АБВ5040',
  status: 'pending',
  signDetails: '23:00:21 для получения подписи',
  type: 'ppo',
};
