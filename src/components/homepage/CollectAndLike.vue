<template>
    <div>
        <el-button @click="blogLike" :style="[isLike?blogHandleClick:'']"><i class="iconfont icon-dianzan" ></i></el-button>
        <el-button @click="blogCollect" :style="[isCollect?blogHandleClick:'']"><i class="iconfont icon-xin"></i></el-button>
    </div>
</template>

<script>
    export default {
        name: "CollectAndLike",
        data(){
            return {

                isLike:false,
                isCollect:false,
                blogHandleClick:{
                    color:'red'
                }
            }
        },
        computed:{

        },
        methods:{
            blogLike:function () {
                this.isLike = !this.isLike
            },
            blogCollect:function () {
                this.isCollect = !this.isCollect
            }
        }
    }
</script>

<style scoped>
    .el-button{
      border: none;
    }
</style>