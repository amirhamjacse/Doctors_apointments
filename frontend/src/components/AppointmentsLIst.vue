<!-- <template>
    <div>
      <h3 class="mb-4">Appointments for Doctor {{ doctorName }}</h3>
      <div v-if="appointments.length" class="list-group">
        <div
          v-for="appointment in appointments"
          :key="appointment.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <h5 class="mb-1">Patient: {{ appointment.patientName }}</h5>
            <p class="mb-0 text-muted">Date: {{ appointment.date }} | Time: {{ appointment.time }}</p>
          </div>
          <button class="btn btn-danger btn-sm" @click="cancelAppointment(appointment.id)">Cancel</button>
        </div>
      </div>
      <div v-else class="text-center">
        <p class="text-muted">No appointments found for this doctor.</p>
      </div>
    </div>
  </template>
  
  <script>
//   import { fetchAppointments, fetchDoctor, cancelAppointment } from '../services/api';
  
  export default {
    data() {
      return {
        appointments: [],
        doctorName: '',
      };
    },
    mounted() {
      const doctorId = this.$route.params.doctorId;
      fetchDoctor(doctorId).then((response) => {
        this.doctorName = response.data.name;
      });
      fetchAppointments(doctorId).then((response) => {
        this.appointments = response.data;
      });
    },
    methods: {
      cancelAppointment(appointmentId) {
        cancelAppointment(appointmentId).then(() => {
          this.appointments = this.appointments.filter((a) => a.id !== appointmentId);
          alert('Appointment canceled.');
        });
      },
    },
  };
  </script>
   -->

   <template>
  <div>
    <h3 class="mb-4">Appointments for Doctor {{ doctorName }}</h3>
    <div v-if="appointments.length" class="list-group">
      <div
        v-for="appointment in appointments"
        :key="appointment.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <h5 class="mb-1">Patient: {{ appointment.patientName }}</h5>
          <p class="mb-0 text-muted">Date: {{ appointment.date }} | Time: {{ appointment.time }}</p>
        </div>
        <button class="btn btn-danger btn-sm" @click="cancelAppointment(appointment.id)">Cancel</button>
      </div>
    </div>
    <div v-else class="text-center">
      <p class="text-muted">No appointments found for this doctor.</p>
    </div>
  </div>
</template>

<script>
// Uncomment and adjust import statements when you implement the API calls
// import { fetchAppointments, fetchDoctor, cancelAppointment } from '../services/api';

export default {
  data() {
    return {
      appointments: [],
      doctorName: '',
      // Demo data for testing
      demoAppointments: [
        {
          id: 1,
          patientName: 'John Doe',
          date: '2024-12-10',
          time: '10:00 AM',
        },
        {
          id: 2,
          patientName: 'Jane Smith',
          date: '2024-12-11',
          time: '11:30 AM',
        },
        {
          id: 3,
          patientName: 'Alice Johnson',
          date: '2024-12-12',
          time: '2:00 PM',
        },
      ],
    };
  },
  mounted() {
    const doctorId = this.$route.params.doctorId;

    // Fetch doctor data (replace with your actual API call)
    // fetchDoctor(doctorId).then((response) => {
    //   this.doctorName = response.data.name;
    // });

    // // Fetch appointments data (replace with your actual API call)
    // fetchAppointments(doctorId)
    //   .then((response) => {
    //     this.appointments = response.data;
    //     if (!this.appointments.length) {
    //       console.log('No appointments found, using demo data.');
    //       this.appointments = this.demoAppointments;
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching appointments:', error);
    //     console.log('Using demo data due to API error.');
    //     this.appointments = this.demoAppointments;
    //   });
  },
  methods: {
    cancelAppointment(appointmentId) {
      cancelAppointment(appointmentId).then(() => {
        this.appointments = this.appointments.filter((a) => a.id !== appointmentId);
        alert('Appointment canceled.');
      });
    },
  },
};
</script>
