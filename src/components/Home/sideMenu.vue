<script setup lang="ts">
import { getCategory } from '@/apis/category';
import router from '@/router';

let isScreen = ref(true);
const changeScreen = () => {
    isScreen.value = !isScreen.value;
}

const res = await getCategory()
const categories = res.data   //// 这里是用于获取菜单内容
categories.forEach(item => {
    console.log(item)
    router.addRoute({
        name: item.title,
        path: `/${item.path}`,
        component: () => import('@/views/error/404.vue'),
    })
})
</script>


<template>
    <div :class="isScreen ? 'sideMenu' : 'hideSideMenu'" class="h-screen bg-white flex flex-col items-center rounded-xl"
        @click="changeScreen">
        <div class="h-[4rem] flex items-center">
            <i class="fab fa-accusoft mr-2 text-xl"></i>
            <span :class="isScreen ? '' : 'hidden'" class="mr-2">jizhu后台管理</span>
        </div>
        <div class="menu w-full mt-3">
            <div class="w-full flex justify-center items-center h-12">DashBoard</div>
            <ul class="w-full">
                <li class="w-full flex justify-center items-center h-12 hover:bg-cyan-100 cursor-pointer" @click.stop=""
                    v-for="item in categories" :key="item.id">
                    <i class="fab fa-angular text-xl mr-1"></i>
                    <span>{{ item.title }}</span>
                </li>
            </ul>
        </div>

    </div>
</template>


<style lang="scss" scoped>
.sideMenu {
    @apply w-[230px];
}

.hideSideMenu {
    div {
        ul {
            li {
                span {
                    @apply hidden;
                }

                i {
                    @apply m-6;
                }
            }
        }
    }
}
</style>