<!-- <template>
  <div>
    <h3 class="mb-4">Doctors</h3>
    <div class="list-group">
      <div
        v-for="doctor in doctors"
        :key="doctor.id"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      >
        <div>
          <h5 class="mb-1">{{ doctor.name }}</h5>
          <p class="mb-0 text-muted">{{ doctor.specialization }}</p>
        </div>
        <button class="btn btn-primary btn-sm" @click="viewAppointments(doctor.id)">View Appointments</button>
      </div>
    </div>
  </div>
</template>

<script>
// import { fetchDoctors } from '../services/api';

export default {
  data() {
    return {
      doctors: [],
    };
  },
  mounted() {
    fetchDoctors().then((response) => {
      this.doctors = response.data;
    });
  },
  methods: {
    viewAppointments(doctorId) {
      this.$router.push({ name: 'AppointmentsList', params: { doctorId } });
    },
  },
};
</script> -->

<template>
  <div class="container py-5">
    <h3 class="mb-4 text-center">Our Doctors</h3>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div v-for="doctor in doctors" :key="doctor.id" class="col">
        <div class="card h-100 shadow-sm">
          <img
            src="https://via.placeholder.com/300x200"
            class="card-img-top"
            alt="Doctor"
          />
          <div class="card-body">
            <h5 class="card-title">{{ doctor.name }}</h5>
            <p class="card-text text-muted">{{ doctor.specialization }}</p>
            <button class="btn btn-primary w-100" @click="viewAppointments(doctor.id)">View Appointments</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('Doctors component mounted');
    console.log('Doctors:', this.doctors);
  },
  data() {
    return {
      // Sample data for demo purposes
      doctors: [
        { id: 1, name: 'Dr. John Smith', specialization: 'Cardiologist' },
        { id: 2, name: 'Dr. Emily Johnson', specialization: 'Pediatrician' },
        { id: 3, name: 'Dr. Michael Brown', specialization: 'Orthopedic Surgeon' },
        { id: 4, name: 'Dr. Sarah Davis', specialization: 'Dermatologist' },
        { id: 5, name: 'Dr. David Lee', specialization: 'Neurologist' },
      ],
    };
  },
  methods: {
    viewAppointments(doctorId) {
      // Navigate to the appointments view for the selected doctor
      this.$router.push({ name: 'AppointmentsList', params: { doctorId } });
    },
  },
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
}
.card-title {
  font-size: 1.25rem;
}
.card-text {
  font-size: 0.9rem;
}
</style>
