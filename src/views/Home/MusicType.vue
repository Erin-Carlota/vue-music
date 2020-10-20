<template>
    <div class="musictype">
        <div class="head">
            <h1>{{name}}</h1>
            <router-link :to='{name:"List",params:{type:nowtype}}'>更多</router-link>
        </div>
        <ul class="musiclist">
            <li v-for='item in list' :key='item.song_id'>
                <img :src="item.pic_big" alt="">
                <p>{{item.title}}</p>
                <p>{{item.author}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['list','name'],
    computed:{
        nowtype(){
            let obj={
                '新歌榜':1,
                '热歌榜':2,
                '摇滚榜':11
            }
            return obj[this.name]
        }
    }
}
</script>

<style lang='less' scoped>
.musictype{
    margin:10px 0;
    padding:40px 20px 10px;
    .head{
        padding:3px 0;
        overflow: hidden;
        h1{
            float: left;
            font-size:20px;
            font-weight: bold;
        }
        a{
            float: right;
            color:#ccc;
            font-size:12px;
        }
    }
    .musiclist{
        overflow: hidden;
        margin-top:10px;
        li{
            float: left;
            width:135/1.25px;
            height:180/1.25px;
            margin-bottom:10px;
            img{
                width:100%;
            }
            margin-right:5px;
            &:nth-child(3){
                margin-right: 0;
            }
            &:nth-child(6){
                margin-right: 0;
            }
        }
       
    }
}
</style>