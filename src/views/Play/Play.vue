<template>
    <div>
        <Head />
        <div>
            <p>{{title}}</p>
            <p>{{author}}</p>
        </div>
        <div>
            <img :src="pic" alt="">
        </div>
        <!-- 音频标签 -->
        <audio ref='myaudio' :src="playlink" controls></audio>
    </div>
</template>

<script>
import Head from '../../components/CommonHead'
import {getPlay} from '../../api/index'
export default {
    components:{
        Head
    },
    data(){
        return{
            title:'',
            author:'',
            pic:'',
            playlink:''
        }
    },
    mounted(){
        getPlay({songid:this.$route.params.id})
        .then(data=>{
            console.log(data)
            this.title = data.songinfo.title;
            this.author = data.songinfo.author;
            this.pic = data.songinfo.pic_big;
            this.playlink = data.bitrate.show_link
        })
        console.log(this.$refs.myaudio)
        let ad = this.$refs.myaudio;
        // 监听音频播放时间 ontimeupdate
        ad.ontimeupdate = function(){
            console.log(ad.currentTime)
        }
    }
}
</script>

<style scoped>

</style>