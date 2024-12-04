<template>
    <div class="container">
      <h3>Signup</h3>
      <form @submit.prevent="handleSignup">
        <div class="mb-3">
          <label>Name</label>
          <input v-model="name" type="text" class="form-control" required />
        </div>
        <div class="mb-3">
          <label>Email</label>
          <input v-model="email" type="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label>Password</label>
          <input v-model="password" type="password" class="form-control" required />
        </div>
        <button class="btn btn-primary">Signup</button>
      </form>
    </div>
  </template>
  
  <script>
//   import { signup } from '../services/api';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
      };
    },
    methods: {
      handleSignup() {
        signup({ name: this.name, email: this.email, password: this.password })
          .then(() => {
            alert('Signup successful, please login.');
            this.$router.push('/login');
          })
          .catch((error) => {
            alert('Signup failed');
            console.error(error);
          });
      },
    },
  };
  </script>
  