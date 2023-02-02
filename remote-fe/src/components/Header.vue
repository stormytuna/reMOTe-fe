<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid header">
        <a class="navbar-brand logo" href="#">
          <img
            :src="logo_url"
            alt="remote logo"
            width="30"
            height="36.15"
            class="d-inline-block align-text-center logo"
          />
          reMOTe
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#/user/000000000000000000000000"
                >Account</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Messages</a>
            </li>
            <li class="nav-item">
              <router-link
                :to="{ path: `/user/000000000000000000000000/bookings` }"
              >
                <a class="nav-link">Bookings</a>
              </router-link>
            </li>
          </ul>

          <button type="button" class="btn btn-light">Logout</button>
        </div>
      </div>
    </nav>

    <!-- <button type="button" class="btn btn-light">Sign up</button> -->
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      logo_url: require("../assets/remote-logos/logo.png"),
    };
  },
};
</script>
<style scoped>
.header {
  margin: 10px;
  background-color: white;
}
.logo {
  font-weight: 700;
  color: #f8333c;
}
.logo {
  margin-right: 5px;
}
.navbar {
  box-shadow: 0px 7px 15px #ececec;
  /* box-shadow: 0px 5px 15px #787878; */
}
</style>
