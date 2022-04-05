<template>
  <div id="lett2">
    <div class="all-container">
        <div class="lett-container">
            <div class="text-container">
                <span v-if="this.language=='ko'">염원을 이루기 위한<br> 첫번째 절차가 진행되었습니다.</span>
                <span v-if="this.language=='en'">Initial step to make<br> your wish come true has been done.</span>
            </div>
        
            <div class="img-container">
                <img src='../../assets/letter2.png' alt="">
            </div>
        </div>
        <div class="btn-container">
            <NextBtn v-on:toNext="toNextPage"></NextBtn>
      </div>
    </div>
  </div>
</template>

<script>
import NextBtn from "../common/NextBtn.vue"

export default {
    computed:{
        language(){
            return this.$store.state.language;
        },
    },
    methods:{
        toNextPage(){
            this.$router.replace('/play');
        },
    },
    components:{
        NextBtn,
    }
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
  background-color: #FDD170;
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
  padding-top:40%;
  flex-grow: 8;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-items: center;
  align-items: center;
}
.btn-container{
    flex-grow: 2;
}
.text-container {
    margin-top:0;
    width:65%;
}
.img-container{
    padding-top:20%;
    width:100%;
    height:50%;
    margin-top:0;
}
.img-container>img{
    // width:70%;
    // height:60%;
    max-width: 50.3248vw;
    height: 18.7322vh;
}
.text-container> span{
  font-style: normal;
  font-weight: 700;
  font-size: 5.6075vw;
  line-height: 4rem;
  /* identical to box height */

  text-align: center;
  letter-spacing: -1.5px;

  color: #000000;
}
</style>