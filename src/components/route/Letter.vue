<template>
  <div id="lett">
    <div class="all-container">
      <div class="lett-container">
        <div class="text-container">
          <span v-if="this.language=='ko'">염원 메세지를 써주세요.</span>
          <span v-if="this.language=='en'">Write down your wish.</span>
        </div>
      
        <div class="z-container">
          <div class="img-container">
            <img src='../../assets/letter.png' alt="">
          </div>
          <div class="input-container">
            <Input v-on:addInputItem="addOneItem"></Input>
            <!-- <input type="text" v-model="newInputItem" v-on:keyup.enter="addInput" class="letter-input"> -->
          </div>
        </div>
      </div>

      <NextBtn v-on:toNext="toNextPage"></NextBtn>
    </div>
  </div>
</template>

<script>
import NextBtn from '../common/NextBtn.vue'
import Input from '../common/Input.vue'

export default {
  data(){
    return{
      inputItems:[],
    }
  },
  computed:{
    language(){
      return this.$store.state.language;
    },
  },
  methods:{
    addOneItem(inputItem){
      const obj={completed:false,item:inputItem};
      localStorage.setItem(inputItem,JSON.stringify(obj));
      this.inputItems.push(obj);
    },
    toNextPage(){
      this.$router.replace('/letter2');
    },
  },
  created(){
    if(localStorage.length>0){
      for(let i=0;i<localStorage.length;i++){
        if(localStorage.key(i)!=='loglevel:webpack-dev-server'){
          this.inputItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  components:{
    NextBtn,
    Input
  },
}
</script>

<style lang="scss" scoped>
// *:lang(ko){
//   *:not(:lang(ko)){
//     display: none;
//   }
// }
// *:lang(en){
//   *:not(:lang(en)){
//     display: none;
//   }
// }
body{
  margin:0;
}
#lett{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
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
span{
  font-family: 'Gothic A1';
  font-style: normal;
  font-weight: 700;
  font-size: 5.6075vw;
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
  font-size: 3.2056vw;
  line-height: 22px;
  text-align: center;
  letter-spacing: -1.5px;

  color: #000000;
}
</style>