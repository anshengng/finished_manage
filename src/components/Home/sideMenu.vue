<script setup lang="ts">
let isScreen = ref(true);
const changeScreen = () => {
    isScreen.value = !isScreen.value;
}
</script>


<template>
    <div  :class="isScreen ? 'sideMenu' : 'hideSideMenu'" @click="changeScreen">

    </div>
</template>


<style lang="scss" scoped>
.sideMenu {
    @apply w-[230px] h-screen bg-cyan-200;
}
.hideSideMenu {
    @apply w-[100px] h-screen bg-cyan-200;
}
</style>