<template>
  <transition
    appear
    enter-class="animated slideInLeft"
    leave-class="animated slideOutLeft"
  >
    <div class="container scrollContainer" ref="scrollContainer">
      <div class="card-list">
        <div class="card" v-for="card in cards" :key="card.name">
          <div style="width: 9rem">
            <img :src="card.img_url" class="card-img-top" :alt="card.alt" />
            <p class="card-text">{{ card.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ServiceCards",
  data() {
    return {
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
          } else if (this.scrollPosition <= 0) {
            this.direction = 1;
            clearInterval(this.intervalId);
          }
        }, 15);
      });
    }, 2000);
  },
};
</script>

<style scoped>
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
