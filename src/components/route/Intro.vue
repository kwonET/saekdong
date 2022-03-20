
<template>
  <div id="intro">
    <!-- <div class="all-container"> -->
      <div class="carousel">
        <CardList />
      </div>
      <div class="next-btn">
        <NextBtn v-on:toNext="nextCard()"></NextBtn>
      </div>
    <!-- </div> -->
  </div>

</template>

<script>
import CardList from "../common/CardList.vue"
import NextBtn from '../common/NextBtn.vue'

export default {
    components:{
        CardList,
        NextBtn
    },
    computed:{
        currentIndex() {
            return this.$store.getters.currentIndex;
        },
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
    }
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
  background-color: #FDD170;
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

#lett{
  // position: absolute;
  // top:0;
  // left:0;
  // width:100%;
  // height:100%;
  background-color: #FDD170;
}
.all-container{
  display: flex;
  height:100vh;
  flex-basis: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* flex-basis: 524px; */
}