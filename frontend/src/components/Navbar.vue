<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold text-primary" href="#">DoctorApp</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/doctors" class="nav-link">Doctors</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/appointments" class="nav-link">Appointments</router-link>
          </li>
          <!-- Example of dynamic navigation: -->
          <li class="nav-item">
            <router-link to="/appointments-list/1" class="nav-link">Appointments List</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.nav-link {
  font-weight: 500;
}
</style>
