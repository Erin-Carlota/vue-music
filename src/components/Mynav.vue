<template>
    <ul class="nav">
        <li>
            <router-link exact to='/'>首页</router-link>
        </li>
        <li>
            <router-link to='/bang'>榜单</router-link>
        </li>
        <li>
            <router-link to='/mine'>我的</router-link>
        </li>
        <li>
            <router-link to='/search'>搜索</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name:'Mynav'
}
</script>

<style lang='less' scoped>
.nav{
    list-style: none;
    margin:0;
    padding:0;
    display: flex;
    li{
        flex:1;
        height: 56/1.25px;
        a{
            display: block;
            width:100%;
            height:56/1.25px;
            line-height: 56/1.25px;
            text-align: center;
            color:#000;
            border-bottom:2px solid transparent;
        }
        .router-link-active{
            color:#ff0000;
            border-bottom-color: #ff0000;
        }
    }
}
</style>