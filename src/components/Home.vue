<template>
    <div id="home">
        <blog-rank title="最热"></blog-rank>
        <blog-notice></blog-notice>
        <div style="height: 1em"></div>
        <article-info></article-info>
    </div>
</template>

<script>
    import BlogNotice from "./homepage/BlogNotice";
    import ArticleInfo from "./homepage/ArticleInfo";
    import BlogRank from "./homepage/BlogRank";

    export default {
        components:{
            ArticleInfo,
            BlogNotice,
            BlogRank
        }
    }
</script>

<style scoped>
   @import "./css/main.css";
</style>