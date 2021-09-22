import { MaintanceTypesEnum, TaskSchema, TaskStepSchema } from '../../../services/data';

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

export const getMaintenanceItemNameByType = (type: MaintanceTypesEnum) => {
  const map = {
    [MaintanceTypesEnum.CargoMail]: 'Груз / почта',
    [MaintanceTypesEnum.Towing]: 'Буксировка',
    [MaintanceTypesEnum.PowerSupply]: 'Электропитание',
    [MaintanceTypesEnum.Passengers]: 'Пассажиры',
    [MaintanceTypesEnum.BathroomService]: 'Обслуживание санузлов',
    [MaintanceTypesEnum.Luggage]: 'Багаж',
    [MaintanceTypesEnum.Ladder]: 'Трап',
  };

  return map[type] ?? 'Неверный тип услуги';
};
