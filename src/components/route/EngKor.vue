<!--2. 한영 선택 페이지-->
<template>
  <div id="lang">
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
      EngClicked:false, KorClicked:false
    }
  },
  methods:{
    KorClk(){
      this.KorClicked=true
      this.EngClicked=false
    },
    EngClk(){
      this.EngClicked=true
      this.KorClicked=false
    },
    toNextPage(){
        this.$router.replace('/intro');
    }
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
  background-color: #FDD170;
  display: flex;
  align-items:center;
  justify-content: center;
}
.container{
  /* margin-top: 23.1102vh; */
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  flex-basis: 653px;
}

.choose-container{
  /*한영선택 부분 크기 설정*/
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
.Btn:select{
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