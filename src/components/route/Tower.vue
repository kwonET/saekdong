<template>
  <div id="tower" :style="userStyle" style>
    <div class="text-container">
        <img class="carousel" src="../../assets/carousel_last.png" alt="">
        <h3 v-if="this.language=='ko'">당신은 {{ order }}번째 소원탑을 쌓았습니다.</h3>
            <h3 v-if="this.language=='en'">You have built the {{ order }} wish tower.</h3>
      
      <StickBtn v-if="this.language=='ko'" v-bind:propsdata="BtnKorTxt" v-on:toNext="toNextPage"></StickBtn>
      <StickBtn v-if="this.language=='en'" v-bind:propsdata="BtnEngTxt" v-on:toNext="toNextPage"></StickBtn>
    </div>
    <div class="wish-top">
        <img id="element" :src="require(`../../assets/pngreplace/Spr_${imgName[0]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'heart_m_b' : mid_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${imgName[1]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_b_p': bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${imgName[2]}.png`)" alt="">
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
            bottom_point:false,
            bottom_between:false,
            mid_point:false,
            mid_between:false,
            imgName:['C-2','B-9','A-3',],
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
        },
        
    },
    methods:{
        toNextPage(){
            this.$router.replace('/stick');
        },
    },
    created(){
        this.$store.dispatch('callWeather');
        this.$store.dispatch('callDate');
    },
    mounted(){
        //하트가 첫번째로 쌓이는 경우 2
        if(this.imgName[2]=='B-9'){
            if(this.imgName[1]=="A-2"||"A-8"||"B-4"||"B-6"||"C-5"||"A-10"){
                this.bottom_between=false;
                this.bottom_point=true;
            }
            else if(this.imgName[1]=="A-1"||"A-3"||"A-4"||"B-2"||"B-5"||"B-7"||"B-8"||"B-10"||"B-11"||"C-1"||"C-2"||"C-3"||"C-4"||"C-7"||"C-8"){
                this.bottom_point=false;
                this.bottom_between=true;
            }
            else if(this.imgName[1]=="A-5"||"A-6"||"A-7"||"A-9"||"A-11"||"B-1"||"B-3"||"C-6"||"C-9"||"C-10"){
                this.bottom_between=false;
                this.bottom_point=false;
            }
        }
        //하트가 두번째로 쌓이는 경우 1
        else if(this.imgName[1]=='B-9'){
            if(this.imgName[0]=='A-2'||'A-8'||'B-4'||'B-6'||'C-5'||'A-10'){
                this.mid_between=false;
                this.mid_point=true;
            }
            else if(this.imgName[0]=='A-1'||'A-3'||'A-4'||'B-2'||'B-5'||'B-7'||'B-8'||'B-10'||'B-11'||'C-1'||'C-2'||'C-3'||'C-4'||'C-7'||'C-8'){
                this.mid_point=false;
                this.mid_between=true;
            }
            else if(this.imgName[0]=='A-5'||'A-6'||'A-7'||'A-9'||'A-11'||'B-1'||'B-3'||'C-6'||'C-9'||'C-10'){
                this.bottom_between=false;
                this.bottom_point=false;
            }
        }  
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
    width:100%;
    height:70%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
#element{
    width:40%;
}
/* 하트 */
.heart_b_p{
    margin-top:-3.5%;
}
.heart_b_b{
    margin-top:-1.3%;
}
.heart_m_p{
    margin-top:-3.5%;
}
.heart_m_b{
    margin-top:-1.3%;
}
</style>