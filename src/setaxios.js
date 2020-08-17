import axios from 'axios'
import store from './store'
import router from './router/index'
//全局拦截
export default function setAxios(){
    axios.interceptors.request.use(
        //请求拦截
        config=>{
            if(store.state.token){
                config.headers.token=store.state.token
            }
            return config
        }
    )

    axios.interceptors.response.use(
        response=>{
            if(response.status==200){
                const data=response.data
                if(data.code==-1){
                    //需要重新登录
                    store.commit('settoken','')
                    localStorage.removeItem('token')
                    router.replace({path:'/login'})
                }
                return data
            }
            return response
        }
    )
}