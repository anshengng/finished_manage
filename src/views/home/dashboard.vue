<script setup lang="ts">
const cardList = [
    { title: 'car1', content: 'content1' },
    { title: 'car2', content: 'content2' },
    { title: 'car3', content: 'content3' },
    { title: 'car4', content: 'content4' }
] 
</script>


<template>
    <div class="bg-white rounded-xl overflow-y-auto grid grid-cols-4 gap-2 py-1 pr-2">
        <el-card shadow="hover" v-for="(card, index) in cardList" :key="index" :body-style="{ padding: '20px' }" class="cursor-pointer">
            <template #header>
                <div>
                    <span>{{ card.title }}</span>
                </div>
            </template>
            <!-- card body -->
            <div class="min-h-[150px]">
                {{ card.content }}
            </div>
        </el-card>
    </div>
</template>


<style lang="scss" scoped>
</style>