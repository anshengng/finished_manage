import { RouteRecordRaw } from 'vue-router';

export default {
    name: 'home',
    path: '/',
    component: () => import('@/layouts/home/home.vue'),
    meta: { menu: { title: '404页面', icon: 'fab fa-audible' } },
    children: [
        {
            name: 'home_dashboard',
            path: '',
            component: () => import('@/views/home/dashboard.vue'),
        }
    ]
} as RouteRecordRaw 