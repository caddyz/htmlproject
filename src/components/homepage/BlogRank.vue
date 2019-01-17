<template>
    <el-table :data="rankData" stripe style="width: 100%">
        <el-table-column prop="artTitle" :label="title" align="center"></el-table-column>
        <el-table-column>
            <template slot-scope="scope">
                <el-button @click="check(scope.row)" type="text" size="small">
                    查看
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "BlogRank",
        props:['title'],
        data(){
            return {
                rankData:[
                    {artId:"1",artTitle:"啥技术的1"},
                    {artId:"2",artTitle:"啥技术的2"},
                    {artId:"3",artTitle:"啥技术的3"},
                    {artId:"4",artTitle:"啥技术的4"},
                    {artId:"5",artTitle:"啥技术的5"},
                    {artId:"6",artTitle:"啥技术的6"},
                ]
            }
        },
        methods:{
            check:function (row) {
                alert(row.artId)
            }
        }
    }
</script>

<style scoped>

</style>