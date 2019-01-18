<template>
    <div>
        <div v-for="msg of msgs">
            <div class="msgtop">
                <div>{{msg.name}}<span>于</span>{{msg.time}}<span>评论</span></div>
                <el-button type="text" style="border: none" @click="reply(msg)">回复</el-button>
            </div>
            <div style="height: 10px"></div>
            <div style="height: 6em">{{msg.content}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuestBookPage",
        data(){
            return {
                msgs:[
                    {id:"1",name:"sda",time:"6666",content:"asasfasf"},
                    {id:"2",name:"ssds",time:"6666",content:"asasfasf"},
                    {id:"3",name:"sdvxaa",time:"6666",content:"asasfasf"},
                    {id:"4",name:"sdasdaa",time:"6666",content:"asasfasf"},
                    ]
            }
        },
        methods:{
            reply:function (msg) {
                this.$prompt("回复内容","对"+msg.name+"回复到",{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /\S/,
                    inputErrorMessage: '你什么都没输入！'
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: '输入的内容: ' + value
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                })
            }
        }
    }
</script>

<style scoped>
    .msgtop{
        display: flex;
        justify-content: space-around;
    }
    span{
        color: #4cb4e7;
    }
</style>