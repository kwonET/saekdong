<template>
<div id="lett">
  <div class="all-container">
    <div class="lett-container">
      <div class="text-container">
        <h3>염원 메세지를 써주세요.</h3>
      </div>
    
      <div class="z-container">
        <div class="img-container">
          <img src='../../assets/letter.png' alt="">
        </div>
        <div class="input-container">
          <input type="text" class="letter-input">
        </div>
      </div>
    </div>

    <NextBtn v-on:toNext="toNextPage"></NextBtn>
  </div>
</div>
</template>

<script>
import nextBtn from '../common/NextBtn.vue'
export default {
  components:{
    nextBtn
  },
  methods:{
    toNextPage(){
      this.$router.replace('/intro');
    }
  }
}
</script>
<style>
body{
  margin:0;
}
#lett{
  position: absolute;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
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
.lett-container{
  display: flex;
  flex-direction: column;
  height:56.5875vh;
  flex-basis:56.5875vh;
  align-content: center;
  /* justify-content: center; */
  text-align: center;
}
.text-container {
  margin-bottom: 7.0194vh;
}
.text-container > h3{
  font-family: 'Gothic A1';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -1.5px;

  color: #000000;
}
.z-container{
  display: flex;
  align-content: center;
  justify-content: center;
}
.img-container>img{
  max-width: 50.3248vw;
  height: 27.7322vh;
}
.img-container{
  position:absolute;
  z-index: 1;
}
.input-container {
  position:absolute;
  z-index: 2;
  margin-top:5.6156vh;
}
.input-container input{
  height:4.9676vh;
  font-family: 'Gothic A1';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -1.5px;

  color: #000000;
}

</style>