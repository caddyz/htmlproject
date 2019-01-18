<template>
    <div>
        <el-input v-model="title" placeholder="文章标题"></el-input>
        <div style="height: 10px"></div>
        <mavon-editor v-model="artContent"/>
        <div style="height: 10px"></div>
        <div>分类选择：</div>
        <el-checkbox-group v-model="artLab" :min="1" :max="4">
            <el-checkbox-button v-for="lab in artLabs" :label="lab" :key="lab">{{lab}}</el-checkbox-button>
        </el-checkbox-group>
        <div style="height: 10px"></div>
        <el-button type="primary" @click="artSubmint">发布</el-button>
    </div>
</template>

<script>
    const lableName = ["技术","旅行","观书有悟","随笔","大杂烩"]
    export default {
        name: "WriteArticle",
        data(){
            return {
                artLab:["技术"],
                artLabs:lableName,
                artContent:"",
                title:"",
            }
        },
        methods:{
            artSubmint:function () {
                console.log(this.artContent);
                console.log("获取的点击"+this.artLab)
            },
        }
    }
</script>

<style scoped>

</style>