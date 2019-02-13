<template>
    <el-container>
      <el-header>
        <blog-header></blog-header>
      </el-header>
      <el-main >
        <div style="height: 3em"></div>
        <transition name="fade" mode="out-in" appear>
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </el-main>
      <el-footer>
        <blog-footer></blog-footer>
      </el-footer>
    </el-container>
</template>

<script>
  import BlogHeader from './components/commonPage/BlogHeader'
  import BlogFooter from './components/commonPage/BlogFooter'
  export default {
      components:{
        BlogHeader,
        BlogFooter
      }
  }
</script>

<style>
  @import "./assets/page.css";
</style>
