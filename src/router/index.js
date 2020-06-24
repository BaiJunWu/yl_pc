import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Index,
    children: [
      {
        path: "/",
        redirerct: "/recProject"
      },
      {
        path: "/recProject",
        component: () => import("../components/recProjectList.vue")
      },
      {
        path: "/chkProject",
        component: () => import("../components/chkProjectList.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
