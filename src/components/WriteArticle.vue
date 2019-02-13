<template>
    <div>
        <el-input v-model="browserArticle.title" placeholder="文章标题"></el-input>
        <div style="height: 10px"></div>
        <div>
            <mavon-editor v-model="browserArticle.artContent"/>
        </div>
        <div style="height: 10px"></div>
        <div>分类选择(最多4个)：</div>
        <el-checkbox-group v-model="browserArticle.artLab" :min="1" :max="4">
            <el-checkbox-button v-for="lab in artLabs" :label="lab" :key="lab">{{lab}}</el-checkbox-button>
        </el-checkbox-group>
        <div style="height: 10px"></div>
        <el-button type="primary" @click="artSubmit">发布</el-button>
    </div>
</template>

<script>
    import blogApi from '../api/blogapi';
    const labelName = ["技术","旅行","观书有悟","随笔","大杂烩"];
    export default {
        name: "WriteArticle",
        data(){
            return {
                artLabs:labelName,
                browserArticle:{
                    artLab:["技术"],
                    artContent:"",
                    artTitle:"",
                    artAuthor:"Kaiser"
                },
            }
        },
        methods:{
            artSubmit:function () {
                if(this.browserArticle.artContent.length > 200){
                    blogApi.writeArticle(this.browserArticle).then(res => {
                        if(res.data.succ){
                            this.$message({message: "发表成功", type: "success"})
                        }else {
                            this.$message({message:"发表失败",type:"warning"})
                        }
                    });
                }else {
                    this.$message({message:"您的文章未达到最低字数要求（201字）",type:"error"})
                }
            },
        }
    }
</script>

<style scoped>

</style>