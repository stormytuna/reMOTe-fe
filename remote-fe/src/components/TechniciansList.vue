<template>
  <div class="card-list">
    <h2 class="title">All Technicians</h2>
    <div class="card" v-for="card in cards" :key="card._id">
      <router-link :to="{ path: '/technicians/technician_id' }">
        <div class="card-item">
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
          <p class="card-text company-name">
            <span class="emphasise">{{
              `${card.firstName} ${card.lastName}`
            }}</span>
            {{ ` - ${card.address.postcode}` }}
          </p>

          <ul class="services-list">
            <p class="rating">
              <font-awesome-icon icon="fa-solid fa-star" /><span class="bold">
                {{ averageRatings(card.technician.reviews) }}
              </span>
              ({{ card.technician.reviews.length }})
            </p>

            <p class="reviews-number">
              <font-awesome-icon icon="fa-solid fa-comment" />
              {{ card.technician.reviews.length }}
            </p>

            <li
              v-for="(service, index) in card.technician.services"
              :key="service.name"
            >
              <span v-if="index !== 0" class="bullet">•</span>
              <p class="card-text">{{ `${service.name}` }}</p>
            </li>
          </ul>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechniciansList",

  data() {
    return {
      windowWidth: 0,
      cards: [
        // {
        //   technician: {
        //     _id: "63ce75449ae462be0adad72d",
        //     username: "test-tech-01",
        //     firstName: "James",
        //     lastName: "Wright",
        //     address: {
        //       addressLine: "12 Random Place",
        //       postcode: "KF76 9LM",
        //     },
        //     contact: {
        //       phoneNumber: "32985262911",
        //       email: "jameswright@company.com",
        //     },
        //     technician: {
        //       services: [
        //         {
        //           name: "Clutch ",
        //           price: 100,
        //         },
        //         {
        //           name: "Breakdown",
        //           price: 1000,
        //         },
        //         {
        //           name: "Tyres",
        //           price: 10000,
        //         },
        //       ],
        //       reviews: [
        //         {
        //           reviewBody: "Very good services :)",
        //           rating: 4,
        //           reviewedBy: 1,
        //         },
        //         {
        //           reviewBody: "Bad >:(",
        //           rating: 1,
        //           reviewedBy: "63ce75449ae462be0adad72a",
        //         },
        //       ],
        //       companyPhoto:
        //         "https://media.istockphoto.com/id/1248187106/photo/happy-customer-and-auto-mechanic-using-touchpad-in-a-workshop.jpg?s=612x612&w=0&k=20&c=7C4TtL1wJ8LTYq0HTwhHWX9Y2NjBdqcxTt6-o3EKHEo=",
        //     },
        //     reviews: [],
        //     avatarUrl: "https://wallpaperaccess.com/full/3723586.jpg",
        //   },
        // },
        // {
        //   technician: {
        //     _id: "63ce75449ae462be0adad72d",
        //     username: "test-tech-01",
        //     firstName: "James",
        //     lastName: "Wright",
        //     address: {
        //       addressLine: "12 Random Place",
        //       postcode: "KF76 9LM",
        //     },
        //     contact: {
        //       phoneNumber: "32985262911",
        //       email: "jameswright@company.com",
        //     },
        //     technician: {
        //       services: [
        //         {
        //           name: "Clutch repairs",
        //           price: 100,
        //         },
        //         {
        //           name: "Breakdown and recovery",
        //           price: 1000,
        //         },
        //         {
        //           name: "Tyres, wheels and tracking",
        //           price: 10000,
        //         },
        //       ],
        //       reviews: [
        //         {
        //           reviewBody: "Very good services :)",
        //           rating: 4,
        //           reviewedBy: 1,
        //         },
        //         {
        //           reviewBody: "Bad >:(",
        //           rating: 1,
        //           reviewedBy: "63ce75449ae462be0adad72a",
        //         },
        //       ],
        //       companyPhoto:
        //         "https://i1.wp.com/insurance-edge.net/wp-content/uploads/2020/03/fixter-collect-and-deliver-car-servicing-sanitised-cleaning.jpg?fit=536%2C298",
        //     },
        //     reviews: [],
        //     avatarUrl: "https://wallpaperaccess.com/full/3723586.jpg",
        //   },
        // },
        // {
        //   technician: {
        //     _id: "63ce75449ae462be0adad72d",
        //     username: "test-tech-01",
        //     firstName: "James",
        //     lastName: "Wright",
        //     address: {
        //       addressLine: "12 Random Place",
        //       postcode: "KF76 9LM",
        //     },
        //     contact: {
        //       phoneNumber: "32985262911",
        //       email: "jameswright@company.com",
        //     },
        //     technician: {
        //       services: [
        //         {
        //           name: "Clutch repairs",
        //           price: 100,
        //         },
        //         {
        //           name: "Breakdown and recovery",
        //           price: 1000,
        //         },
        //         {
        //           name: "Tyres, wheels and tracking",
        //           price: 10000,
        //         },
        //       ],
        //       reviews: [
        //         {
        //           reviewBody: "Very good services :)",
        //           rating: 4,
        //           reviewedBy: 1,
        //         },
        //         {
        //           reviewBody: "Bad >:(",
        //           rating: 1,
        //           reviewedBy: "63ce75449ae462be0adad72a",
        //         },
        //       ],
        //       companyPhoto:
        //         "https://www.cannonautorepair.com/images/mechanic_with_customer.jpeg",
        //     },
        //     reviews: [],
        //     avatarUrl: "https://wallpaperaccess.com/full/3723586.jpg",
        //   },
        // },
        // {
        //   technician: {
        //     _id: "63ce75449ae462be0adad72d",
        //     username: "test-tech-01",
        //     firstName: "James",
        //     lastName: "Wright",
        //     address: {
        //       addressLine: "12 Random Place",
        //       postcode: "KF76 9LM",
        //     },
        //     contact: {
        //       phoneNumber: "32985262911",
        //       email: "jameswright@company.com",
        //     },
        //     technician: {
        //       services: [
        //         {
        //           name: "Clutch repairs",
        //           price: 100,
        //         },
        //         {
        //           name: "Breakdown and recovery",
        //           price: 1000,
        //         },
        //         {
        //           name: "Tyres, wheels and tracking",
        //           price: 10000,
        //         },
        //       ],
        //       reviews: [
        //         {
        //           reviewBody: "Very good services :)",
        //           rating: 4,
        //           reviewedBy: 1,
        //         },
        //         {
        //           reviewBody: "Bad >:(",
        //           rating: 1,
        //           reviewedBy: "63ce75449ae462be0adad72a",
        //         },
        //       ],
        //       companyPhoto:
        //         "https://www.radiatorland.com/wp-content/uploads/2018/08/RadiatorLand-578100924.jpg",
        //     },
        //     reviews: [],
        //     avatarUrl: "https://wallpaperaccess.com/full/3723586.jpg",
        //   },
        // },
        // {
        //   technician: {
        //     _id: "63ce75449ae462be0adad72d",
        //     username: "test-tech-01",
        //     firstName: "James",
        //     lastName: "Wright",
        //     address: {
        //       addressLine: "12 Random Place",
        //       postcode: "KF76 9LM",
        //     },
        //     contact: {
        //       phoneNumber: "32985262911",
        //       email: "jameswright@company.com",
        //     },
        //     technician: {
        //       services: [
        //         {
        //           name: "Clutch repairs",
        //           price: 100,
        //         },
        //         {
        //           name: "Breakdown and recovery",
        //           price: 1000,
        //         },
        //         {
        //           name: "Tyres, wheels and tracking",
        //           price: 10000,
        //         },
        //       ],
        //       reviews: [
        //         {
        //           reviewBody: "Very good services :)",
        //           rating: 4,
        //           reviewedBy: 1,
        //         },
        //         {
        //           reviewBody: "Bad >:(",
        //           rating: 1,
        //           reviewedBy: "63ce75449ae462be0adad72a",
        //         },
        //       ],
        //       companyPhoto:
        //         "https://cotswoldoverland.co.uk/wp-content/uploads/mechanics.jpg",
        //     },
        //     reviews: [],
        //     avatarUrl: "https://wallpaperaccess.com/full/3723586.jpg",
        //   },
        // },
        // {
        //   technician: {
        //     _id: "63ce75449ae462be0adad72d",
        //     username: "test-tech-01",
        //     firstName: "James",
        //     lastName: "Wright",
        //     address: {
        //       addressLine: "12 Random Place",
        //       postcode: "KF76 9LM",
        //     },
        //     contact: {
        //       phoneNumber: "32985262911",
        //       email: "jameswright@company.com",
        //     },
        //     technician: {
        //       services: [
        //         {
        //           name: "Clutch repairs",
        //           price: 100,
        //         },
        //         {
        //           name: "Breakdown and recovery",
        //           price: 1000,
        //         },
        //         {
        //           name: "Tyres, wheels and tracking",
        //           price: 10000,
        //         },
        //       ],
        //       reviews: [
        //         {
        //           reviewBody: "Very good services :)",
        //           rating: 4,
        //           reviewedBy: 1,
        //         },
        //         {
        //           reviewBody: "Bad >:(",
        //           rating: 1,
        //           reviewedBy: "63ce75449ae462be0adad72a",
        //         },
        //       ],
        //       companyPhoto:
        //         "https://evanstire.com/wp-content/uploads/2021/11/October-blog-image-768x483.jpg",
        //     },
        //     reviews: [],
        //     avatarUrl: "https://wallpaperaccess.com/full/3723586.jpg",
        //   },
        // },
        // {
        //   technician: {
        //     _id: "63ce75449ae462be0adad72d",
        //     username: "test-tech-01",
        //     firstName: "James",
        //     lastName: "Wright",
        //     address: {
        //       addressLine: "12 Random Place",
        //       postcode: "KF76 9LM",
        //     },
        //     contact: {
        //       phoneNumber: "32985262911",
        //       email: "jameswright@company.com",
        //     },
        //     technician: {
        //       services: [
        //         {
        //           name: "Clutch repairs",
        //           price: 100,
        //         },
        //         {
        //           name: "Breakdown and recovery",
        //           price: 1000,
        //         },
        //         {
        //           name: "Tyres, wheels and tracking",
        //           price: 10000,
        //         },
        //       ],
        //       reviews: [
        //         {
        //           reviewBody: "Very good services :)",
        //           rating: 4,
        //           reviewedBy: 1,
        //         },
        //         {
        //           reviewBody: "Bad >:(",
        //           rating: 1,
        //           reviewedBy: "63ce75449ae462be0adad72a",
        //         },
        //       ],
        //       companyPhoto:
        //         "https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/26_0x65_1200x629_1200x630_seven-signs-header.jpg",
        //     },
        //     reviews: [],
        //     avatarUrl: "https://wallpaperaccess.com/full/3723586.jpg",
        //   },
        // },
        // {
        //   technician: {
        //     _id: "63ce75449ae462be0adad72d",
        //     username: "test-tech-01",
        //     firstName: "James",
        //     lastName: "Wright",
        //     address: {
        //       addressLine: "12 Random Place",
        //       postcode: "KF76 9LM",
        //     },
        //     contact: {
        //       phoneNumber: "32985262911",
        //       email: "jameswright@company.com",
        //     },
        //     technician: {
        //       services: [
        //         {
        //           name: "Clutch repairs",
        //           price: 100,
        //         },
        //         {
        //           name: "Breakdown",
        //           price: 1000,
        //         },
        //         {
        //           name: " Flat tyres",
        //           price: 10000,
        //         },
        //       ],
        //       reviews: [
        //         {
        //           reviewBody: "Very good services :)",
        //           rating: 4,
        //           reviewedBy: 1,
        //         },
        //         {
        //           reviewBody: "Bad >:(",
        //           rating: 1,
        //           reviewedBy: "63ce75449ae462be0adad72a",
        //         },
        //       ],
        //       companyPhoto:
        //         "https://cdn.images.express.co.uk/img/dynamic/24/750x445/1100425.jpg",
        //     },
        //     reviews: [],
        //     avatarUrl: "https://wallpaperaccess.com/full/3723586.jpg",
        //   },
        // },
      ],
    };
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

  mounted() {
    fetch("https://remote-be.onrender.com/api/technicians")
      .then((res) => res.json())

      .then((data) => {
        this.cards = data.technicians;
      })
      .catch((err) => console.log(err.message));

    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    averageRatings(reviewsArray) {
      console.log(reviewsArray, "<<<<<<<frect");
      let total = 0;
      reviewsArray.forEach((review) => {
        total += review.rating;
      });
      return total / reviewsArray.length;
    },
  },
};
</script>
<style scoped>
.card-list {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  align-items: center;
}
.card {
  margin-left: 10px;
  margin-right: 10px; /* add some space between cards */
  border: 0px;
  margin-bottom: 30px;
}

