import axios from 'axios'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 利用axios的方法去创建axios实例
// 这里的requests就是axios
const requests = axios.create({
    baseURL: '/api',
    timeout: 5000,
})

// 请求拦截器
requests.interceptors.request.use((config) => {
    nProgress.start()
    return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    nProgress.done()
    return res.data
}, (error) => {
    return Promise.reject(new Error('fail'))
})

export default requests