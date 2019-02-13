<template>
    <div id="photoWall">
        <div class="photoTop">
            <div class="demo-wrap" >
                <div class="photos" id="photos" ref="photos">
                    <div class="photo" ref="photo" v-for="img of imgArr" @click="pthtoClick(img)">
                        <img :src="img" />
                    </div>
                </div>
            </div>
            <div class="imgUpload" style="width: 20%">
                <PictrueUpload></PictrueUpload>
                <div style="height: 12px"></div>
                <div style="color: #4cb4e7">图片上传</div>
            </div>
        </div>
        <div class="photoDemo">
            <div class="photo-box">
                <div style="width: 20%;height: 220px" v-for="i of 17" >
                        <div class="img1" :style="{height:((Math.floor(Math.random()*6)+5)*10)+'%',width:(((Math.floor(Math.random()*6)+4)*10)+5)+'%'}">
                            <img :src="img1" />
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PictrueUpload from "./homepage/PictrueUpload.vue";
    export default {
        components: {PictrueUpload},
        data() {
            return {
                img1:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3862033271,2117628195&fm=26&gp=0.jpg',
                imgArr:[
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548240740513&di=e860dedf877b493dd58d1da720e24c38&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201403%2F23%2F20140323001233_X3TTc.thumb.700_0.jpeg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548240784712&di=8e9db5d63d410b8a121b6e849cf24c60&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F18%2F20160418160150_UTyPB.jpeg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548240808283&di=5639e6520f260ea9910f0b3e26914abd&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F78a81aa55d2dbd9b18c59823a6241faae880a54b.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548240843270&di=1d3702848cc9820d7a2cded7d5a6de69&imgtype=0&src=http%3A%2F%2Fimage001.szbaidi.com%2F20180803%2F988f2d528dc401d338360c6a2605a4e5.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548240870733&di=3ebbdb7430c36653470e80f7c840bae2&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F91743078jw1exflih6uh7j20qo0f0n5e.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548240898993&di=d734cfc196ac01ae144ff0090daf1057&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F89%2Fw415h474%2F20181218%2FXR7E-hqhtqsq1887590.jpg",
                    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3862033271,2117628195&fm=26&gp=0.jpg",
                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548067143869&di=90b3d716d0889da763c7cb8c8ad973f4&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171019%2Fe22353a94b1745bf926cb90048268efa.jpeg",
                ]
            };
        },
        mounted(){
            this.init();
        },
        methods: {
            init(){
                let deg = 0;
                setInterval(()=>{
                    let deg2 = 360 / this.$refs.photo.length;
                    deg += deg2;
                    this.$refs.photos.style.webkitTransform = "rotateY(" + deg + "deg)";
                },2000)
            },
            pthtoClick(img){

            },
        },

    };
</script>

<style scoped>
    @import "./css/main.css";
    @import "./css/photoWall.css";
    .imgUpload,.photoTop{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .imgUpload{
        flex-direction: column;
    }
    .photo-box{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .img1{
        border: 6px solid white ;
    }
    .img1 > img{
        height: 100%;
        width: 100%;
    }
</style>