.card-img-top {
  border-radius: 8px;
}
.card-text {
  font-size: 0.8rem;
  font-weight: 300;
  vertical-align: middle;
  margin-bottom: 10px;
}
.card-item {
  margin-bottom: 10px;
}
@media (min-width: 765px) {
  .card-item {
    display: flex;
    justify-content: space-around;
  }
  img.card-img-top {
    width: 35px;
  }
  .company-name {
    padding-left: var(--bs-card-spacer-y);
  }
}
.title {
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 1.6rem;
  color: rgb(33, 46, 48);
}
.company-name {
  font-size: 0.8rem;
  line-height: 1.5;
  padding-top: var(--bs-card-spacer-y);
  margin-bottom: 0;
  padding-bottom: 7px;
}
.emphasise {
  color: #f8333c;
  font-weight: 700;
  font-size: 0.9rem;
}
.services-list {
  display: flex;
  flex-wrap: wrap;
  line-height: 1;
}
.services-list li {
  padding-right: 5px;
  display: flex;
  align-items: center;
}
.bullet {
  padding-right: 5px;
  display: inline-block;
  vertical-align: middle;
  color: rgb(179, 179, 179);
  font-size: 0.6rem;
  margin-bottom: 10px;
}
/* .reviews {
  display: flex;
  justify-content: flex-end;
  color: rgb(179, 179, 179);
  font-size: 0.9rem;
  align-items: center;
  padding-right: 15px;
} */
.reviews-number {
  font-weight: 600;
  margin-bottom: 0px;
  font-size: 0.8rem;
  padding-right: 15px;
  color: rgb(179, 179, 179);
}
.fa-star {
  color: orange;
  font-size: 0.9rem;
}
.rating {
  font-size: 0.7rem;
  margin-bottom: 0px;
  padding-right: 15px;
}
.bold {
  padding-left: 5px;
  font-weight: 700;
  font-size: 0.8rem;
}
a {
  color: rgb(33, 46, 48);
}
</style>
