import axios from 'axios'
import GLOBAL from '../Global'
import { Message, MessageBox } from 'element-ui'

// 创建axios实例
const service = axios.create({
    headers: {'Content-Type': 'application/json'},
    baseURL: GLOBAL.url, // api 的 base_url
    timeout: 5000 // 请求超时时间
});

service.interceptors.request.use(
    config => {
        if (sessionStorage.getItem('admintoken')) {
          console.log("?"+sessionStorage.getItem('admintoken'));
            config.headers['Authorization'] = sessionStorage.getItem('admintoken') // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

export default service
