/*
 * @Author: your name
 * @Date: 2020-06-02 14:21:14
 * @LastEditTime: 2020-06-19 18:27:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \officialWebsite\request\request.js
 */
/* 服务器地址 */
var base_url = 'https://mk.2dian.com.cn'; //测试服务器
// var base_url = 'http://192.168.0.108:8000'; //测试服务器
//var base_url = 'http://**********'; //正式服务器


/******************* 配置的拦截器 封装的axios ***********************/
// 创建axios实例
const service = axios.create({
    baseURL: base_url, // api的base_url
    timeout: 120000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
    //config.headers['token'] = 66;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    config.headers['Content-Type'] = "application/json";
    // config.headers['id'] = window.sessionStorage.getItem("id");
    // console.log(config.headers)
    //  
    var t = new Date().getTime()
    if (config.method == 'post') {
        config.data.xcxflag = 'shop'
        config.data.belong = 'admin'
        config.data.t = t
        config.data = JSON.stringify(config.data)
    } else if (config.method == 'get') {
        config.params = {
            xcxflag: 'shop',
            belong: 'admin',
            t: t,

            ...config.params
        }


    }
    console.dir(config)
    return config
}, error => {
    // Do something with request error
    // console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        const res = response.data

        return res
    },
    error => {
        console.log(error) // for debug
        console.log('服务器异常, 请稍后重试')

        return Promise.reject(error)
    }
)