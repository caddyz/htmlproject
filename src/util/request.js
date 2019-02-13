import axios from 'axios'
import {Message} from "element-ui";

const base_url = "http://localhost/"

const service = axios.create({
    baseURL:base_url,
    timeout:5000,
})

service.interceptors.response.use(function (response) {
    if(response.data != null){
        return response;
    }else{
        Message({message:"没有数据返回！",type:"error",duration:5000})
        return Promise.reject('error')
    }
},function (error) {
    console.debug("requets error : %o" + error)
    Message({message:error.message,type:"error",duration:5000})
    return Promise.reject(error)
})

export default service
