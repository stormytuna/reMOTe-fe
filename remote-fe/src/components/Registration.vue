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
      export default {
          name: "Registration",
          data(){
              return{
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
                phoneNumber: '',
                city: '',
                postCode: '',
                password: '',
                terms: false,
                loading: false,
                posted: false,
                // userLoggedIn: VueCookies.get('token')
            }
        },
        methods: {
            postUser() {
            this.posted = false
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
            avatarUrl: "https://i.imgur.com/SYXzHx3.jpeg"
            }
            axios
            .post(
            `https://remote-be.onrender.com/api/users/register`,
            newUser
            )
            .then((data) => {
                this.firstName = '',
                this.lastName = '',
                this.userName = '',
                this.email = '',
                this.phoneNumber = '',
                this.city = '',
                this.postCode = '',
                this.password = '',
                this.posted = true;
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