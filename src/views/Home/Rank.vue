<template>
    <div>
        <h1>排行</h1>
    </div>

</template>

<script>
import axios from 'axios'
import Vue from 'vue'
//导入uri
import uri from "@/config/uri"

export default {
    data() {
        return {
            //排行歌单数据源
            list: []
        }
    },
    methods: {
        getData() {
            this.$http.get(uri.getRank + "?showDetail=1")
            .then(ret => {
                console.log(ret)
            }).catch(err => console.log(err))

        },
    },
    created() {
        this.getData()
    },
}
</script>