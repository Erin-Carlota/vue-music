<template>
  <div class="home">
    <Mynav />
    <MusicType :list='xin' name='新歌榜' />
    <MusicType :list='re' name='热歌榜' />
    <MusicType :list='yao' name='摇滚榜' />
    <div>
      <ul>
        <li @click="changeType('Xin')">新歌榜</li>
        <li @click="changeType('Re')">热歌榜</li>
        <li @click="changeType('Yao')">摇滚榜</li>
      </ul>
      <div>
        <component :is='curComp' />
      </div>
    </div>
  </div>
</template>

<script>
import Mynav from '../../components/Mynav'
import MusicType from './MusicType'
import {getList} from '../../api/index'
import Xin from '../bangdan/Xin'
import Re from '../bangdan/Re'
import Yao from '../bangdan/Yao'
export default {
  name: 'Home',
  data(){
    return {
      xin:[],
      re:[],
      yao:[],
      curComp:'Xin'
    }
  },
  methods:{
    changeType(type){
      this.curComp = type
    }
  },
  mounted(){
    // 新歌榜
    getList({type:1,size:6,offset:0})
    .then(data=>{
      console.log(data)
      this.xin = data.song_list
    })
    // 热歌榜
    getList({type:2,size:6,offset:0})
    .then(data=>{
      this.re = data.song_list
    })
    // 摇滚榜
    getList({type:11,size:6,offset:0})
    .then(data=>{
      this.yao = data.song_list
    })
  },
  components: {
    Mynav,
    MusicType,
    Xin,
    Re,
    Yao
  }
}
</script>
