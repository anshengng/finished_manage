<script setup lang="ts">

const props = defineProps<{ userinfo: any }>()

</script>


<template>
    <div>{{ props.userinfo.username }}</div>
</template>


<style lang="scss" scoped></style>