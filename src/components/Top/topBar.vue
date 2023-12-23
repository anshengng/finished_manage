<script setup lang="ts">
import user from '@/store/userStore';

const userStore = user()
userStore.getUserInfo()
const userInfo = userStore.userInfo
</script>


<template>
    <!-- width 63% -->
   <div class="rounded-xl h-[4rem] px-3 bg-white flex items-center">
        <div>icon</div>
        {{ userInfo.username }}
    </div>
</template>


<style lang="scss" scoped></style>