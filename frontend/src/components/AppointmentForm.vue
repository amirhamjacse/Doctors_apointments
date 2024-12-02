<template>
  <form @submit.prevent="submitForm">
    <label for="doctor">Doctor:</label>
    <select v-model="appointment.doctorId" required>
      <option v-for="doctor in doctors" :key="doctor.id" :value="doctor.id">
        {{ doctor.name }}
      </option>
    </select>

    <label for="date">Date:</label>
    <input type="date" v-model="appointment.date" required />

    <label for="time">Time:</label>
    <input type="time" v-model="appointment.time" required />

    <button type="submit">Book Appointment</button>
  </form>
</template>

<script>
import { useMainStore } from '../stores/main';

export default {
  setup() {
    const store = useMainStore();
    const appointment = { doctorId: '', date: '', time: '' };

    const submitForm = () => {
      store.addAppointment(appointment);
      alert('Appointment booked!');
    };

    return {
      doctors: store.doctors,
      appointment,
      submitForm,
    };
  },
};
</script>
