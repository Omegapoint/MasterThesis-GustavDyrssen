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

var ThemeRoutes = [
  {
    path: '/userTest1',
    name: 'User Test 1',
    icon: 'mdi mdi-comment-processing-outline',
    component: Badges
  },
  {
    path: '/userTest2',
    name: 'User Test 2',
    icon: 'mdi mdi-comment-processing-outline',
    component: Badges
  },
  {
    path: '/questionSheet',
    name: 'Question Sheet',
    icon: 'mdi mdi-pencil-circle',
    component: Buttons
  },
  {
    path: '/userTest3',
    name: 'User Test 3',
    icon: 'mdi mdi-comment-processing-outline',
    component: Badges
  },
  {
    path: '/userTest4',
    name: 'User Test 4',
    icon: 'mdi mdi-comment-processing-outline',
    component: Badges
  },
  {
    path: '/questionSheet2',
    name: 'Question Sheet 2',
    icon: 'mdi mdi-pencil-circle',
    component: Buttons
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
