<script setup lang="ts">
import { Suspense } from 'vue';

// import userinfo from '@/apis/user'

// const response  = await userinfo()
// console.log(response);
</script>

<template>
  <!-- 添加灰背景 -->
  <div class="w-screen h-screen bg-slate-100 overflow-x-hidden"> 
    <!-- 等待加载完成在渲染 -->
    <Suspense>
      <router-view></router-view>
    </Suspense>
  </div>
</template>

<style scoped></style>
