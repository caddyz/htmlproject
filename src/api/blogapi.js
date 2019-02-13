import request from '../util/request'

export default {
    checkUserName(userName){
        return request({
            url:'user/checkUserName/'+userName,
            method:'get',
        })
    },
    registerBlog(data){
        return request({
            url:'user/register',
            method: 'post',
            data,
            headers:{"Content-Type": "application/json"}
        })
    },
    writeArticle(data){
        return request({
            url:"article/write",
            method:'post',
            data,
            headers:{"Content-Type": "application/json"}
        })
    },
    userLogin(data){
        return request({
            url:'user/login',
            method:'post',
            data,
            headers:{"Content-Type": "application/json"}
        })
    },
}