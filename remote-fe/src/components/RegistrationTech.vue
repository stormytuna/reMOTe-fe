<template>
    <div v-if="posted">
    <div class="alert alert-success" role="alert" style="width: 22.5rem">
        <h4 class="alert-heading">You Are Registered!</h4>
        <p class="card-text">
          {{
            `Your have succesfully registered!`
          }}
        </p>
        <p>token:{{ userLoggedIn }}</p>
        <hr />
        <router-link :to="{ path: `/` }">
          <button type="button" class="btn btn-light">Get Started!</button>
        </router-link>
      </div>
</div>
<div v-else>
    <h2 class="Title">Register</h2>
    <form class="row g-3 needs-validation container loginform form-container" @submit.prevent="postUser" novalidate>
        <div class="col-md-4">
            <label for="validationCustom01" class="form-label">First name</label>
            <input type="text" class="form-control" id="validationCustom01" v-model="firstName" required>
            <div class="valid-feedback">
                Looks good!
            </div>
        </div>
        <div class="col-md-4">
                <label for="validationCustom02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="validationCustom02" v-model="lastName" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationCustomUsername" class="form-label">Username</label>
                <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" v-model="userName" required>
                    <div class="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom05" class="form-label">Password</label>
                <input type="password" class="form-control" id="validationCustom05" v-model="password" required>
                <div class="invalid-feedback">
                    Please provide a valid password.
        </div>
            <div class="col-md-6">
                <label for="validationCustom03" class="form-label">City</label>
                <input type="text" class="form-control" id="validationCustom03" v-model="city" required>
                <div class="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
    </div>
    <div class="col-md-3">
        <label for="validationCustom05" class="form-label">Postcode</label>
        <input type="text" class="form-control" id="validationCustom05" v-model="postCode" required>
        <div class="invalid-feedback">
            Please provide a valid zip.
        </div>
    </div>
    <div class="col-md-4">
        <label for="validationCustom01" class="form-label">PhoneNumber</label>
        <input type="text" class="form-control" id="validationCustom01" v-model="phoneNumber" required>
        <div class="valid-feedback">
            Looks good!
        </div>
    </div>
    <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Email</label>
        <input type="text" class="form-control" id="validationCustom01" v-model="email" required>
        <div class="valid-feedback">
            Looks good!
        </div>
    </div>
    <transition
    appear
    enter-class="animated slideInLeft"
    leave-class="animated slideOutLeft"
  >
    <div class="container scrollContainer" ref="scrollContainer">
      <div class="card-list">
          <div class="card" v-for="card in cards" :key="card.name">
            <div style="width: 9rem">
                <button @click="() => TogglePopup('buttonTrigger')">
                    <img :src="card.img_url" class="card-img-top" :alt="card.alt" />
                </button>
                    <p class="card-text">{{ card.name }}</p>
                    <Popup v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')">
                        <h2>{{card.name}}</h2>
                    </Popup>
                </div>
            </div>
      </div>
    </div>
  </transition>
    <div class="col-12">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="terms" id="invalidCheck" required>
            <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
                You must agree before submitting.
            </div>
        </div>
    </div>
    <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
    </div>
