<template>
    <div class="container">
      <h3>My Profile</h3>
      <div v-if="profile">
        <p><strong>Name:</strong> {{ profile.name }}</p>
        <p><strong>Email:</strong> {{ profile.email }}</p>
      </div>
    </div>
  </template>
  
  <script>
//   import { getProfile } from '../services/api';
  
  export default {
    data() {
      return {
        profile: null,
      };
    },
    mounted() {
    //   getProfile()
    //     .then((response) => {
    //       this.profile = response.data;
    //     })
    //     .catch((error) => {
    //       alert('Failed to fetch profile');
    //       console.error(error);
    //     });
    },
  };
  </script>
  