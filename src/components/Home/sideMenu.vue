<script setup lang="ts">
let isScreen = ref(true);
const changeScreen = () => {
    isScreen.value = !isScreen.value;
}
</script>


<template>
    <div  :class="isScreen ? 'sideMenu' : 'hideSideMenu'" class="h-screen bg-cyan-200 flex justify-center" @click="changeScreen">
        <i class="fab fa-accusoft p-4 text-3xl"></i>
    </div>
</template>


<style lang="scss" scoped>
.sideMenu {
    @apply w-[230px];
}
</style>