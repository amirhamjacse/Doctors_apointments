// import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
// import Doctors from '../views/Doctors.vue';
// import Appointments from '../views/Appointments.vue';
// import AppointmentsView from '../views/AppointmentsView.vue';

// const routes = [
//   { path: '/', component: Home },
//   { path: '/doctors', component: Doctors },
//   { path: '/appointments', component: Appointments },
//   { path: '/appointments-list/:doctorId', component: AppointmentsView },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Doctors from '../views/Doctors.vue';
import Appointments from '../views/Appointments.vue';
import AppointmentsView from '../views/AppointmentsView.vue';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import Profile from '../components/Profile.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/doctors', name: 'Doctors', component: Doctors },
  { path: '/appointments', name: 'Appointments', component: Appointments, meta: { requiresAuth: true } },
  { 
    path: '/appointments-list/:doctorId', 
    name: 'AppointmentsView', 
    component: AppointmentsView, 
    props: true, 
    meta: { requiresAuth: true } 
  },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/profile', name: 'Profile', component: Profile, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guards
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = !!localStorage.getItem('token'); // Check if the user is logged in
//   if (to.meta.requiresAuth && !isAuthenticated) {
//     next({ name: 'Login' }); // Redirect to login if not authenticated
//   } else {
//     next();
//   }
// });

export default router;
