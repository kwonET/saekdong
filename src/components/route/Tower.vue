<template>
  <div id="tower" :style="userStyle" style>
      <div class="text-container">
      <img class="carousel" src="../../assets/carousel_last.png" alt="">
       <h3 v-if="this.language=='ko'">당신은 {{ order }}번째 소원탑을 쌓았습니다.</h3>
        <h3 v-if="this.language=='en'">You have built the {{ order }} wish tower.</h3>
      </div>
      <StickBtn v-if="this.language=='ko'" v-bind:propsdata="BtnKorTxt" v-on:toNext="toNextPage"></StickBtn>
      <StickBtn v-if="this.language=='en'" v-bind:propsdata="BtnEngTxt" v-on:toNext="toNextPage"></StickBtn>
     
    <div class="wish-top">
        <img class="element" src="../../assets/pngfiles/Spr_C-6.png" alt="">
        <img class="element" src="../../assets/pngfiles/Spr_A-5.png" alt="">
        <img class="element" src="../../assets/pngfiles/Spr_C-5.png" alt="">
        <img class="stick" src="../../assets/pngfiles/Spr_Stick.png" alt="">
    </div>
  </div>
</template>

<script>
import StickBtn from '../common/StickBtn.vue'
export default {
    data(){
        return{
            order:0,
            BtnKorTxt:'내 요술봉 링크 바로가기',
            BtnEngTxt:'See my magic wand',
        }
    },
    computed:{
        language(){
            return this.$store.state.language;
        },
        timeColor(){
            return this.$store.state.time_color;
        },
        weatherColor(){
            return this.$store.state.weather_color;
        }, 
        paletteColor(){
            return this.$store.state.palette;
        },
        userStyle(){
            return{
                //home = 0번째
                '--r':this.paletteColor[0][10],
                '--g':this.paletteColor[1][10],
                '--b':this.paletteColor[2][10],
            }
        }
    },
    method:{
        toNextPage(){
            this.$router.replace('/stick');
        },
    },
    created(){
        this.$store.dispatch('callWeather');
        this.$store.dispatch('callDate');
    },
    components:{
        StickBtn
    },  
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
    background-color: rgb(var(--r),var(--g),var(--b));
}
.text-container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height:30%;
    /* height:58%;
    margin-top:-30%; */
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
.carousel{
    position: absolute;
    top:10%;
    left:10%;
    right:10%;
    width:80%;
    height:10%;
    z-index: 0;
}
.wish-top{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height:70%;
}
.stick{
    width:10%; 
}
.element{
    width:28.1%;
}
</style>