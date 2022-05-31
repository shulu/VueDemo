import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import OrderList from "../views/OrderList.vue";
import User from "../views/User.vue";
import PickOffice from "../views/PickOffice.vue";
import ShowQR from "../views/ShowQR.vue";
import ShowMessage from "../views/ShowMessage.vue";
import UserInfo from "../views/UserInfo.vue";
import Wallet from "../views/Wallet.vue";

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
    path: "/userinfo",
    name: "UserInfo",
    component: UserInfo,
  },
  {
    path: "/PickOffice",
    name: "PickOffice",
    component: PickOffice,
  },
  {
    path: "/showqr",
    name: "ShowQR",
    component: ShowQR,
  },
  {
    path: "/showmessage",
    name: "ShowMessage",
    component: ShowMessage,
  },
  {
    path: "/wallet",
    name: "Wallet",
    component: Wallet,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
