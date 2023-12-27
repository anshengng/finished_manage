<script setup lang="ts">

const props = defineProps<{ userinfo: any }>()

</script>


<template>
    <div v-if="props.userinfo?.username">{{ props.userinfo.username }}</div>
    <div v-else class="">
        <button class="p-2 border-[1px] border-slate-400 rounded-lg mr-2 h-8 leading-3 cursor-pointer hover:bg-slate-600 hover:text-white">登陆</button>
        <button class="p-2 border-[1px] border-slate-400 rounded-lg h-8 leading-3 cursor-pointer hover:bg-slate-600 hover:text-white">注册</button>
    </div>
</template>


<style lang="scss" scoped></style>