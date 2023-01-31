<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>{{ data }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Sike",
  data() {
    return {
      loading: true,
      data: null,
    };
  },
  mounted() {
    axios
      .get("https://remote-be.onrender.com/api/technicians")
      .then((response) => {
        this.loading = false;
        this.data = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
