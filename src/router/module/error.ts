import { RouteRecordRaw } from 'vue-router';

export default {
    name: 'error',
    path: '/error/404',
    component: () => import('@/views/error/404.vue'),
    meta: { menu: { title: '404页面', icon: 'fab fa-audible' } },
} as RouteRecordRaw 