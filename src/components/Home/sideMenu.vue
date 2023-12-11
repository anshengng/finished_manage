<script setup lang="ts">
let isScreen = ref(true);
const changeScreen = () => {
    isScreen.value = !isScreen.value;
}
</script>


<template>
    <div :class="isScreen ? 'sideMenu' : 'hideSideMenu'" class="h-screen bg-white flex justify-center rounded-xl"
        @click="changeScreen">
        <div class="h-[4rem] flex items-center">
            <i class="fab fa-accusoft p-4 text-3xl"></i>
            <span :class="isScreen ? '' : 'hidden'" class="mr-2">jizhu后台管理</span>
        </div>
        <div class="menu "></div>

    </div>
</template>


<style lang="scss" scoped>
.sideMenu {
    @apply w-[230px];
}
</style>