<script setup lang="ts">
let isScreen = ref(true);
const changeScreen = () => {
    isScreen.value = !isScreen.value;
}
</script>


<template>
    <div :class="isScreen ? 'sideMenu' : 'hideSideMenu'" class="h-screen bg-white flex flex-col items-center rounded-xl"
        @click="changeScreen">
        <div class="h-[4rem] flex items-center">
            <i class="fab fa-accusoft mr-2 text-xl"></i>
            <span :class="isScreen ? '' : 'hidden'" class="mr-2">jizhu后台管理</span>
        </div>
        <div class="menu w-full mt-3">
            <ul class="w-full">
                <li class="w-full flex justify-center items-center h-12 hover:bg-cyan-100 cursor-pointer" @click.stop="">dashboard</li>
                <li class="w-full flex justify-center items-center h-12 hover:bg-cyan-100 cursor-pointer" @click.stop="">用户管理</li>
                <li class="w-full flex justify-center items-center h-12 hover:bg-cyan-100 cursor-pointer" @click.stop="">商品管理</li>
                <li class="w-full flex justify-center items-center h-12 hover:bg-cyan-100 cursor-pointer" @click.stop="">订单管理</li>
                <li class="w-full flex justify-center items-center h-12 hover:bg-cyan-100 cursor-pointer" @click.stop="">类别管理</li>
            </ul>
        </div>

    </div>
</template>


<style lang="scss" scoped>
.sideMenu {
    @apply w-[230px];
}
</style>