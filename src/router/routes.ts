import { RouteRecordRaw } from "vue-router";

export const routes = [
    {
        path: "/login",
        name: 'login',
        component: () => import("@/views/auth/login.vue"),
    },
    {
        path: "/register",
        name: 'register',
        component: () => import("@/views/auth/register.vue"),
    },
    //404页面 输入无效路由时
    {
        path: "/:any(.*)",
        name: 'NotFound',
        component: () => import("@/views/error/404.vue"),
    }
] as RouteRecordRaw[]