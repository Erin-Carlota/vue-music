import {base , list , play} from './base'
import axios from 'axios';
 
// 列表数据
export function getList(params){
    return axios.get(base+'?'+list,{params})
    .then(data=>data.data)
}

// 获取播放数据源
export function getPlay(params){
    return axios.get(base+'?'+play,{params})
    .then(data=>data.data)
}