import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import OrderList from "../views/OrderList.vue";
import User from "../views/User.vue";
import PickOffice from "../views/PickOffice.vue";
import ShowQR from "../views/ShowQR.vue";
import ShowMessage from "../views/ShowMessage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/order",
    name: "Order",
    component: OrderList,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/PickOffice",
    name: "PickOffice",
    component: PickOffice,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
