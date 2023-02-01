<template>
  <div class="container">
    <h3>What do you think about our service ?</h3>
    <form @submit="onSubmit">
      <div class="add_comment">
        <label>Add Review : </label>
        <input v-model="text" type="text" />
      </div>
      <button type="submit">Add</button>
    </form>
  </div>
  {{ review }}
</template>
<script>
export default {
  data() {
    return {
      review: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const addReview = {
        id: Math.random(),
        text: this.text,
      };
      console.log(addReview, "<<<<");
      this.$emit("add-review", addReview);
      this.text = "";
    },
  },
};
</script>
