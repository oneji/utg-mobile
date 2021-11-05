import TasksStore from './TasksStore';
import AppStore from './AppStore';
import LoginStore from './LoginStore';
import FlightsStore from './FlightsStore';
import ServicesStore from './ServicesStore';
import TreatmentsStore from './TreatmentsStore';
import UserStore from './UserStore';

class RootStore {
  tasksStore = null;
  appStore = null;
  loginStore = null;
  flightsStore = null;
  servicesStore = null;
  treatmentsStore = null;
  userStore = null;

  constructor() {
    this.tasksStore = new TasksStore(this);
    this.appStore = new AppStore(this);
    this.loginStore = new LoginStore(this);
    this.flightsStore = new FlightsStore(this);
    this.servicesStore = new ServicesStore(this);
    this.treatmentsStore = new TreatmentsStore(this);
    this.userStore = new UserStore(this);
  }
}

export const rootStore = new RootStore();

export default RootStore;