</form>
</div>
</template>
      <script>
      import axios from 'axios';
      import VueCookies from 'vue-cookies';
    import Popup from './Popup.vue';
    import { ref } from 'vue';
      export default {
    name: "RegistrationTech",
    setup () {
        const popupTriggers = ref({
            buttonTrigger: false
        })

        const TogglePopup = (trigger) => {
            popupTriggers.value[trigger] = !popupTriggers.value[trigger]
        }      
        return {
            Popup,
            popupTriggers,
            TogglePopup
        }
    },
    data() {
        return {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            phoneNumber: "",
            city: "",
            postCode: "",
            password: "",
            services: [],
            terms: false,
            loading: false,
            posted: false,
            // userLoggedIn: VueCookies.get('token')
            cards: [
                {
                    name: "MOT",
                    img_url: require("../assets/service-pictures/7.png"),
                    alt: "MOT",
                },
                {
                    name: "Valet",
                    img_url: require("../assets/service-pictures/10.png"),
                    alt: "Valet",
                },
                {
                    name: "Flat Tyre",
                    img_url: require("../assets/service-pictures/6.png"),
                    alt: "Flat Tyre",
                },
                {
                    name: "Service",
                    img_url: require("../assets/service-pictures/9.png"),
                    alt: "Service",
                },
                {
                    name: "Clutch Repairs",
                    img_url: require("../assets/service-pictures/11.png"),
                    alt: "Clutch Repairs",
                },
                {
                    name: "Battery Replacement",
                    img_url: require("../assets/service-pictures/8.png"),
                    alt: "Checkup",
                },
                {
                    name: "Tow Service",
                    img_url: require("../assets/service-pictures/5.png"),
                    alt: "Checkup",
                },
            ],
            intervalId: null,
            scrollPosition: 0,
            direction: 1,
        };
    },
    mounted() {
        setTimeout(() => {
            this.$nextTick(() => {
                this.intervalId = setInterval(() => {
                    this.$refs.scrollContainer.scrollLeft += this.direction;
                    this.scrollPosition += this.direction;
                    if (this.scrollPosition >= 30) {
                        this.direction = -1;
                    }
                    else if (this.scrollPosition <= 0) {
                        this.direction = 1;
                        clearInterval(this.intervalId);
                    }
                }, 15);
            });
        }, 2000);
    },
    methods: {
        postUser() {
            this.posted = false;
            const newUser = {
                username: this.userName,
                firstName: this.firstName,
                lastName: this.lastName,
                address: {
                    addressLine: this.city,
                    postcode: this.postCode
                },
                contact: {
                    phoneNumber: this.phoneNumber,
                    email: this.email
                },
                password: this.password,
                technician: {
                    services: [this.services]
                },
                avatarUrl: "https://i.imgur.com/SYXzHx3.jpeg"
            };
            axios
                .post(`https://remote-be.onrender.com/api/technicians/register`, newUser)
                .then((data) => {
                this.firstName = "",
                    this.lastName = "",
                    this.userName = "",
                    this.email = "",
                    this.phoneNumber = "",
                    this.city = "",
                    this.postCode = "",
                    this.password = "",
                    this.posted = true,
                    this.services = [];
                // VueCookies.set('token', data.token, "1d");
                // console.log(data, '<< data')
                // console.log(this.userLoggedIn, '<<< token')
                // // this.userLoggedIn = VueCookies.get('token')
            })
                .catch((err) => {
                console.log(err);
            });
        }
    },
    components: { Popup }
}
      </script>
      <style scoped>
      
        .loginform {
        padding-top: 25px;
         }
      
        .card-text {
        font-size: 0.9rem;
        color: #242E30;
        }

        .alert-success {
         margin-top: 35px;
         margin-left: 45%;
        }

        .alert-heading {
        font-weight: 700;
        }

        .Title {
        margin-left: 35px;
        margin-right: 35px;
        margin-top: 35px;
        margin-bottom: 15px;
        padding: 0px;
        color: #242E30;
        font-weight: 700;
        font-size: 1.75rem;
        line-height: 1.29;
        }

        .form-container {
        color: #242E30;
        padding-left: 35px;
        padding-right: 35px;
        margin-bottom: 35px;
        }

        .scrollContainer {
  width: 100%;
  overflow-x: scroll;
  padding-top: 20px;
  padding-left: 5px;
}
.card-list {
  display: flex;
  white-space: nowrap;
  margin-top: 20px;
}
.card {
  flex: 0 0 auto; /* fix card width */
  margin-right: 20px; /* add some space between cards */
  border: 0px;
  margin-bottom: 20px;
}

.card-img-top {
  border-radius: 8px;
}
.card-text {
  font-size: 0.875rem;
  padding-top: 10px;
}

@media (max-width: 700px) {
  .scrollContainer {
    padding-left: 16px;
  }
}

.slide-left-enter-active {
  animation: slide-left 0.5s;
}

@keyframes slide-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
  }
}

::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
      </style>