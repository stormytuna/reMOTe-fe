<template>
  <main class="container">
    <div v-if="items.length !== 0">
      <h2 class="Title">Your basket</h2>
      <div class="card container" style="width: 22.5rem">
        <div v-for="(item, index) in items" :key="index" class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-text">
            {{ `Price: £${item.price}` }}
          </p>
          <a class="btn btn-primary" @click="removeItem(item)">Remove</a>
        </div>
      </div>
      <p class="text">{{ `Total £${totalPrice(items)}` }}</p>
      <div class="d-grid gap-2">
        <button
          type="button"
          class="btn btn-danger book-now"
          @click="postItem(items)"
        >
          Book now
        </button>
      </div>
    </div>
    <div v-else>
      <p>Looks Like you have nothing in your cart</p>
    </div>
  </main>
</template>

<script>
import createStore from "../store/index";
export default {
  name: "Cart",
  data() {
    return {
      posted: false,
    };
  },

  computed: {
    items() {
      return createStore.state.basket;
    },
  },

  methods: {
    totalPrice(itemsArray) {
      let total = 0;
      itemsArray.forEach((item) => {
        total += item.price;
      });
      return total;
    },

    removeItem(item) {
      createStore.commit("removeItem", item);
    },

    postItem(items) {
      this.posted = false;
      console.log(items, '<<<<<<<items')
      axios
        .post(
          `https://remote-be.onrender.com//api/users/000000000000000000000000/orders`,
          items
        )
        .then((data) => {
          this.posted = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.card-text {
  font-size: 0.9rem;
  color: #242e30;
}
.card-title {
  font-weight: 700;
  font-size: 1rem;
  margin-right: 5px;
  color: #242e30;
}
.Title {
  margin-left: 35px;
  margin-right: 35px;
  margin-top: 35px;
  margin-bottom: 20px;
  padding: 0px;
  font-size: 1.1rem;
  font-weight: 800;
  color: #242e30;
}
.text {
  margin-top: 20px;
  margin-left: 35px;
  margin-right: 35px;
  font-weight: 600;
  color: #242e30;
}
.book-now {
  margin-left: 35px;
  margin-right: 35px;
}
</style>
