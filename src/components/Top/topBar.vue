<script setup lang="ts">
import user from '@/store/userStore';

const userStore = user()
await userStore.getUserInfo()
let userInfo = userStore.userInfo
</script>


<template>
    <!-- width 63% -->
    <div class="rounded-xl h-[4rem] px-3 bg-white flex items-center justify-between">
        <div>icon</div>
        <UserWrapper :userInfo="userInfo"></UserWrapper>
</div>
</template>


<style lang="scss" scoped></style>