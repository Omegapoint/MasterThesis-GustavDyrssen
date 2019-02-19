import Starter from '../views/starter/starter.jsx';
// ui components
import Alerts from '../views/ui-components/alert.jsx';
import Badges from '../views/ui-components/badge.jsx';
import Buttons from '../views/ui-components/button.jsx';
import Cards from '../views/ui-components/cards.jsx';
import LayoutComponent from '../views/ui-components/layout.jsx';
import PaginationComponent from '../views/ui-components/pagination.jsx';
import PopoverComponent from '../views/ui-components/popover.jsx';
import TooltipComponent from '../views/ui-components/tooltip.jsx';

import UserTest1 from '../views/ui-components/userTest1.jsx';
import UserTest2 from '../views/ui-components/userTest2.jsx';
import UserTest2point1Results from '../views/ui-components/userTest2point1Results.jsx';
import UserTest2point1Search from '../views/ui-components/userTest2point1Search.jsx';

var ThemeRoutes = [
  {
    path: '/userTest1',
    name: 'User Test 1',
    icon: 'mdi mdi-comment-processing-outline',
    component: UserTest1
  },
  {
    path: '/userTest2',
    name: 'User Test 2',
    icon: 'mdi mdi-arrange-send-backward',
    component: UserTest2
  },
  {
    path: '/userTest2point1Search',
    name: 'User Test 2.1 Search',
    icon: 'ti-loop',
    component: UserTest2point1Search
  },
  {
    path: '/userTest2point1Results',
    name: 'User Test 2.1 Results',
    icon: 'ti-loop',
    component: UserTest2point1Results
  },
  {
    path: '/questionSheet',
    name: 'Question Sheet',
    icon: 'mdi mdi-priority-high',
    component: Buttons
  },
  {
    path: '/userTest3',
    name: 'User Test 3',
    icon: 'mdi mdi-credit-card-multiple',
    component: Badges
  },
  {
    path: '/userTest4',
    name: 'User Test 4',
    icon: 'mdi mdi-apps',
    component: Cards
  },
  {
    path: '/questionSheet2',
    name: 'Question Sheet 2',
    icon: 'mdi mdi-pencil-circle',
    component: Alerts
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
