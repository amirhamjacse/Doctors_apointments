// import { defineStore } from 'pinia';

// export const useMainStore = defineStore('main', {
//   state: () => ({
//     user: null,
//     doctors: [],
//     appointments: [],
//   }),
//   actions: {
//     setUser(user) {
//       this.user = user;
//     },
//     setDoctors(doctors) {
//       this.doctors = doctors;
//     },
//     setAppointments(appointments) {
//       this.appointments = appointments;
//     },
//   },
// });

import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    doctors: [],
    appointments: [],
  }),
  actions: {
    addDoctor(doctor) {
      this.doctors.push(doctor);
    },
    addAppointment(appointment) {
      this.appointments.push(appointment);
    },
  },
});
