
<template>
  <div id="intro" :style="userStyle" style>
    <!-- <div class="all-container"> -->
      <div class="carousel">
        <CardList />
      </div>
      <div class="next-btn">
        <NextBtn v-if="this.language=='ko'" v-bind:propsdata="BtnKorTxt" v-on:toNext="nextCard()"></NextBtn>
        <NextBtn v-if="this.language=='en'" v-bind:propsdata="BtnEngTxt" v-on:toNext="nextCard()"></NextBtn>
      </div>
    <!-- </div> -->
  </div>

</template>

<script>
import CardList from "../common/CardList.vue"
import NextBtn from '../common/NextBtn.vue'

export default {
  data(){
    return {
      BtnKorTxt:'다음',
      BtnEngTxt:'Next',
    }
  },
    components:{
        CardList,
        NextBtn
    },
    computed:{
        language(){
            return this.$store.state.language;
        },
        currentIndex() {
            return this.$store.getters.currentIndex;
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
            //if(this.currentIndex==1){
              '--r':this.paletteColor[0][this.currentIndex+1],
              '--g':this.paletteColor[1][this.currentIndex+1],
              '--b':this.paletteColor[2][this.currentIndex+1],
          }
        }
    },
    methods:{
      nextCard(){
        if(this.currentIndex!=3)
          this.$store.commit('nextCard');
        else
          this.$router.replace('/letter');
      }
    },
    mounted() {
      this.$el.addEventListener('nextCard', event => this.nextCard(event));
    },
    created(){
      this.$store.commit('initCard');
      this.$store.dispatch('geofind');
      this.$store.dispatch('callWeather');
      this.$store.dispatch('callDate');
  },
}
</script>

<style lang="scss" scoped>
* {
  font-size: 1rem;
}
body{
  margin:0;
}
#intro{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color: rgb(var(--r),var(--g),var(--b));
}
// .all-container {
//   display: flex;
//   height:100vh;
//   flex-basis: 100vh;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// }
.carousel {
  position: relative;
  padding: 25vh 0;
  overflow: hidden;
}
</style>
