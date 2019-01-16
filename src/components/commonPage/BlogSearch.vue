<template>
    <div class="BlogSearchCss">
        <el-button type="primary" @click.left="SearchShow=!SearchShow" icon="el-icon-search" round style="height: 95%"></el-button>
        <div>
            <transition name="el-zoom-in-center">
                <div v-show="SearchShow" class="transition-box">
                    <el-input v-model="input" clearable placeholder="搜索内容"></el-input>
                    <el-button size="mini" round type="primary" style="color: #FFFF32" @click="BlogSearch">搜索</el-button>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                SearchShow:false,
                input:null,
            }
        },
        methods:{
            //搜索事件
            BlogSearch(){
                this.SearchShow = false
                alert(this.input)
            },
        }
    }
</script>

<style scoped>
    .BlogSearchCss{
        display: flex;
        flex-direction: row;
        width: 30%
    }
    .transition-box {
        display: flex;
        flex-direction: row;
    }
</style>