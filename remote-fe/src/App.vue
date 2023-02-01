<template>
  <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <div>
    <Header />
    <LoginPage />
    <!-- <router-view /> -->

  </div>

  <!-- <router-view /> -->
</template>
<script>
import Header from "./components/Header.vue";
import TechnicianPage from "./components/TechnicianPage.vue";
import SingleTechnician from "./components/SingleTechnician.vue";
import LoginPage from "./components/LoginPage.vue";

export default {
  name: "App",
  components: {
    Header,
    TechnicianPage,
    SingleTechnician,
    LoginPage
},
};
</script>

<style>
/* Start Global Rules */
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  
}
body {
  font-family: "Open Sans", sans-serif;
  font-family: "Poppins", sans-serif;
}
html {
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.container {
  margin-left: auto;
  margin-right: auto;
}
/* Small */
@media (min-width: 768px) {
  .container {
    width: 760px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
/* Medium */
@media (min-width: 992px) {
  .container {
    width: 970px;
    padding-left: 32px;
    padding-right: 32px;
  }
}
/* Large */
@media (min-width: 1200px) {
  .container {
    width: 1170px;
    padding-left: 32px;
    padding-right: 32px;
  }
}

/* End Global Rules */
</style>
