<template>
  <main>
    <div
      v-if="loading"
      class="spinner-border text-danger container d-flex justify-content-center"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-if="card">
      <img
        :style="{
          width: computedWidth,
          height: '180px',
          objectFit: 'cover',
        }"
        :src="card.technician.companyImage"
        class="card-img-top img-fluid"
        :alt="card.firstName"
      />

      <h2 class="emphasise container">
        {{ `${card.firstName} ${card.lastName}` }}
      </h2>

      <p class="container services-overall-title">Services</p>
      <div>
        <div class="card container service-container" style="width: 22.5rem">
          <!-- <div class="card-body"> -->
          <!-- <div
              class="title-and-button"
              v-for="(service, index) in card.technician.services"
              :key="index"
            >
              <div>
                <div
                class="card"
                v-for="(service, index) in card.technician.services"
                :key="index"
              >
                <h5 class="card-title">{{ service.name }}</h5>

                <p class="card-text">{{ `Price: £${service.price}` }}</p>
              </div>
              @click="addItem('banana')"
              <a class="btn btn-danger" @click="addItem('banana')"
                >Add to Basket</a
              >
            </div> -->
          <!-- </div>
        </div> -->
          <div
            class="card-body"
            v-for="(service, index) in card.technician.services"
            :key="index"
          >
            <div class="title-and-button">
              <div>
                <h5 class="card-title">{{ service.name }}</h5>

                <p class="card-text">{{ `Price: £${service.price}` }}</p>
              </div>
              <a class="btn btn-danger" @click="addItem(service)"
                >Add to Basket</a
              >
            </div>
          </div>
        </div>
      </div>

      <p class="container reviews-overall-title">Reviews</p>
      <div class="card container service-container" style="width: 22.5rem">
        <div
          class="card-body"
          v-for="(review, index) in card.technician.reviews"
          :key="index"
        >
          <div class="title-and-rating">
            <h5 class="card-title">{{ review._id }}</h5>
            <p class="rating">
              <font-awesome-icon icon="fa-solid fa-star" /><span class="bold">
                {{ review.rating }}
              </span>
            </p>
          </div>
          <p class="card-text">{{ `"${review.reviewBody}"` }}</p>
          <!-- <a href="#" class="btn btn-danger">Delete</a> -->
        </div>
      </div>
      <a
        href="#"
        class="btn btn-danger container contact-button"
        style="width: 22.5rem"
        >Contact Technician</a
      >
    </div>
    <router-link :class="{ active: $route.name === 'Cart' }" to="/cart">
      <div class="d-grid gap-2" v-if="showButton">
        <button class="btn btn-primary basket-button" type="button">
          <font-awesome-icon icon="fa-solid fa-basket-shopping" />
          Go to checkout <span class="bold">{{ `  (${basket.length})` }}</span>
        </button>
      </div>
    </router-link>
  </main>
</template>

<script>
import createStore from "../store/index";
import axios from "axios";
export default {
  name: "SingleTechnician",
  data() {
    return {
      windowWidth: 0,
      loading: true,
      card: null,
      technician: null,
    };
  },
  created() {
    this.fetchTechnician();
  },

  mounted() {
    // axios
    //   .get(
    //     `https://remote-be.onrender.com/api/technicians/${this.$route.params.technician_id}`
    //   )
    //   .then((response) => {
    //     this.loading = false;
    //     this.card = response.data.technician;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    averageRatings(reviewsArray) {
      let total = 0;
      reviewsArray.forEach((review) => {
        total += review.rating;
      });
      return total / reviewsArray.length;
    },

    addItem(item) {
      createStore.commit("addItem", item);
    },
    async fetchTechnician() {
      this.loading = true;
      const response = await axios.get(
        `https://remote-be.onrender.com/api/technicians/${this.$route.params.technician_id}`
      );
      this.loading = false;
      this.card = response.data.technician;
    },
  },
  computed: {
    computedWidth() {
      if (this.windowWidth > 765) {
        return "240px";
      } else {
        return this.windowWidth + "px";
      }
    },
    showButton() {
      return createStore.state.basket.length !== 0;
    },
    basket() {
      return createStore.state.basket;
    },
  },
};
</script>
<style scoped>
.emphasise {
  color: #f8333c;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 1.29;

  margin: 20px;
}
.reviews-number {
  font-weight: 600;
  margin-bottom: 0px;
  font-size: 0.8rem;
  padding-right: 15px;
  color: rgb(116, 116, 116);
}
.fa-star {
  color: orange;
  font-size: 0.9rem;
}
.rating {
  font-size: 0.7rem;
  margin-bottom: 0px;
  padding-right: 15px;
  margin-left: 10px;
}

.service-container {
  border-radius: 10px;
  line-height: 1.5;
  color: #242e30;
}
.card-text {
  font-size: 0.9rem;
}
.card-title {
  font-weight: 700;
  font-size: 1rem;
  margin-right: 5px;
}
.title-and-button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
a.btn.btn-danger {
  font-size: 0.7rem;
  font-weight: 500;
  margin-bottom: var(--bs-card-title-spacer-y);
}
.services-overall-title {
  margin-left: 35px;
  margin-right: 35px;
  padding: 0px;
  font-size: 1.1rem;
  color: #242e30;
  font-weight: 800;
}
.reviews-overall-title {
  margin-left: 35px;
  margin-right: 35px;
  margin-top: 35px;
  margin-bottom: 20px;
  padding: 0px;
  font-size: 1.1rem;
  font-weight: 800;
  color: #242e30;
}
.bold {
  font-weight: 700;
  font-size: 0.8rem;
}
.title-and-rating {
  display: flex;
}
.contact-button {
  margin-left: 35px;
  margin-right: 35px;
  margin-top: 20px;
}
.spinner-border {
  margin-top: 80%;
}
.basket-button {
  align-items: center;
  bottom: 0;
  box-shadow: 0 -4px 6px 0 rgb(27 35 36 / 2%),
    0 -2px 12px -2px rgb(27 35 36 / 8%), 0 -3px 6px 0 rgb(27 35 36 / 6%);
  height: 64px;
  padding: 16px;
  position: fixed;
  width: 100%;
  border-radius: 0px;
}
a.btn.btn-danger.container.contact-button {
  margin-bottom: 100px;
}
</style>
