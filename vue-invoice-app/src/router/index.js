import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import invoiceDetail  from "../views/InvoiceDetail.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/invoice/:invoiceId",
    name: "invoice",
    component: invoiceDetail,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
