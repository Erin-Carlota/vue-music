<template>
    <div class="commonHead">
        <span @click="goback">返回</span>
        {{title}}
    </div>
</template>

<script>
    export default {
        props:['title'],
        methods:{
            goback(){
                this.$router.back();
            }
        }
    }
</script>

<style lang='less' scoped>
.commonHead{
    width:100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color:#fff;
    background: #ff0000;
    position: relative;
    span{
        position: absolute;
        top:0;
        left:20px;
    }
}
</style>