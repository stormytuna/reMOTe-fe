<template>
  <div class="dropdown">
    <div class="dropdown-container">
      <a
        class="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort By
      </a>

      <ul class="dropdown-menu">
        <!-- <li><a class="dropdown-item" href="#">Price</a></li> -->
        <li>
          <a class="dropdown-item" @click="updateQuery('reviews')">Reviews</a>
        </li>
        <li>
          <a class="dropdown-item" @click="updateQuery('rating')">Rating</a>
        </li>
      </ul>
      <a
        class="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Order
      </a>

      <ul class="dropdown-menu">
        <li><a class="dropdown-item" @click="updateQuery('asc')">Asc</a></li>
        <li><a class="dropdown-item" @click="updateQuery('desc')">Desc</a></li>
      </ul>
    </div>

    <div class="container-fluid search-bar">
      <form class="d-flex" role="search">
        <input
          class="form-control me-2 search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "TechnicianNavBar",
  data() {
    return {
      query: "",
      query2: "",
    };
  },
  computed: {
    screenWidth() {
      return window.innerWidth;
    },
  },
  methods: {
    updateQuery(newQuery) {
      if (newQuery === "reviews" || newQuery === "rating") {
        this.query = newQuery;
      } else if (newQuery === "asc" || newQuery === "desc") {
        this.query2 = newQuery;
      }

      if (Object.keys(this.$route.query).length === 0) {
        this.$router.push({
          query: { sort_by: this.query, order: this.query2 },
        });
      } else {
        this.$router.push({
          query: {
            service: this.$route.query.service,
            sort_by: this.query,
            order: this.query2,
          },
        });
      }
    },
  },
};
</script>
<style scoped>
.dropdown {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.dropdown-toggle {
  white-space: nowrap;
  background-color: white;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  color: #101518;
  box-shadow: 0px 2px 20px #e7e7e7;
  margin: 10px;
  font-weight: 600;
}
@media (max-width: 776px) {
  .dropdown {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .search-bar {
    margin-top: 15px;
  }
}
.search {
  border-radius: 10px;
  font-size: 0.9rem;
}
</style>
