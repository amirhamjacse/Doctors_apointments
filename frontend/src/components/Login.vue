<template>
    <div class="container">
      <h3>Login</h3>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label>Email</label>
          <input v-model="email" type="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label>Password</label>
          <input v-model="password" type="password" class="form-control" required />
        </div>
        <button class="btn btn-primary">Login</button>
      </form>
    </div>
  </template>
  
  <script>
//   import { login } from '../services/api';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        login({ email: this.email, password: this.password })
          .then((response) => {
            localStorage.setItem('token', response.data.token);
            this.$router.push('/profile');
          })
          .catch((error) => {
            alert('Login failed');
            console.error(error);
          });
      },
    },
  };
  </script>
  