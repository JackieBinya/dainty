import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Pricing from '../views/Pricing.vue';
import AboutUs from '../views/AboutUs.vue';
import Team from '../views/Team.vue';
import Portfolio from '../views/Portfolio.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router