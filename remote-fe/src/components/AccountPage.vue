<template>
  <section>
    <h2 class="Title">Your Account</h2>

    <div class="row">
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body text-center">
            <img
              :src="user.avatarUrl"
              alt="avatar"
              class="rounded-circle img-fluid"
              style="width: 150px"
            />
            <h5 class="my-3 emphasise">
              {{ user.firstName + " " + user.lastName }}
            </h5>
            <p class="text-muted mb-2 text">@{{ user.username }}</p>
            <p class="text-muted mb-1 text">
              {{ user.technician ? "Technician account" : "User account" }}
            </p>
            <!-- <div class="d-flex justify-content-center mb-2">
                         <button type="button" class="btn btn-primary">Messages</button>
                      </div> -->
          </div>
        </div>

        <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0 card-title">Full Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0 text">
                    {{ user.firstName + " " + user.lastName }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <!-- <div class="flex"> -->
                <!-- <div> -->
                <div class="col-sm-3">
                  <p class="mb-0 card-title">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0 text">{{ user.contact.email }}</p>
                </div>
                <!-- </div> -->
                <div class="col-sm-9">
                  <!-- <button type="button" class="btn btn-primary" >Edit</button> -->
                  <!-- </div> -->
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0 card-title">Phone</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0 text">
                    {{ user.contact.phoneNumber }}
                  </p>
                </div>
              </div>

              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0 card-title">Address</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0 text">
                    {{ user.address.addressLine }}
                  </p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0 text">
                    {{ user.address.postcode }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div v-if="user.technician.length > 0"> -->
          <!-- <div class="card mb-4 mb-lg-0">
            <div class="card-body p-0">
              <ul class="list-group list-group-flush rounded-3">
                <div class="card-body">
                  <h5 class="my-2 services-overall-title">Services</h5> -->
          <!-- <div
                  class="card-body"
                  v-for="(service, index) in card.technician.services"
                  :key="index"
                >
                  <div class="title-and-button">
                    <div>
                      <h5 class="card-title">{{ service.name }}</h5>

                      <p class="card-text">{{ `Price: £${service.price}` }}</p>
                    </div>
                  </div>
                </div> -->
          <!-- </div>
              </ul>
            </div>
          </div> -->
          <!-- </div> -->
        </div>
        <div class="card mb-4">
          <div class="card-body">
            <ul class="list-group list-group-flush rounded-3">
              <h5 class="my-2 services-overall-title">Reviews</h5>
              <p class="text-muted mb-0 text">You have no reviews</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "AccountPage",
  data() {
    return {
      loading: true,
      user: null,
    };
  },
  created() {
    this.fetchTechnician();
  },
  methods: {
    async fetchTechnician() {
      this.loading = true;
      const response = await axios.get(
        `https://remote-be.onrender.com/api/users/${this.$route.params.user_id}`
      );
      this.loading = false;
      this.user = response.data.user;
      console.log(this.user);
    },
  },
};
</script>
<style scoped>
.card {
  margin-right: 35px;
  margin-left: 35px;
  padding-top: 0px;
  color: rgb(33, 46, 48);
  border-radius: 15px;
}

.Title {
  margin-left: 35px;
  margin-top: 35px;
  margin-bottom: 25px;
  padding: 0px;
  font-weight: 700;
  font-size: 1.6rem;
  color: rgb(33, 46, 48);
}
.services-overall-title {
  padding: 0px;
  font-size: 1.05rem;
  color: #242e30;
  font-weight: 600;
}
.emphasise {
  color: #f8333c;
  font-weight: 700;
  margin-bottom: 0rem;
}
.my-3 {
  margin-bottom: 0.2rem !important;
}
.mb-2 {
  margin-bottom: 0rem !important;
}
.card-title {
  font-weight: 600;
  font-size: 1rem;
  margin-right: 5px;
}
.text {
  font-size: 0.9rem;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
button.btn.btn-primary {
  font-size: 0.8rem;
}
</style>
