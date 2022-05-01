<template>
  <div id="lett" :style="userStyle" style>
    <div class="all-container">
      <div class="lett-container">
        <div class="text-container">
          <span v-if="this.language=='ko'"><b>염원 메세지</b>를 써주세요.</span>
          <span v-if="this.language=='en'">Write down <b>your wish</b>.</span>
        </div>
      
        <div class="z-container">
          <div class="img-container">
            <img src='../../assets/letter.png' alt="">
          </div>
          <div class="input-container" style="text-overflow:auto;">
            <Input v-on:addInputItem="addOneItem"></Input>
            <!-- <input type="text" v-model="newInputItem" v-on:keyup.enter="addInput" class="letter-input"> -->
          </div>
        </div>
      </div>
      <!-- <RemoveBtn v-if="this.version=='staff'" v-on:clearAll="ClearAllItems"></RemoveBtn> -->
       <NextBtn v-if="this.language=='ko'" v-bind:propsdata="BtnKorTxt" v-on:toNext="toNextPage()"></NextBtn>
       <NextBtn v-if="this.language=='en'" v-bind:propsdata="BtnEngTxt" v-on:toNext="toNextPage()"></NextBtn>
 
    </div>
  </div>
</template>

<script>
import NextBtn from '../common/NextBtn.vue'
import Input from '../common/Input.vue'
import RemoveBtn from "../common/RemoveBtn.vue"
import Modal from '../common/Modal.vue'
import Charm from '../route/Charm.vue'

export default {
  data(){
    return{
      BtnKorTxt:'다음',
      BtnEngTxt:'Next',
      newItem:'',
      inputItems:[],
      num:0,
    }
  },
  computed:{
    language(){
      return this.$store.state.language;
    },
    version(){
      return this.$store.state.ver;
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
        '--r':this.paletteColor[0][5],
        '--g':this.paletteColor[1][5],
        '--b':this.paletteColor[2][5],
      }
    }
  },
  methods:{
    addOneItem(inputItem){
      var userNum=this.num;
      const obj={user_num:userNum,item:inputItem};
      localStorage.setItem(inputItem,JSON.stringify(obj));
      this.inputItems.push(obj);
      this.num++;
    },
    clearInput(){
      this.newItem=''; // 데이터를 리셋
    },
    toNextPage(){
        this.$router.replace('/letter2');
    }
  },  
   created(){
    if(localStorage.length>0){
      for(let i=0;i<localStorage.length;i++){
        if(localStorage.key(i)!=='loglevel:webpack-dev-server'){
          this.inputItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    this.$store.dispatch('callWeather');
    this.$store.dispatch('callDate');
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
  background-color: rgb(var(--r),var(--g),var(--b));
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
  font-weight: 500;
  font-size: 5.6075vw;
  line-height: 30px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -1.5px;

  color: #000000;
}
.z-container{
  width:50%;
  height:100%;
  margin-left:25%;
  display: flex;
  align-content: center;
  justify-content: center;
}
.img-container>img{
  width:50%;
  height:50%;
  //max-width: 50.3248vw;
  //height: 27.7322vh;
}
.img-container{
  position:absolute;
  z-index: 1;

}
.input-container {
  width:30%;
  height:9%;
  position:absolute;
  z-index: 2;
  margin-top:9%;
}
.input-container input{
  width:90%;
  height:100%;
  //width: calc(100% - 20px); 
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