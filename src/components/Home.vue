<template>
    <div id="home">
        <blog-notice></blog-notice>
        <div style="height: 1em"></div>
        <article-info></article-info>
    </div>
</template>

<script>
    import BlogNotice from "./homepage/BlogNotice";
    import ArticleInfo from "./homepage/ArticleInfo";

    export default {
        components:{
            ArticleInfo,
            BlogNotice
        }
    }
</script>

<style scoped>
   @import "./css/main.css";
</style>