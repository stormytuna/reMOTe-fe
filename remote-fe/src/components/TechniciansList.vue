<template>
  <div class="card-list">
    <h2 class="title">All Technicians</h2>
    <div class="card" v-for="card in cards" :key="card.technician._id">
      <div class="card-item">
        <img
          :style="{
            width: computedWidth,
            height: '144px',
            objectFit: 'cover',
          }"
          :src="card.technician.technician.companyPhoto"
          class="card-img-top img-fluid"
          :alt="card.technician.firstName"
        />
        <p class="card-text company-name">
          {{
            `${card.technician.firstName} ${card.technician.lastName} - ${card.technician.address.postcode} `
          }}
        </p>
        <ul
          v-for="service in card.technician.technician.services"
          :key="service.name"
        >
          <li>
            <p class="card-text">{{ `${service.name}` }}</p>
          </li>
        </ul>
      </div>
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
        {
          technician: {
            _id: "63ce75449ae462be0adad72d",
            username: "test-tech-01",
            firstName: "James",
            lastName: "Wright",
            address: {
              addressLine: "12 Random Place",
              postcode: "KF76 9LM",
            },
            contact: {
              phoneNumber: "32985262911",
              email: "jameswright@company.com",
            },
            technician: {
              services: [
                {
                  name: "Clutch repairs",
                  price: 100,
                },
                {
                  name: "Breakdown and recovery",
                  price: 1000,
                },
                {
                  name: "Tyres, wheels and tracking",
                  price: 10000,
                },
              ],
              reviews: [
                {
                  reviewBody: "Very good services :)",
                  rating: 4,
                  reviewedBy: 1,
                },
                {
                  reviewBody: "Bad >:(",
                  rating: 1,
                  reviewedBy: "63ce75449ae462be0adad72a",
                },
              ],
              companyPhoto:
                "https://media.istockphoto.com/id/1248187106/photo/happy-customer-and-auto-mechanic-using-touchpad-in-a-workshop.jpg?s=612x612&w=0&k=20&c=7C4TtL1wJ8LTYq0HTwhHWX9Y2NjBdqcxTt6-o3EKHEo=",
            },
            reviews: [],
            avatarUrl: "https://wallpaperaccess.com/full/3723586.jpg",
          },
        },
        {
          technician: {
            _id: "63ce75449ae462be0adad72d",
            username: "test-tech-01",
            firstName: "James",
            lastName: "Wright",
            address: {
              addressLine: "12 Random Place",
              postcode: "KF76 9LM",
            },
            contact: {
              phoneNumber: "32985262911",
              email: "jameswright@company.com",
            },
            technician: {
              services: [
                {
                  name: "Clutch repairs",
                  price: 100,
                },
                {
                  name: "Breakdown and recovery",
                  price: 1000,
                },
                {
                  name: "Tyres, wheels and tracking",
                  price: 10000,
                },
              ],
              reviews: [
                {
                  reviewBody: "Very good services :)",
                  rating: 4,
                  reviewedBy: 1,
                },
                {
                  reviewBody: "Bad >:(",
                  rating: 1,
                  reviewedBy: "63ce75449ae462be0adad72a",
                },
              ],
              companyPhoto:
                "https://i1.wp.com/insurance-edge.net/wp-content/uploads/2020/03/fixter-collect-and-deliver-car-servicing-sanitised-cleaning.jpg?fit=536%2C298",
            },
            reviews: [],
            avatarUrl: "https://wallpaperaccess.com/full/3723586.jpg",
          },
        },
        {
          technician: {
            _id: "63ce75449ae462be0adad72d",
            username: "test-tech-01",
            firstName: "James",
            lastName: "Wright",
            address: {
              addressLine: "12 Random Place",
              postcode: "KF76 9LM",
            },
            contact: {
              phoneNumber: "32985262911",
              email: "jameswright@company.com",
            },
            technician: {
              services: [
                {
                  name: "Clutch repairs",
                  price: 100,
                },
                {
                  name: "Breakdown and recovery",
                  price: 1000,
                },
                {
                  name: "Tyres, wheels and tracking",
                  price: 10000,
                },
              ],
              reviews: [
                {
                  reviewBody: "Very good services :)",
                  rating: 4,
                  reviewedBy: 1,
                },
                {
                  reviewBody: "Bad >:(",
                  rating: 1,
                  reviewedBy: "63ce75449ae462be0adad72a",
                },
              ],
              companyPhoto:
                "https://www.cannonautorepair.com/images/mechanic_with_customer.jpeg",
            },
            reviews: [],
            avatarUrl: "https://wallpaperaccess.com/full/3723586.jpg",
          },
        },
        {
          technician: {
            _id: "63ce75449ae462be0adad72d",
            username: "test-tech-01",
            firstName: "James",
            lastName: "Wright",
            address: {
              addressLine: "12 Random Place",
              postcode: "KF76 9LM",
            },
            contact: {
              phoneNumber: "32985262911",
              email: "jameswright@company.com",
            },
            technician: {
              services: [
                {
                  name: "Clutch repairs",
                  price: 100,
                },
                {
                  name: "Breakdown and recovery",
                  price: 1000,
                },
                {
                  name: "Tyres, wheels and tracking",
                  price: 10000,
                },
              ],
              reviews: [
                {
                  reviewBody: "Very good services :)",
                  rating: 4,
                  reviewedBy: 1,
                },
                {
                  reviewBody: "Bad >:(",
                  rating: 1,
                  reviewedBy: "63ce75449ae462be0adad72a",
                },
              ],
              companyPhoto:
                "https://www.radiatorland.com/wp-content/uploads/2018/08/RadiatorLand-578100924.jpg",
            },
            reviews: [],
            avatarUrl: "https://wallpaperaccess.com/full/3723586.jpg",
          },
        },
        {
          technician: {
            _id: "63ce75449ae462be0adad72d",
            username: "test-tech-01",
            firstName: "James",
            lastName: "Wright",
            address: {
              addressLine: "12 Random Place",
              postcode: "KF76 9LM",
            },
            contact: {
              phoneNumber: "32985262911",
              email: "jameswright@company.com",
            },
            technician: {
              services: [
                {
                  name: "Clutch repairs",
                  price: 100,
                },
                {
                  name: "Breakdown and recovery",
                  price: 1000,
                },
                {
                  name: "Tyres, wheels and tracking",
                  price: 10000,
                },
              ],
              reviews: [
                {
                  reviewBody: "Very good services :)",
                  rating: 4,
                  reviewedBy: 1,
                },
                {
                  reviewBody: "Bad >:(",
                  rating: 1,
                  reviewedBy: "63ce75449ae462be0adad72a",
                },
              ],
              companyPhoto:
                "https://cotswoldoverland.co.uk/wp-content/uploads/mechanics.jpg",
            },
            reviews: [],
            avatarUrl: "https://wallpaperaccess.com/full/3723586.jpg",
          },
        },
        {
          technician: {
            _id: "63ce75449ae462be0adad72d",
            username: "test-tech-01",
            firstName: "James",
            lastName: "Wright",
            address: {
              addressLine: "12 Random Place",
              postcode: "KF76 9LM",
            },
            contact: {
              phoneNumber: "32985262911",
              email: "jameswright@company.com",
            },
            technician: {
              services: [
                {
                  name: "Clutch repairs",
                  price: 100,
                },
                {
                  name: "Breakdown and recovery",
                  price: 1000,
                },
                {
                  name: "Tyres, wheels and tracking",
                  price: 10000,
                },
              ],
              reviews: [
                {
                  reviewBody: "Very good services :)",
                  rating: 4,
                  reviewedBy: 1,
                },
                {
                  reviewBody: "Bad >:(",
                  rating: 1,
                  reviewedBy: "63ce75449ae462be0adad72a",
                },
              ],
              companyPhoto:
                "https://evanstire.com/wp-content/uploads/2021/11/October-blog-image-768x483.jpg",
            },
            reviews: [],
            avatarUrl: "https://wallpaperaccess.com/full/3723586.jpg",
          },
        },
        {
          technician: {
            _id: "63ce75449ae462be0adad72d",
            username: "test-tech-01",
            firstName: "James",
            lastName: "Wright",
            address: {
              addressLine: "12 Random Place",
              postcode: "KF76 9LM",
            },
            contact: {
              phoneNumber: "32985262911",
              email: "jameswright@company.com",
            },
            technician: {
              services: [
                {
                  name: "Clutch repairs",
                  price: 100,
                },
                {
                  name: "Breakdown and recovery",
                  price: 1000,
                },
                {
                  name: "Tyres, wheels and tracking",
                  price: 10000,
                },
              ],
              reviews: [
                {
                  reviewBody: "Very good services :)",
                  rating: 4,
                  reviewedBy: 1,
                },
                {
                  reviewBody: "Bad >:(",
                  rating: 1,
                  reviewedBy: "63ce75449ae462be0adad72a",
                },
              ],
              companyPhoto:
                "https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/26_0x65_1200x629_1200x630_seven-signs-header.jpg",
            },
            reviews: [],
            avatarUrl: "https://wallpaperaccess.com/full/3723586.jpg",
          },
        },
        {
          technician: {
            _id: "63ce75449ae462be0adad72d",
            username: "test-tech-01",
            firstName: "James",
            lastName: "Wright",
            address: {
              addressLine: "12 Random Place",
              postcode: "KF76 9LM",
            },
            contact: {
              phoneNumber: "32985262911",
              email: "jameswright@company.com",
            },
            technician: {
              services: [
                {
                  name: "Clutch repairs",
                  price: 100,
                },
                {
                  name: "Breakdown and recovery",
                  price: 1000,
                },
                {
                  name: "Tyres, wheels and tracking",
                  price: 10000,
                },
              ],
              reviews: [
                {
                  reviewBody: "Very good services :)",
                  rating: 4,
                  reviewedBy: 1,
                },
                {
                  reviewBody: "Bad >:(",
                  rating: 1,
                  reviewedBy: "63ce75449ae462be0adad72a",
                },
              ],
              companyPhoto:
                "https://cdn.images.express.co.uk/img/dynamic/24/750x445/1100425.jpg",
            },
            reviews: [],
            avatarUrl: "https://wallpaperaccess.com/full/3723586.jpg",
          },
        },
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
  margin-bottom: 20px;
  background: #eee;
  /* padding: 10px; */
  border-radius: 10px;
}

.card-img-top {
  border-radius: 8px;
}
.card-text {
  font-size: 0.875rem;
  padding-top: var(--bs-card-spacer-y);
}
@media (min-width: 765px) {
  .card-item {
    display: flex;
    justify-content: space-around;
  }
  img.card-img-top {
    width: 35px;
  }
}
.title {
  margin-bottom: 25px;
  font-weight: 500;
  font-size: 1.6rem;
}
.company-name {
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;
}
</style>
