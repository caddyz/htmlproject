<template>
    <div class="BlogHeader">
        <div style="color: #ACDA08">Kaiser's Blog</div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                 router background-color="#409EFF" text-color="#ACDA08" active-text-color="#FFFF32">
            <el-menu-item index="/Home">主页</el-menu-item>
            <el-menu-item index="/Test">照片墙</el-menu-item>
            <el-menu-item index="/test3">言语</el-menu-item>
            <el-button type="primary" @click="dialogFormVisible = true"><i class="el-icon-setting" style="color: #ACDA08"></i></el-button>
            <el-dialog title="登陆" :visible.sync="dialogFormVisible"  center  :before-close="BlogLoginClose"
                       width="30%">
                <el-form :model="form">
                    <el-form-item>
                        <el-input v-model="form.name" placeholder="用户名" style="width: 80%"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.password" type="password" placeholder="密码" style="width: 80%"></el-input>
                    </el-form-item>
                    <div style="text-align: center"></div>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="BlogRegister">注 册</el-button>
                    <el-button type="primary" @click="BlogLogin">登 录</el-button>
                </div>
            </el-dialog>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: this.$router.path,
                dialogFormVisible: false,
                form: {
                    name: '',
                    password: '',
                },
                formLabelWidth: '80px'
            };
        },
        methods:{
            //注册路由
            BlogRegister(){
                this.dialogFormVisible = false
                this.$router.push({path:"register"})
            },
            //登录关闭
            BlogLoginClose(done){
                this.$confirm("确认关闭！")
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            //登录
            BlogLogin(){
                this.dialogFormVisible = false
                console.log("名字："+this.form.name+" ； "+"密码："+this.form.password)
            }
        }
    }
</script>

<style scoped>
    .BlogHeader{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    el-form-item{
        text-align: center;
    }
</style>