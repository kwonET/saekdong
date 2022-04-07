<template>
  <div id="tower">
      <div class="text-container">
      <img src="../../assets/carousel_last.png" alt="">
       <h3 v-if="this.language=='ko'">당신은 {{ order }}번째 소원탑을 쌓았습니다.</h3>
        <h3 v-if="this.language=='en'">You have built the {{ order }} wish tower.</h3>
      </div>
    <div class="btn-container">
            <span v-if="this.language=='ko'">내 요술봉 링크 바로가기</span>
            <span v-if="this.language=='en'">See my magic wand</span>
    </div>
    <div class="wish-top">
        
    </div>
   </div>
</template>

<script>
export default {
    data(){
        return{
            order:0,
        }
    },
    computed:{
        language(){
        return this.$store.state.language;
        },
    }
}
</script>

<style>
body{
    margin:0;
}
#tower{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: #19A5E2;
}
.text-container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height:58%;
    margin-top:-30%;
}
h3{
    margin:0 auto;

    font-style: medium;
    font-weight: 400;
    font-size: 4.2vw;
    line-height: 3.5rem;
    text-align: center;
    letter-spacing: -2px;

    color: #000000;

    position: absolute;
    top:13.5%;
    left:10%;
    right:10%;
    width:80%;
    height:10%;
    z-index: 100;
}
img{
    position: absolute;
    top:10%;
    left:10%;
    right:10%;
    width:80%;
    height:10%;
    z-index: 0;
}
.btn-container{
    position: absolute;
    width: 45%;
    height: 4%;
    left: 30%;
    top: 23%;

    background: #C7D4ED;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
span{
    margin:0 auto;

    font-style: medium;
    font-weight:600;
    font-size: 3.2vw;
    line-height: 3.5rem;
    text-align: center;
    letter-spacing: -2px;

    color: rgba(36, 57, 151, 1);
}
</style>