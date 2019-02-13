<template>
    <div class="BlogHeader">
        <div style="color: #FFB5A1">Kaiser's Blog</div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                 router background-color="#B8F4FF" text-color="#FFB5A1" active-text-color="#FFFF32">
            <el-menu-item index="/">主页</el-menu-item>
            <el-menu-item v-if="userController" index="/photo">照片墙</el-menu-item>
            <el-menu-item v-if="userController" index="/write">写文章</el-menu-item>
            <el-menu-item index="/fusion">时光轴</el-menu-item>
            <!--<el-menu-item index="/404">404</el-menu-item>-->
            <el-button v-if="!userController" @click="dialogFormVisible = true"  class="log"><i class="el-icon-setting" style="color: #FFB5A1"></i></el-button>
            <el-submenu v-if="userController">
                <template slot="title"><i class=" el-icon-more"></i></template>
                <el-menu-item index="/write">写文章</el-menu-item>
                <el-menu-item @click="Logout" index="">退出</el-menu-item>
            </el-submenu>
        </el-menu>
        <el-dialog title="登陆" :visible.sync="dialogFormVisible"  center  :before-close="BlogLoginClose"
                   width="30%">
            <el-form :model="form">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input v-model="form.password" type="password" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="BlogRegister">注 册</el-button>
                <el-button type="primary" @click="BlogLogin">登 录</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import blogApi from '../../api/blogapi';
    export default {
        data() {
            return {
                userController: false,
                activeIndex: '/',
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
                this.dialogFormVisible = false;
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
                this.dialogFormVisible = false;
                blogApi.userLogin(this.form).then(res=>{
                    if (res.data.succ){
                        this.$message({message: "登陆成功", type: "success"});
                        this.userController = true
                    } else {
                        this.$message({message:"登陆失败",type:"warning"})
                    }
                })
            },
            //登出
            Logout(){
                this.userController = false
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
    el-input{
        text-align: center;
    }
    .log{
        background-color: #B8F4FF;
        border: none;
    }
</style>