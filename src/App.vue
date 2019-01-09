<template>
  <div id="app">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_1006579_vk9xxlo057.css"/>
    <el-container>
      <el-header>
        <div class="Mytop">
          <div style="color: #ACDA08">Kaiser's Blog</div>
          <div>
            <el-popover placement="right-end" title="标题" width="200" trigger="hover"
                        content="<span><input /></span>">
              <el-button type="primary" icon="el-icon-search" slot="reference" round circle></el-button>
            </el-popover>
          </div>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                   router background-color="#409EFF" text-color="#ACDA08" active-text-color="#FFFF32">
            <el-menu-item index="/test1">首页</el-menu-item>
            <el-menu-item index="/Test">去哪儿</el-menu-item>
            <el-menu-item index="/test3">管理</el-menu-item>
            <el-menu-item index="/test4"><i class="iconfont icon-shezhi" style="color: #ACDA08"></i></el-menu-item>
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
        activeIndex: '/test1',
      };
    },
    // methods: {
    //   handleSelect(key, keyPath) {
    //     console.log(key, keyPath);
    //   },
    // },
  }
</script>

<style>
  .Mytop{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-header, .el-footer {
    background-color: #409EFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
