// 该配置文件是用于配置网络请求需要的uri地址
// 集中管理地址，效率高

// uri的特定前缀
let prefix = "/api";

export default {
    // 获取歌曲播放接口
    // 请求参数: ?id=songmid 
    getPlaySong: prefix + "/song/urls",
    getHot: prefix + "/search/hot",

    // 获取歌曲搜索接口
    // 请求参数: ?key= 输入框的数据
    getSearch: prefix + "/search",

    // 请求歌单接口
    getSongList: prefix + "/songlist/list",

    // 获取歌单详情信息
    // 请求参数: 歌单?id=list.dissid
    getSongListInfo: prefix + "/songlist",

    // 获取歌曲信息
    // 请求参数: ?songmid=****   歌曲的songmid
    getSong: prefix + "/song",

    //为你推荐歌单
    getRecommend: prefix + "/recommend/playlist/u",

    //歌手详细信息
    // 请求参数: ?singermid= ****
    getRecommend: prefix + "/singer/desc",

    //获取排行歌单
    // 请求参数: ?showDetail=1
    getRank: prefix + "/top/category",






};
