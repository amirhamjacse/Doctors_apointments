<template>
    <div>
      <h1>Book an Appointment</h1>
      <div class="card shadow-sm p-4">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="doctor" class="form-label">Select Doctor</label>
            <select
              id="doctor"
              v-model="appointment.doctorId"
              class="form-select"
              required
            >
              <option value="" disabled>Select a doctor</option>
              <option v-for="doctor in doctors" :key="doctor.id" :value="doctor.id">
                {{ doctor.name }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <label for="date" class="form-label">Select Date</label>
            <input type="date" id="date" class="form-control" v-model="appointment.date" required />
          </div>
          <div class="mb-3">
            <label for="time" class="form-label">Select Time</label>
            <input type="time" id="time" class="form-control" v-model="appointment.time" required />
          </div>
          <button type="submit" class="btn btn-primary">Book Appointment</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { useMainStore } from '../stores/main';
  
  export default {
    setup() {
      const store = useMainStore();
      const appointment = { doctorId: '', date: '', time: '' };
  
      const submitForm = () => {
        store.addAppointment(appointment);
        alert('Appointment booked successfully!');
      };
  
      return { doctors: store.doctors, appointment, submitForm };
    },
  };
  </script>
  