import TechnicianPage from "@/components/TechnicianPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import SingleTechnician from "@/components/SingleTechnician.vue";
import Cart from "../components/Cart.vue";
import BookingsPage from "../components/BookingsPage";
import Review from "../components/Review";
import AccountPage from "@/components/AccountPage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: TechnicianPage,
  },
  {
    path: "/technicians/:technician_id",
    name: "singleTechnician",
    component: SingleTechnician,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/user/:user_id/bookings",
    name: "BookingsPage",
    component: BookingsPage,
  },
  {
    path: "/users/:user_id/reviews",
    name: "Review",
    component: Review,
  },
  {
    path: "/user/:user_id",
    name: "account",
    component: AccountPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
