<template>
  <main class="container">
    <div v-if="booked">
      <div class="alert alert-success" role="alert" style="width: 22.5rem">
        <h4 class="alert-heading">All Booked!</h4>
        <p class="card-text">
          {{
            `Your have succesfully booked your services! The technician will be in touch as soon as possible to arrange date, time and payment methods.`
          }}
        </p>

        <hr />
        <button type="button" class="btn btn-light">View Bookings</button>
      </div>
    </div>
    <div v-else-if="items.length !== 0">
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
      <div class="gap-2">
        <button
          type="button"
          class="btn btn-danger book-now"
          @click="postItem(items)"
        >
          Book now
        </button>
        <button type="button" class="btn btn-light book-now" @click="goBack">
          Go back
        </button>
      </div>
    </div>
    <div v-else>
      <h2 class="Title">Your basket</h2>
      <p class="empty-text">Your basket is empty</p>
      <button type="button" class="btn btn-danger go-back" @click="goBack">
        Go back
      </button>
    </div>
  </main>
</template>

<script>
import createStore from "../store/index";
import axios from "axios";
export default {
  name: "Cart",
  data() {
    return {
      booked: false,
    };
  },

  computed: {
    items() {
      return createStore.state.basket;
    },
  },

  methods: {
    goBack() {
      window.history.back();
    },
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


      items.forEach((item) => {
        const cart = {
          services: [
            {
              name: item.name,
              price: item.price,
              description: item.description,
            },
          ],
          createdAt: Date.now(),
          fulfilledAt: null,
          servicedBy: "000000000000000000000012",
        };
    
        axios
          .post(
            `https://remote-be.onrender.com/api/users/000000000000000000000000/orders`,
            cart
          )
          .then((data) => {
            this.booked = true;
            createStore.commit("clearBasket");
          })
          .catch((err) => {
            console.log(err);
          });
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
.alert-success {
  margin-top: 35px;
}
.alert-heading {
  font-weight: 700;
}
.btn-light {
  font-size: 0.9rem;
  color: #242e30;
}
.empty-text {
  margin-top: 20px;
  margin-left: 35px;
  margin-right: 35px;
  color: #242e30;
}
.alert {
  margin-left: 20px;
}
.gap-2 {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
}
button.btn.btn-light.book-now {
  margin: 0;
  width: 50%;
  margin-left: 5px;
  background-color: rgb(240, 240, 240);
  border-color: rgb(240, 240, 240);
}
button.btn.btn-danger.book-now {
  margin: 0;
  width: 50%;
}
.go-back {
  margin-left: 30px;
}
</style>
