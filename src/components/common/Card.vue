<template>
<div class="card">
    <div class="img" :style="backgroundImage"></div>
    <div class="description">{{item.description}}</div>
</div>
  
</template>

<script>
export default {
    props:[
        'item',
        'active'
    ],
    computed:{
        backgroundImage(){  
            return {'background-image':'url(' + require('../../assets'+this.item.img) + ')'};
        }
    }
}
</script>

<style lang="scss" scoped>
.card{
    position:relative;
    width:100%;
    height:600px;
    background-color: none;
    // overflow: hidden;
}
.img{
    width:100%;
    height:600px;
    background-position: center;
    background-size:contain;
    background-repeat: no-repeat;
}
.description{
    position:absolute;
    top:50px;
    padding:5px 20px;
    width:calc(100% - 20px);
    height:40px;
    font-size:1.6rem;
    color:#333;     
}
</style>