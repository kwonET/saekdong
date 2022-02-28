<template>
  <div class="container">
    <Modal v-if="showModal" @close="showModal=false">
    <!-- <Modal v-if="$isMobile()"> -->
      <!--
      you can use custom content here to overwrite
      default content
      -->
      <div class="contain" slot="header">
        <div class="icon">
          <i class="fa-solid fa-circle-exclamation"></i>
        </div>
        <h3>
        이 웹사이트는 모바일 기기에 최적화 되어있습니다. <br>
        모바일 기기에서 접속해주세요. 
        </h3>
      </div>
    </Modal>


      <div class="imgtxt">
        <div class="img">
            <img src="../assets/landing1.png">
        </div>
        <div class="txtarea">
          <div class="line"></div>
          <div class="txt">
              <div class="kortitle">염원의 색동 요술봉 탑</div>
              <div class="engtitle">Tower of Wishful Saekdong Magic Wands</div>
              <div class="name">도로시엠윤</div>
              <div class="name">Dorothy M. Yoon</div>
          </div>
          <div class="line"></div>
        </div>


      </div>
  </div>
</template>

<script>
  import Modal from './common/Modal.vue'

  export default{
    name:'Home',
    data(){
      return{
        showModal
      }
    },
    methods:{
      isMobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          this.showModal=false;
        } else {
          this.showModal=true;
        }
      }
    },
    // created() {
    // // Use in js
    // console.log(this.$isMobile());
    // },
    // // async mounted() { 
    // //   this.showModal=true;
    // //   if(this.$isMobile()){
    // //     this.showModal=false;
    // //     console.log(this.$isMobile());
    // //   }
    // // },
    components:{
      Modal
    }
  }

</script>

<style>
body{
  margin:0;
}
.container{
  text-align: center;
  width:100vw;
  height:100vh;
  background: linear-gradient(#FDD170,#0AA3E9);
}
.imgtxt{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  width:100%;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
  justify-items: center;
  align-items: center;
}
img {
  max-width: 58.8%;
  max-height: 27.2%;
}
.txtarea{
  margin-top:4.9676vh;
  width:70%;
  height:25.5%;
}
.txt{
  /* width:100%; */
  margin-top:3.2397vh;
  margin-bottom:3.2397vh;

  font-style: normal;
  font-family: Gothic A1;
  text-align: center;
  letter-spacing: -0.3505vw;

  color: rgba(255, 255, 255, 0.9);

  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
.kortitle{
  font-weight: 800;
  /* font-size:1.75rem; */
  font-size: 6.5421vw;
  line-height: 8.1776vw;
}
.engtitle{
  font-weight: 600;
  font-size: 6.5421vw;
  line-height: 8.1776vw;
  margin-bottom: 1.9438vh;
}
.name{

  font-weight: bold;
  font-size: 4.2056vw;
  line-height:5.1402vw;
}

.line{
  border: 2.5px solid rgba(239, 239, 239, 0.8);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
}
</style>
