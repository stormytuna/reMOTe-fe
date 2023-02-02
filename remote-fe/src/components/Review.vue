<template>
  <div class="container">
    <div v-if="posted">
      <div class="alert alert-success" role="alert" style="width: 22.5rem">
        <h4 class="alert-heading">Review submitted</h4>
        <p class="card-text">
          {{ `Thanks for your feedback!` }}
        </p>

        <hr />
        <router-link :to="{ path: `/technicians/${technicianReviewed}` }">
          <button type="button" class="btn btn-light">View review</button>
        </router-link>
      </div>
    </div>
    <div v-else>
      <h2 class="Title">Leave a review</h2>
      <!-- <select
      class="form-select form-select-lg mb-3"
      aria-label=".form-select-lg example"
    >
      <option selected>Rate your technician</option>
      <option value="1">One star</option>
      <option value="2">Two star</option>
      <option value="3">Three star</option>
      <option value="4">Four star</option>
      <option value="5">Five star</option>
    </select> -->
      <div class="card mb-4">
        <form @submit="onSubmit" class="form-container">
          <p class="form-label">What do you rate your technician?</p>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="1"
              v-model="starRating"
            />
            <label class="form-check-label" for="inlineRadio1"
              >1 <font-awesome-icon icon="fa-solid fa-star"
            /></label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="2"
              v-model="starRating"
            />
            <label class="form-check-label" for="inlineRadio2">
              2
              <font-awesome-icon icon="fa-solid fa-star"
            /></label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="3"
              v-model="starRating"
            />
            <label class="form-check-label" for="inlineRadio2"
              >3 <font-awesome-icon icon="fa-solid fa-star"
            /></label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="4"
              v-model="starRating"
            />
            <label class="form-check-label" for="inlineRadio2"
              >4 <font-awesome-icon icon="fa-solid fa-star"
            /></label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="5"
              v-model="starRating"
            />
            <label class="form-check-label" for="inlineRadio2"
              >5 <font-awesome-icon icon="fa-solid fa-star"
            /></label>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >What do you think about the service you received?</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              v-model="review"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-danger">Submit</button>
        </form>
        <!-- <form @submit="onSubmit">
      <div class="add_comment">
        <label>Add Review : </label>
        <input v-model="text" type="text" />
      </div>
      <button type="submit">Add</button>
    </form>

    {{ review }} -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Review",
  data() {
    return {
      review: "",
      starRating: null,
      posted: false,
      technicianReviewed: this.$route.params.user_id,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const newReview = {
        reviewBody: this.review,
        rating: +this.starRating,
        reviewedBy: "000000000000000000000000",
      };
      console.log(newReview, "<<<<add review");
      this.posted = true;
      axios
        .post(
          `https://remote-be.onrender.com/api/users/${this.$route.params.user_id}/reviews`,
          newReview
        )
        .then((data) => {
          this.posted = true;
          this.review = "";
          this.starRating = null;
          console.log(data, "its posted");
        })
        .catch((err) => {
          console.log(err);
        });

      //   this.$emit("add-review", addReview);
      //   this.text = "";
    },
  },
};
</script>
<style scoped>
.alert-success {
  margin-top: 35px;
}
.alert-heading {
  font-weight: 700;
}
.alert {
  margin-left: 25px;
}

.Title {
  margin-left: 30px;
  margin-right: 35px;
  margin-top: 35px;
  padding: 0px;
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 1.6rem;
  color: rgb(33, 46, 48);
}
.form-container {
  padding-right: 25px;
  padding-left: 25px;
  color: rgb(33, 46, 48);
}
.form-check {
  margin-bottom: 30px;
  margin-right: 10px;
}
.form-label {
  margin-bottom: 15px;
}
.form-control {
  margin-bottom: 20px;
  font-size: 0.9rem;
}
.mb-4 {
  margin-right: 22px;
  margin-left: 22px;
  padding-top: 35px;
  padding-bottom: 35px;
  color: rgb(33, 46, 48);
  border-radius: 15px;
}
.fa-star {
  color: orange;
  font-size: 0.8rem;
}
</style>
