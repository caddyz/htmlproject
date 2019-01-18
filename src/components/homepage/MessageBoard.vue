<template>
    <div>
        <div class="msgTitle">给TA留言</div>
        <div style="height: 12px"></div>
        <div class="msgBoardInput">
            <el-input type="textarea" :row="6" placeholder="留言内容" v-model="leavemessage"></el-input>
        </div>
        <div style="height: 12px"></div>
        <el-button type="primary" @click="msgsubmit">提交</el-button>
    </div>
</template>

<script>
    export default {
        name: "MessageBoard",
        data(){
            return {
                leavemessage:""
            }
        },
        methods:{
            msgsubmit:function () {
                if(this.leavemessage === ""){
                    this.$notify({
                        message:"留言内容为空！",
                        duration:2000,
                        type: 'warning'
                    })
                }else {
                    alert(this.leavemessage)
                }
            }
        }
    }
</script>

<style scoped>

</style>