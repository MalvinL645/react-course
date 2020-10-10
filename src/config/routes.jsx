import { Home, Contact, Experience } from '../pages';

const routes = [
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/experience',
    component: Experience,
  },
  {
    path: '/',
    component: Home,
  },
];

export default routes;
