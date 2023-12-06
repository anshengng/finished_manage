<script setup lang="ts">

</script>


<template>
    <div class="w-screen flex gap-2">
        <SideMenu></SideMenu>
        <div class="w-full flex flex-col gap-2">
            <TopBar></TopBar>
            <router-view></router-view>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>