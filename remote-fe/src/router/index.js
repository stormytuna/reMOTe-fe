import TechnicianPage from "@/components/TechnicianPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import SingleTechnician from "@/components/SingleTechnician.vue";
import AccountPage from "@/components/AccountPage.vue"
const routes = [
  {
    path: "/",
    name: "home",
    component: TechnicianPage,
  },
  {
    path: "/technicians/technician_id",
    name: "Technian",
    component: SingleTechnician,
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
