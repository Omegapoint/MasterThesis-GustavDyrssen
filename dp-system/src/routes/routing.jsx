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

import UserTest2point1Welcome from '../views/ui-components/userTest2point1Welcome.jsx';
import UserTest2point1Search from '../views/ui-components/userTest2point1Search.jsx';
import UserTest2point1Results from '../views/ui-components/userTest2point1Results.jsx';
import UserTest2point1Payment from '../views/ui-components/userTest2point1Payment.jsx';
import UserTest2point1End from '../views/ui-components/userTest2point1End.jsx';

import DpUserTestWelcome from '../views/ui-components/dpUserTestWelcome.jsx';
import DpUserTestSearch from '../views/ui-components/dpUserTestSearch.jsx';
import DpUserTestResults from '../views/ui-components/dpUserTestResults.jsx';
import DpUserTestPayment from '../views/ui-components/dpUserTestPayment.jsx';
import DpUserTestEnd from '../views/ui-components/dpUserTestEnd.jsx';

var ThemeRoutes = [
  {
    path: '/userTest2point1Welcome',
    name: 'User Test 2.1 Welcome',
    icon: 'mdi mdi-toggle-switch',
    component: UserTest2point1Welcome
  },
  {
    path: '/userTest2point1Search',
    name: 'User Test 2.1 Search',
    icon: 'mdi mdi-toggle-switch',
    component: UserTest2point1Search
  },
  {
    path: '/userTest2point1Results',
    name: 'User Test 2.1 Results',
    icon: 'mdi mdi-toggle-switch',
    component: UserTest2point1Results
  },
  {
    path: '/userTest2point1Payment',
    name: 'User Test 2.1 Payment',
    icon: 'mdi mdi-toggle-switch',
    component: UserTest2point1Payment
  },
  {
    path: '/userTest2point1End',
    name: 'User Test 2.1 End',
    icon: 'mdi mdi-toggle-switch',
    component: UserTest2point1End
  },
  {
    path: '/dpUserTestWelcome',
    name: 'DP User Test 2.1 Welcome',
    icon: 'mdi mdi-toggle-switch',
    component: DpUserTestWelcome
  },
  {
    path: '/dpUserTestSearch',
    name: 'DP User Test 2.1 Search',
    icon: 'mdi mdi-toggle-switch',
    component: DpUserTestSearch
  },
  {
    path: '/dpUserTestResults',
    name: 'DP User Test 2.1 Results',
    icon: 'mdi mdi-toggle-switch',
    component: DpUserTestResults
  },
  {
    path: '/dpUserTestPayment',
    name: 'DP User Test 2.1 Payment',
    icon: 'mdi mdi-toggle-switch',
    component: DpUserTestPayment
  },
  {
    path: '/dpUserTestEnd',
    name: 'DP User Test 2.1 End',
    icon: 'mdi mdi-toggle-switch',
    component: DpUserTestEnd
  },
  {
    path: '/dashboard',
    name: '',
    icon: '',
    component: Starter
  },
  {
    path: '/userTest1',
    name: '',
    icon: '',
    component: UserTest1
  },
  {
    path: '/userTest2',
    name: '',
    icon: '',
    component: UserTest2
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
