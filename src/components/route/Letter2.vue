<template>
  <div id="lett2" :style="userStyle" style>
    <div class="all-container" >
        <div class="lett-container">
            <div class="text-container">
              <span v-if="this.language=='ko'">염원을 이루기 위한 첫번째 절차가 진행되었습니다.</span>
              <span v-if="this.language=='en'">Initial step to make<br> your wish come true has been done.</span>
            </div>
        
            <div class="img-container">
                <img src='../../assets/letter2.png' alt="">
            </div>
        </div>
        <div class="btn-container">
            <NextBtn v-if="this.language=='ko'" v-bind:propsdata="BtnKorTxt" v-on:toNext="toNextPage()"></NextBtn>
            <NextBtn v-if="this.language=='en'" v-bind:propsdata="BtnEngTxt" v-on:toNext="toNextPage()"></NextBtn>
      </div>
    </div>
  </div>
</template>

<script>
import NextBtn from "../common/NextBtn.vue"

export default {
  data(){
    return{
      BtnKorTxt:'다음',
      BtnEngTxt:'Next',
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
            '--r':this.paletteColor[0][6],
            '--g':this.paletteColor[1][6],
            '--b':this.paletteColor[2][6],
          }
        }
    },
    methods:{
        toNextPage(){
            this.$router.replace('/play');
        },
    },
    components:{
        NextBtn,
    },
    created(){
      this.$store.dispatch('geofind');
      this.$store.dispatch('callWeather');
      this.$store.dispatch('callDate');
  },
}
</script>

<style lang="scss" scoped>
*{
    font-size:16px;
}
body{
  margin:0;
}
#lett2{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color: rgb(var(--r),var(--g),var(--b));
}
.all-container{
  display: flex;
  flex-direction: column;
  height:100%;
  flex-basis: 100%;
  align-items: center;
  justify-content: center;
//   flex-wrap:wrap;
  /* flex-basis: 524px; */
}
.lett-container{
  // padding-top:55%;
  flex-grow: 8;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.btn-container{
    flex-grow: 2;
}
.text-container {
    margin-top:0;
    width:65%;
}

span{
  font-style: normal;
  font-weight: 500;
  font-size: 5.6075vw;
  line-height: 4rem;
  /* identical to box height */

  text-align: center;
  letter-spacing: -1.5px;

  color: #000000;
}
.img-container{
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width:100%;
  height:50%;
}
.img-container>img{
    width:45%;
    height:34%;
}
</style>