<!--2. 한영 선택 페이지-->
<template>
  <div id="lang" style="userStyle" background-color="rgb(var(--r),var(--g),var(--b))">
      <div class="container">
        <div class="choose-container">
          <div class="txt-container">
            <h3 class="kor-txt">언어를 선택해주세요.</h3>
            <h3 class="eng-txt">Choose your language.</h3>
          </div>
          <div class="btn-container">
            <button class="Btn" @click="KorClk()" :class="{select:korClicked}">
                <span>
                한국어
                </span>
                <i v-show="KorClicked" class="fa-solid fa-check"></i>
            </button>
            <button class="Btn" @click="EngClk()" :class="{select:EngClicked}">
                <span>
                English
                </span>
                <i v-show="EngClicked" class="fa-solid fa-check"></i>
            </button>
          </div>
        </div>

        <!-- 다음버튼 -->
      <NextBtn v-on:toNext="toNextPage"></NextBtn>
      </div>
  </div>
</template>

<script>
import NextBtn from '../common/NextBtn.vue'

export default {
  name:'About',
  data(){
    return {
      EngClicked:false, KorClicked:false,
      palette:[],
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
    }, //weatherColor
    paletteColor(){
            //r
            if(this.timeColor[0]<this.weatherColor[0]){
                var differ =(this.weatherColor[0]-this.timeColor[0])/12;
                this.palette[0]=this.timeColor+differ*1;
            }
            else{
                var differ =(this.timeColor[0]-this.weatherColor[0])/12;
                this.palette[0]=this.weatherColor+differ*1;
            }
            //g
            if(this.timeColor[1]<this.weatherColor[1]){
                var differ =(this.weatherColor[1]-this.timeColor[1])/12;
                this.palette[1]=this.timeColor+differ*1;
            }
            else{
                var differ =(this.timeColor[1]-this.weatherColor[1])/12;
                this.palette[1]=this.weatherColor+differ*1;
            }
            //b
            if(this.timeColor[2]<this.weatherColor[2]){
                var differ =(this.weatherColor[2]-this.timeColor[2])/12;
                this.palette[2]=this.timeColor+differ*1;
            }
            else{
                var differ =(this.timeColor[2]-this.weatherColor[2])/12;
                this.palette[2]=this.weatherColor+differ*1;
            }
    },
    userStyle(){
      return{
        '--r':this.palette[0],
        '--g':this.palette[1],
        '--b':this.palette[2],
      }
    }
  },
  methods:{
    updateLanguage(lang){
      this.$store.commit('updateLanguage',lang)
    },
    KorClk(){
      this.KorClicked=true
      this.EngClicked=false
      this.$store.commit('updateLanguage','ko')
    },
    EngClk(){
      this.EngClicked=true
      this.KorClicked=false
      this.$store.commit('updateLanguage','en')
    },
    toNextPage(){
      this.$router.replace('/intro');
    },
  },
  created(){
    this.$store.dispatch('callWeather');
    this.$store.dispatch('callDate');
    this.paletteColor();
  },
  components:{
    NextBtn
  }
}
</script>

<style scoped>
body{
  margin:0;
}
#lang{
  position: absolute;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
}
.container{
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* flex-direction: column;
  text-align: center;
  justify-content: space-around;
  flex-basis: 653px; */
}

.choose-container{
  /*한영선택 부분 크기 설정*/
  margin:0 auto;
  flex-basis: 343px;
}
.txt-container{
  /* font-family: Gothic A1; */
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -1.5px;

  color: #000000;
}
.kor-txt{
  font-size:6.0748vw;
}
.eng-txt{
  font-size:5.1402vw;
}
.btn-container{
  width:67.5234vw;
  margin:0 auto;
  margin-top:9.5032vh;
  margin-bottom:24vh;
  display: flex;
  flex-direction: column;
}
.Btn{
  /* 1. unselected btn style */
  background: #ffffff;
  border: none;
  border-radius: 6px;
  height:8.7473vh;

  color: #000000;

  /* 2. common btn style */
  font-style: normal;
  font-weight: bold;
  font-size: 4.6729vw;
  line-height: 25px;
  /* identical to box height */

  letter-spacing: -1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom:0.8639vh;
  padding-left:9.8131vw;

  cursor: pointer;
}
span{
  text-align: left;
}
.Btn:active,
/* .Btn:hover, */
.Btn:focus{
    /* 2. unselected btn style */
  background-color: #474A57;
  box-shadow: 0px 10px 15px 3px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  height:8.7473vh;

  color: rgba(255, 255, 255, 0.9);
}

.Btn>i{
  font-size: 4.6729vw;
  /* margin-left:31.5421vw; */
  margin-right:5.8411vw;
}
</style>