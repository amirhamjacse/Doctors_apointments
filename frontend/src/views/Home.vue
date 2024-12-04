<template>
    <div class="text-center">
      <div class="hero bg-primary text-white p-5 rounded-3 shadow-lg">
        <h1 class="display-4 fw-bold">Welcome to DoctorApp</h1>
        <p class="lead">Book appointments with ease and manage your health better.</p>
        <router-link to="/appointments" class="btn btn-light btn-lg mt-3">Book Appointment</router-link>
      </div>
    </div>
  </template>
  
  <style scoped>
  .hero {
    background-image: url('https://via.placeholder.com/1200x400');
    background-size: cover;
    background-position: center;
  }
  </style>
  