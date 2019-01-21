<template>
    <div id="photoWall">
        <div class="demo-wrap">
            <div class="photos" id="photos">
                <div class="photo" v-for="img of imgArr">
                    <img :src="img" />
                </div>
            <!--　　<div class="photo"><img src="./img/gakki1.jpg"/></div>-->
            <!--　　<div class="photo"><img src="./img/gakki2.jpg"/></div>-->
            <!--　　<div class="photo"><img src="./img/gakki3.jpg"/></div>-->
            <!--　　<div class="photo"><img src="./img/gakki4.jpg"/></div>-->
            <!--　　<div class="photo"><img src="./img/gakki5.jpg"/></div>-->
            <!--　　<div class="photo"><img src="./img/gakki6.jpg"/></div>-->
            <!--　　<div class="photo"><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3862033271,2117628195&fm=26&gp=0.jpg"/></div>-->
            <!--　　<div class="photo"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548067143869&di=90b3d716d0889da763c7cb8c8ad973f4&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171019%2Fe22353a94b1745bf926cb90048268efa.jpeg"/></div>-->

            </div>
        </div>
    </div>
</template>

<script>
    // import PictrueUpload from "./homepage/PictrueUpload.vue";
    var photoWrap = document.getElementById("photos");
    var photo = document.getElementsByClassName("photo");
    var deg = 0;
    export default {
        // components: {PictrueUpload},
        data() {
            return {
                imgArr:[
                    "http://127.0.0.1:8010/assets/e189bc7754542fab5a01a75cae9fa4d1.jpg",
                    "http://127.0.0.1:8010/assets/9d12e1534ba2d2e029bdaddafaabe211.jpg",
                    "http://127.0.0.1:8010/assets/52d728589daac88de6e8245e95d557d7.jpg",
                    "http://127.0.0.1:8010/assets/a9ea9c7884d260672bcc0f673d45f2f6.jpg",
                    "http://127.0.0.1:8010/assets/b157d14f964206ee1fb277ec081e50b3.jpg",
                    "http://127.0.0.1:8010/assets/306463618bee9ad29e5f3d87a82d9a06.jpg",
                    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3862033271,2117628195&fm=26&gp=0.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548067143869&di=90b3d716d0889da763c7cb8c8ad973f4&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171019%2Fe22353a94b1745bf926cb90048268efa.jpeg",
                ]
            };
        },
        methods: {

        },
        beforeDestroy() {
            setInterval(function () {
                var deg2 = 360 / photo.length;
                deg += deg2;
                photoWrap.style.webkitTransform = "rotateY(" + deg + "deg)";
            },2000)
        }
    };
</script>

<style scoped>
    @import "./css/main.css";
    @import "./css/photoWall.css";
</style>