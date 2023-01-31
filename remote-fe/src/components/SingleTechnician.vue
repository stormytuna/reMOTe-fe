<template>
  <main>
    <img
      :style="{
        width: computedWidth,
        height: '144px',
        objectFit: 'cover',
      }"
      :src="card.avatarUrl"
      class="card-img-top img-fluid"
      :alt="card.firstName"
    />

    <h2 class="emphasise container">
      {{ `${card.firstName} ${card.lastName}` }}
    </h2>

    <p class="container services-overall-title">Services</p>
    <div class="card container service-container" style="width: 22.5rem">
      <div class="card-body">
        <div class="title-and-button">
          <div>
            <h5 class="card-title">MOT</h5>

            <p class="card-text">Price: £20</p>
          </div>
          <a href="#" class="btn btn-danger">Add to Basket</a>
        </div>
      </div>
      <div class="card-body">
        <div class="title-and-button">
          <div>
            <h5 class="card-title">MOT</h5>

            <p class="card-text">Price: £20</p>
          </div>
          <a href="#" class="btn btn-danger">Add to Basket</a>
        </div>
      </div>
    </div>

    <p class="container reviews-overall-title">Reviews</p>
    <div class="card container service-container" style="width: 22.5rem">
      <div class="card-body">
        <div class="title-and-rating">
          <h5 class="card-title">James</h5>
          <p class="rating">
            <font-awesome-icon icon="fa-solid fa-star" /><span class="bold">
              10
            </span>
          </p>
        </div>
        <p class="card-text">"he is really good"</p>
        <!-- <a href="#" class="btn btn-danger">Delete</a> -->
      </div>

      <div class="card-body">
        <div class="title-and-rating">
          <h5 class="card-title">James</h5>
          <p class="rating">
            <font-awesome-icon icon="fa-solid fa-star" /><span class="bold">
              10
            </span>
          </p>
        </div>
        <p class="card-text">"he is really good"</p>
      </div>
    </div>
    <a
      href="#"
      class="btn btn-danger container contact-button"
      style="width: 22.5rem"
      >Contact Technition</a
    >
  </main>
</template>

<script>
export default {
  name: "SingleTechnician",
  data() {
    return {
      windowWidth: 0,
      card: [],
      technicianData: [],
      loading: false,
    };
  },
  mounted() {
    fetch(
      "https://remote-be.onrender.com/api/technicians/63ce75449ae462be0adad72d"
    )
      .then((res) => res.json())

      .then((data) => {
        this.card = data.technician;
        this.technicianData = data.technician.technician;
      })
      .catch((err) => console.log(err.message));

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
  },
  computed: {
    computedWidth() {
      if (this.windowWidth > 765) {
        return "240px";
      } else {
        return this.windowWidth + "px";
      }
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
  margin-top: 20px;
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
</style>
