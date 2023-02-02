<template>
  <main>
    <div
      v-if="loading"
      class="spinner-border text-danger container d-flex justify-content-center"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>

    <div v-if="orders">
      <h2 class="Title">Bookings</h2>

      <div class="card-body" v-for="(booking, index) in orders" :key="index">
        <div class="col-lg-8">
          <div
            class="card mb-4 container service-container"
            style="width: 22.5rem"
          >
            <div class="card-body">
              <div class="row">
                <div class="title-and-rating">
                  <div class="col-sm-3">
                    <div>
                      <div>
                        <h5 class="card-title">
                          {{ booking.services[0].name }}
                        </h5>
                      </div>
                      <div class="col-sm-9">
                        <p class="card-text text-muted">
                          Purchased on
                          {{
                            booking.createdAt
                              .slice(0, 10)
                              .replace(/-/g, " ")
                              .split(" ")
                              .reverse()
                              .join("/")
                          }}
                        </p>
                      </div>
                    </div>
                    <p
                      v-if="booking.fulfilledAt !== null"
                      class="card-text text-muted"
                    >
                      Fulfilled on
                      {{
                        booking.fulfilledAt
                          .slice(0, 10)
                          .replace(/-/g, " ")
                          .split(" ")
                          .reverse()
                          .join("/")
                      }}
                    </p>
                    <p v-else class="card-text">Ongoing ...</p>
                    <!-- <p class="card-text description">
                {{ `"${booking.services[0].description}"` }}
              </p> -->
                    <p class="card-text description">
                      {{ `£${booking.services[0].price}` }}
                    </p>
                  </div>
                  <div v-if="booking.fulfilledAt === null">
                    <router-link
                      :to="{ path: `/technicians/${booking.servicedBy}` }"
                    >
                      <a class="btn btn-danger button">View technician</a>
                    </router-link>
                  </div>
                  <div v-else>
                    <router-link
                      :to="{ path: `/users/${booking.servicedBy}/reviews` }"
                    >
                      <a class="btn btn-danger button">Leave a review</a>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import axios from "axios";

export default {
  name: "BookingsPage",
  data() {
    return {
      orders: null,
      loading: true,
    };
  },

  mounted() {
    axios
      .get(
        `https://remote-be.onrender.com/api/users/000000000000000000000000/orders`
      )
      .then((response) => {
        this.loading = false;
        this.orders = response.data.orders.reverse();
      })
      .catch((error) => {
        console.error(error);
      });
  },
  //   created() {
  //     this.fetchUsersOrder();
  //   },
  //   method: {
  //     async fetchUsersOrder() {
  //       this.loading = true;
  //       const response = await axios.get(
  //         `https://remote-be.onrender.com/api/users/000000000000000000000000/orders`
  //       );
  //       this.loading = false;
  //       this.orders = response.data;
  //     },
  //   },
};
</script>

<style scoped>
.spinner-border {
  margin-top: 80%;
}
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
  padding:12px
}
.card-text {
  font-size: 0.8rem;
  margin-bottom: 0.1rem;
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

.Title {
  margin-left: 35px;
  margin-right: 35px;
  margin-top: 35px;
  padding: 0px;
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 1.6rem;
  color: rgb(33, 46, 48);
}
.description {
  margin-top: var(--bs-card-title-spacer-y);
  font-weight: 600;
  font-size: 1rem;
}
/* .button{
  margin-top:5px
} */
</style>
