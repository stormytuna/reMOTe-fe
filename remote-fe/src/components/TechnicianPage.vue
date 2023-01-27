<template>
  <main class="container">
   
    <ServiceCards />
    <TechnicianNavBar />

    <TechniciansList />
  </main>
</template>

<script>
import ServiceCards from "./ServiceCards.vue";
import TechnicianNavBar from "./TechnicianNavBar.vue";
import TechniciansList from "./TechniciansList.vue";

export default {
  name: "TechnicianPage",
  components: {
    ServiceCards,
    TechnicianNavBar,
    TechniciansList,
  },
};
</script>
<style scoped>

</style>
