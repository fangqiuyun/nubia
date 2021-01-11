import Login from '@/views/Center/Login'
import Register from '@/views/Center/Register'
import PlayList from '@/views/PlayList/Index'
import PlayList2 from '@/views/PlayList/list'
import Search from '@/views/Search/Index'
import Home from '@/views/Home/Index'
import Rank from '@/views/Home/Rank'
import Recommend from '@/views/Home/Recommend'
import PlaySong  from '@/views/Play/Index'




export default [


    //1.登录
    {
        path: '/login',
        component: Login
    },

    //2.注册
    {
        path: '/register',
        component: Register
    },
    //3.首页
    {
        path: '/index',
        component: Home,
        children: [
            { path: "rank", component: Rank },
            { path: "recommend", component: Recommend },
            {path: 'search', component: Search },
        ],
    },
    //4.列表
    {
        path: '/list',
        component: PlayList
    },
    //5.搜索
<<<<<<< HEAD
    //6.排行榜歌单详情
    {
        path: '/list2/:topId',
        component: PlayList2
=======
    {
        path: '/search',
        component: Search
    },
    // 播放页
    {
        path: '/palysong/:id',
        component: PlaySong

>>>>>>> 6e8d25e87a2b5f95759a8f22cc3e1c9ebb13b24d
    }

]