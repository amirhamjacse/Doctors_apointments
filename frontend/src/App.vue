<template>
  <div id="app">
    <Navbar />
    <div class="container mt-5">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  background-color: #f8f9fa;
}

h1, h2, h3 {
  font-weight: 600;
}
</style>
