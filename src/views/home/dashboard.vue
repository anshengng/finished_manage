<script setup lang="ts">
const cardList = [
    { title: 'car1', content: 'content1' },
    { title: 'car2', content: 'content2' },
    { title: 'car3', content: 'content3' },
    { title: 'car4', content: 'content4' }
] 
</script>


<template>
    <div class="bg-white p-1 rounded-xl overflow-y-auto grid grid-cols-4 gap-2 py-1 pr-2 flex-1">
        <el-card shadow="hover" v-for="(card, index) in cardList" :key="index" :body-style="{ padding: '20px' }" class="cursor-pointer max-h-[250px]">
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
        <div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
</style>