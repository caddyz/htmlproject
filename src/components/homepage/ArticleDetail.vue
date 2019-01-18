<template>
    <div>
        <div style="height: 2em;"></div>
        <div id="artDetail">
            <div class="artDetailTitle">{{title}}</div>
            <div style="height: 12px"></div>
            <div class="artDetailAuthor">{{author}}</div>
            <div style="height: 8px"></div>
            <div class="artDetailTime">{{time}}</div>
            <div style="height: 12px"></div>
            <div class="artDetailContent">{{content}}</div>
            <div style="height: 18px"></div>
            <div class="artDetailInfo">
                <Label></Label>
                <collect-and-like></collect-and-like>
            </div>
            <div style="height: 48px"></div>
        </div>
        <div class="mesg">
            <message-board></message-board>
            <div style="height: 1em"></div>
            <guest-book-page></guest-book-page>
        </div>
    </div>
</template>

<script>
    import Label from "./Label";
    import CollectAndLike from "./CollectAndLike";
    import MessageBoard from "~/components/homepage/MessageBoard";
    import GuestBookPage from "~/components/homepage/GuestBookPage";

    export default {
        name: "ArticleDetail",
        components:{
            Label,
            CollectAndLike,
            MessageBoard,
            GuestBookPage
        },
        data(){
            return {
                    articleId:"1",
                    title:"这是一个简单的测试",
                    author:"傲娇受国际控股和",
                    time:"2018.02.45 15：65：98",
                    content:"踩在软绵绵的雪上，咯吱咯吱响。我伸出双手，接住几片洁白的雪花，如珍宝似的欣赏它们。多么可爱的雪花啊!比点点晨露都要晶莹，比丝丝秋雨还要密，简直如玉般无暇，让人爱不释手。这世间哪有一种花像雪花如此美呢?又有哪一种花像雪花那么洁呢?“忽如一夜春风来，千树万树梨花开”这是雪的灿烂;“北国风光，千里冰封，万里雪飘，望长城内外，惟余莽莽，大河上下顿失滔滔”这是雪的壮观;“窗含西岭千秋雪，门泊东吴万里船”这是雪的绮丽;“风雨送春归，飞雪迎春到，已是悬崖百丈冰，犹有花枝俏。”这是雪的温柔。“千山鸟飞绝，万径人踪灭”。这是雪的孤寂。",
            }
        },
    }
</script>

<style scoped>
    @import "../css/main.css";
</style>