<template>
    <div id="photoWall">
        <div class="demo-wrap">
            <div class="photos" id="photos">
                <div class="photo" v-for="img of imgArr">
                    <img :src="img" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import PictrueUpload from "./homepage/PictrueUpload.vue";

    export default {
        // components: {PictrueUpload},
        data() {
            return {
                imgArr:[
                    "./img/gakki1.jpg",
                    "./img/gakki2.jpg",
                    "./img/gakki3.jpg",
                    "./img/gakki4.jpg",
                    "./img/gakki5.jpg",
                    "./img/gakki6.jpg",
                    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3862033271,2117628195&fm=26&gp=0.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548067143869&di=90b3d716d0889da763c7cb8c8ad973f4&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171019%2Fe22353a94b1745bf926cb90048268efa.jpeg",
                ]
            };
        },
        methods: {

        },
        beforeDestroy() {
            setInterval(function () {
                var photoWrap = document.getElementById("photos");
                var photo = document.getElementsByClassName("photo");
                var deg = 0;
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