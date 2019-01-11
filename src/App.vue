<template>
  <div id="app">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_1006579_vk9xxlo057.css"/>
    <el-container>
      <el-header>
        <div class="Mytop">
          <div style="color: #ACDA08">Kaiser's Blog</div>
          <div class="BlogSearchCss">
            <el-button type="primary" @click.left="SearchShow=!SearchShow" icon="el-icon-search" round style="height: 95%"></el-button>
            <div>
              <transition name="el-zoom-in-center">
                <div v-show="SearchShow" class="transition-box">
                  <el-input v-model="input" clearable placeholder="搜索内容"></el-input>
                  <el-button size="mini" round type="primary" style="color: #FFFF32" @click="BlogSearch">搜索</el-button>
                </div>
              </transition>
            </div>
          </div>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                   router background-color="#409EFF" text-color="#ACDA08" active-text-color="#FFFF32">
            <el-menu-item index="/Home">首页</el-menu-item>
            <el-menu-item index="/Test">去哪儿</el-menu-item>
            <el-menu-item index="/test3">管理</el-menu-item>
            <el-button type="primary" @click="dialogFormVisible = true"><i class="iconfont icon-shezhi" style="color: #ACDA08"></i></el-button>
            <el-dialog title="登陆" :visible.sync="dialogFormVisible" center  :before-close="BlogLoginClose"
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
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input:null,
        SearchShow:false,
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
      //搜索事件
      BlogSearch(){
        this.SearchShow = false
        alert(this.input)
      },
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

<style>
  .BlogSearchCss{
    display: flex;
    flex-direction: row;
    width: 30%
  }
  .Mytop{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .el-container{
    display: flex;
    flex-flow: column;
    min-height: 100vh;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    flex: 1;
  }
  .el-header, .el-footer {
    background-color: #409EFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-header{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
  }
  .el-form-item{
    text-align: center;
  }
  .transition-box {
    display: flex;
    flex-direction: row;
  }
</style>
