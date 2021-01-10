// 封装axios
import axios from "axios";
// 导入store（因为这个地方不是vue实例，不能用this）
// import store from "@/store/index";

// 对于axios响应结果的处理的封装（响应拦截器）
// 例如：之前在学习axios的时候，说axios的网络请求返回结果是在返回对象ret的data属性中。而每次获取数据的时候都需要ret.data比较麻烦，此处可以进行封装的，如果返回结果中有ret.data我们就可以在这里直接返回ret.data。
axios.interceptors.response.use((ret) => {
    // 可以进行响应拦截处理
    // if(ret.data){
    //     return ret.data;
    // }else{
    //     return ret;
    // }
    // 拦截jwt
    // if (ret.data._token) {
    //     // 存储下来（存在什么地方？）vuex+localStorage
    //     store.commit("global/setJwt", ret.data._token);
    // }
    // 短路运算符
    return ret.data || ret;
});

// 对于axios请求的处理的封装（请求拦截器）
// 例如：之前在node处学习了jwt，需要将其丢到请求中。由于其后续每次请求都需要在头中携带jwt，因此可以在此进行封装，让其每次都自动加入header头中。
// axios.interceptors.request.use((cfg) => {
//     // 请求拦截，在没每次请求的时候带上jwt，让jwt上车
//     cfg.headers["authorization"] = store.state.global._token;
//     // 处理完成之后让继续走
//     return cfg;
// });

// 导出axios
export default axios;
