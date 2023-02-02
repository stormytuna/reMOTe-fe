<template>
<form class="row g-3 needs-validation container loginform" @submit.prevent="loginUser" novalidate>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Email</label>
    <div class="input-group has-validation">
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" v-model="email" required>
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
  </div>
  <div class="col-12">
    <router-link :to="{ path: '/' }">
      <button class="btn btn-primary" type="submit">Login</button>
    </router-link>
  </div>
</form>
  </template>
  <script>
  import axios from 'axios';
  export default {
    name: "LoginPage",
    data(){
            return {
                email: '',
                password: '',
                posted: false
            }
    },
    methods: {
            loginUser() {
            this.posted = false
            const newUser = {
            email: this.email,
            password: this.password,
            }
            axios
            .post(
            `https://remote-be.onrender.com/api/login`,
            newUser
            )
            .then((data) => {
            this.posted = true;
            this.store.actions.setUser();
            this.store.state.username = data.username
            })
            .catch((err) => {
            console.log(err);
            });
      }
    },
    async handleLogin() {
      try {
        const response = await axios.post('/api/login', this.form)
        if (response.data.success){
          this.$router.push({ name: 'home' })
        }
      } catch (e) {
        console.error(e);
      }
    }
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
  

  </style>