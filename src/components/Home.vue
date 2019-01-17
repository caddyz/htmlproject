<template>
    <div id="home">
        <div class="rightDiv">
            <blog-search></blog-search>
            <div style="height: 3em"></div>
            <blog-rank title="热门文章"></blog-rank>
            <div style="height: 5em"></div>
            <blog-rank title="最新文章"></blog-rank>
        </div>
        <div class="leftDiv">
            <blog-notice></blog-notice>
            <div style="height: 1em"></div>
            <article-info></article-info>
        </div>
    </div>
</template>

<script>
    import BlogNotice from "./homepage/BlogNotice";
    import ArticleInfo from "./homepage/ArticleInfo";
    import BlogRank from "./homepage/BlogRank";
    import BlogSearch from "./commonPage/BlogSearch";

    export default {
        components:{
            ArticleInfo,
            BlogNotice,
            BlogRank,
            BlogSearch
        }
    }
</script>

<style scoped>
   @import "./css/main.css";
</style>