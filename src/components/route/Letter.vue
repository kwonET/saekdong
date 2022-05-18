<template>
  <div id="lett" :style="userStyle" style>
    <div class="all-container">
      <div class="lett-container">
        <div class="text-container">
          <span v-if="this.language=='ko'">염원 메세지를 써주세요.</span>
          <span v-if="this.language=='en'">Write down your wish.</span>
        </div>
      
        <div class="z-container">
          <div class="img-container">
            <img src='../../assets/letter.png' alt="">
            <div class="input-container" style="text-overflow:auto;">
              <Input v-on:addInputItem="addOneItem"></Input>
              <!-- <input type="text" v-model="newInputItem" v-on:keyup.enter="addInput" class="letter-input"> -->
            </div>
          </div>
        </div>
      </div>

      <div class="btn-container">
        <!-- <RemoveBtn v-if="this.version=='staff'" v-on:clearAll="ClearAllItems"></RemoveBtn> -->
        <NextBtn v-on:toNext="toNextPage()" v-if="this.language=='ko'" v-bind:propsdata="BtnKorTxt"></NextBtn>
        <NextBtn v-on:toNext="toNextPage()" v-if="this.language=='en'" v-bind:propsdata="BtnEngTxt"></NextBtn>
      </div>
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
    },
    wish(){
        return this.$store.state.inputWish;
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
    this.$store.dispatch('geofind');
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
*{
    font-size:16px;
}
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

  height:100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
//   flex-wrap:wrap;
  /* flex-basis: 524px; */
}
.lett-container{
  // padding-top:55%;
  flex-grow: 8;
  width:100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.btn-container{
    flex-grow: 2;
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

.z-container{
  width:100%;
  height:50%;
  // margin-left:25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.img-container{
  width:45%;
  height:95%;
  margin-top:0;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.img-container>img{
    width:100%;
    height:60%;
    // max-width: 50.3248vw;
    // height: 18.7322vh;
}
.input-container {
  width:30%;
  height:9%;
  position:absolute;
  z-index: 2;
  margin-top:-20%; 
}

</style>