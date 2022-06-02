import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import OrderList from "../views/OrderList.vue";
import User from "../views/User.vue";
import PickOffice from "../views/PickOffice.vue";
import ShowQR from "../views/ShowQR.vue";
import ShowMessage from "../views/ShowMessage.vue";
import UserInfo from "../views/UserInfo.vue";
import Wallet from "../views/Wallet.vue";
import MealHistory from "../views/MealHistory.vue";
import Coupon from "../views/Coupon.vue";
import Tastes from "../views/Tastes.vue";
import OrderManual from "../views/OrderManual.vue";

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
  {
    path: "/mealHistory",
    name: "MealHistory",
    component: MealHistory,
  },
  {
    path: "/coupon",
    name: "Coupon",
    component: Coupon,
  },
  {
    path: "/tastes",
    name: "Tastes",
    component: Tastes,
  },
  {
    path: "/ordermanual",
    name: "OrderManual",
    component: OrderManual,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
