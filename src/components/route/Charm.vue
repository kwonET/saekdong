<template>
<div id="charm" :style="userStyle" style>
    <div class="text-container" :style="userStyle" style>
        <h3 v-if="this.language=='ko'">이 순간, 색동요술봉의 힘으로 당신의 염원이 세계에 녹아 들어 작동하기 시작했습니다!</h3>
        <h3 v-if="this.language=='en'">Your wish has now become the part of the world with the power of Saekdong Magic Wand!</h3>
    </div>
    <div class="charm-container">
        <img src="../../assets/charm.png" alt="">
        <div class="charm-content">
            <div class="mini-container">
                <div class="mini-rect"></div>
                <div class="mini-shape"></div>
                <div class="mini-wish" > 
                    <div class="container">
                       <span class="black">{{ userWish }}</span> 
                    </div>
                </div>
            </div>
            <div class="charm-text">
                <span class="red" v-if="this.language=='ko'">당신의 염원은<br> 곧 이루어질 것입니다.<br> 색동 요술나라는<br> 당신의 앞날을 축복합니다</span>
                <span class="red" v-if="this.language=='en'">Your wish will come<br> true soon. You have<br> the blessing of Saekdong<br> Magic Land for your future.</span>
            </div>
        </div>
    </div>
        <!-- 다음버튼 -->
      <NextBtn v-if="this.language=='ko'" v-bind:propsdata="BtnKorTxt" v-on:toNext="toNextPage"></NextBtn>
      <NextBtn v-if="this.language=='en'" v-bind:propsdata="BtnEngTxt" v-on:toNext="toNextPage"></NextBtn>
     
</div>
</template>

<script>
import NextBtn from '../common/NextBtn.vue'

export default {
    data(){
        return{
            BtnKorTxt:'탑 보러 가기',
            BtnEngTxt:'See my tower',
            userObj:{},
            userWish:'',
        };
    },
    methods:{
        toNextPage(){
            this.$router.replace('/tower');
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
            '--r':this.paletteColor[0][9],
            '--g':this.paletteColor[1][9],
            '--b':this.paletteColor[2][9],
        }
        }
    },
    created(){
        this.userWish=localStorage.key(localStorage.length-1);
        this.$store.dispatch('callWeather');
        this.$store.dispatch('callDate');
    },
    components:{
        NextBtn
    },  
}
</script>

<style>
body{
    margin:0;
}
#charm{
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
    width:80%;
    height:60%;
    margin-left:10%;
    margin-top:-30%;
}
h3{
    margin:0 auto;

    font-style: medium;
    font-weight: 400;
    font-size: 4.4393vw;
    line-height: 3.5rem;
    text-align: center;
    letter-spacing: -1.5px;

    color: #FFFFFF;
}
img{
    position: absolute;
    top:25%;
    left:20%;
    width:60%;
    height:50%;
    z-index: 1;
}
.charm-content{
    width:100%;
}
.mini-container{
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;

    top:35%;
    left:20%;
    width:60%;
    height:50%;
}
.mini-rect{
    position: absolute;
    z-index: 2;
    width: 60%;
    height: 45%;

    background: rgba(255, 255, 255, 0.3);
    border-radius: 22px;
}
.mini-shape{
    position: absolute;
    z-index: 100;
    width: 200px;
    height: 200px;
    top:8%;

    background: linear-gradient(rgb(115, 255, 0),rgb(255, 0, 0));
    border-radius: 50%;
}
.mini-wish{
    position: absolute;
    z-index: 100;
    /* height:100%;
    width:100%; */
    top: 34%;
}
.container{
    font-size:30px;
    width:30%;
    height:12%;
    margin-left:30%;
    white-space: nowrap;

    display: flex;
    justify-content: center;
    align-items: center;
}
.black{
    margin:0 auto;
    font-style: medium;
    font-weight: 500;
    font-size: 3.1vw;
    line-height: 2rem;
    text-align: center;
    letter-spacing: -1.5px;

    color: #FF0600;
}
.charm-text{
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top:39%;
    left:20%;
    width:60%;
    height:50%;
}
.red{
    margin:0 auto;

    font-style: medium;
    font-weight: 500;
    font-size: 3.1vw;
    line-height: 2rem;
    text-align: center;
    letter-spacing: -1.5px;

    color: #FF0600;
}
</style>