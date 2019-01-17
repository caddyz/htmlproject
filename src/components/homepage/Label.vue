<template>
    <div>
        <span style="color: #82A6F5">分类：</span>
        <el-tag v-for="tag in tags" :key="tag.name" :type="tag.type">
            {{tag.name}}
        </el-tag>
    </div>
</template>

<script>
    export default {
        name: "Label",
        data() {
            return {
                tags: [
                    { name: '技术', type: '' },
                    { name: '旅行', type: 'success' },
                    { name: '随想', type: 'info' },
                    { name: '感悟', type: 'warning' },
                    { name: '大杂烩', type: 'danger' }
                ]
            };
        }
    }
</script>

<style scoped>

</style>