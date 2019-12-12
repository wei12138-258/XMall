import axios from "axios"

const service = axios.create({
    baseURL : "http://rap2api.taobao.org/app/mock/238544"
})


service.interceptors.request.use(config=>{
    console.log(config)
    config.headers = Object.assign({})
    return config
})

service.interceptors.response.use(res=>{
    return res.data
})

export default service