import TechnicianPage from "@/components/TechnicianPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import SingleTechnician from "@/components/SingleTechnician.vue";
import Cart from "../components/Cart.vue";
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
