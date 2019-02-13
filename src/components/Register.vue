<template>
    <div id="RegisterCss">
        <div style="height: 5rem"></div>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name" >
                <el-input v-model="ruleForm2.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass" required>
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass" required>
                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机" prop="phone" required>
                <el-input v-model.number="ruleForm2.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm2.email"></el-input>
            </el-form-item>
            <el-form-item label="地址" prop="address" required>
                <el-cascader v-model="ruleForm2.address"
                        placeholder="可搜索地址"
                        :options="options"
                        filterable
                ></el-cascader>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import options from '../js/country-data.js'
    import blogApi from '../api/blogapi';
    export default {
        data() {
            var checkUserName = (rule,value,callback) =>{
                blogApi.checkUserName(value).then(response => {
                    if(response.data.succ === true){
                        console.log(response.data);
                        callback(new Error("用户名已存在"))
                    }else{
                        console.log(response.data);
                        callback()
                    }
                }).catch(error => {
                    console.log(error)
                })
            };
            var checkPhone = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('手机不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if ((value+"").length !== 11) {
                            console.log("val类型："+typeof (value))
                            console.log("长度："+(value+"").length)
                            callback(new Error('手机格式有误'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                options:options,
                ruleForm2: {
                    email:'',
                    name: '',
                    pass: '',
                    checkPass: '',
                    phone: '',
                    address: [],
                },
                rules2: {
                    email:[
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
                    ],
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 2, message: '长度在 2 字符以上', trigger: 'blur' },
                        { validator: checkUserName,trigger:'blur'}
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    phone: [
                        { validator: checkPhone, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        blogApi.registerBlog(this.ruleForm2).then(res => {
                            if(res.data.succ){
                                this.$message({message: "注册成功", type: "success"});
                                setTimeout(this.$router.push({path: "/"}),5000)
                            }else {
                                this.$message({message:"注册失败",type:"warning"})
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
#RegisterCss{
    position: relative;
    width: 20%;
    height: 85%;
    margin: 0 auto;
}
</style>