import { TaskSchema, TaskStepSchema } from '../../../services/data';

export const getInProgressTasksSteps = (task: TaskSchema): TaskStepSchema[] => {
  if (!task) return [];

  switch (task?.type) {
    case 'ppo':
      return [
        {
          order: 1,
          label: 'Текущие условия',
          key: 'currentConditions',
        },
        {
          order: 2,
          label: 'Поверхности ВС',
          key: 'aircraftSurface',
        },
        {
          order: 3,
          label: 'Результат',
          key: 'result',
        },
      ];

    default:
      return [];
  }
};
