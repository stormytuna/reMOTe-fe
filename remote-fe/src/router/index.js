import TechnicianPage from "@/components/TechnicianPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import SingleTechnician from "@/components/SingleTechnician.vue";
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
