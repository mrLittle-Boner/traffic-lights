import { createRouter, createWebHistory } from 'vue-router';
import TrafficLights from '../components/TLights.vue';
import RedLight from '../views/TRed.vue';
import YellowLight from '../views/TYellow.vue';
import GreenLight from '../views/TGreen.vue';

const routes = [
  {
    path: '/',
    name: 'Default',
    component: TrafficLights,
  },
  {
    path: '/red',
    name: 'Red',
    component: RedLight
  },
  {
    path: '/yellow',
    name: 'Yellow',
    component: YellowLight
  },
  {
    path: '/green',
    name: 'Green',
    component: GreenLight
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;