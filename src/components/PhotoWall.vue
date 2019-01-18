<template>
    <div id="test1">
        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        <br/>
        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        <PictrueUpload> </PictrueUpload>
        <div class="test">
            hello
        </div>
    </div>
</template>

<script>
    import PictrueUpload from "./homepage/PictrueUpload.vue";
    export default {
        components: {PictrueUpload},
        data() {
            return {
                num1: 1
            };
        },
        methods: {
            handleChange(value) {
                console.log(value);
            }
        },
    };
</script>

<style scoped>
@import "./css/main.css";
</style>