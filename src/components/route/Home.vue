<!--1. 랜딩페이지-->

<template>
  <div id="home" style="userStyle">
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
        <img src="../../assets/landing1.png">
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

<script scoped>
  import Modal from '../common/Modal.vue'

  export default{
    name:'Home',
    data(){
      return{
        showModal : false, 
      }
    },
    // 모바일접속여부를 확인하는 메소드
    methods:{
      isMobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          this.showModal=false;
        } else {
          this.showModal=true;
        }
      },
    },
    computed:{
        timeColor(){
            return this.$store.state.time_color;
        },
        weatherColor(){
            return this.$store.state.weather_color;
        }, //weatherColor
        userStyle(){
          return{
            '--s':this.timeColor,
            '--e':this.weatherColor,
            '--s-r':this.timeColor[0],
            '--s-g':this.timeColor[1],
            '--s-b':this.timeColor[2],
            '--e-r':this.weatherColor[0],
            '--e-g':this.weatherColor[1],
            '--e-b':this.weatherColor[2],
          }
        }
    },
    created(){
      this.$store.dispatch('callWeather');
      this.$store.dispatch('callDate');
      // this.$store.commit('pickTimeColor');
      // this.$store.commit('pickWeatherColor');
    },
    //2초 후 자동 라우팅
    mounted() {
      this.isMobile()
      if(!this.showModal){
        setTimeout(() => {
            // You can also use replace() instead of push()
            this.$router.push('/lang');
        }, 2000);
      }
    },
    components:{
      Modal,
    }
  }

</script>

<style scoped>

body{
  margin:0;
}
#home{
  position: absolute;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  background:linear-gradient(RGB(--s),RGB(--e));
  /* background: linear-gradient(rgb(var(--s-r),var(--s-g),var(--s-b)),rgb(var(--e-r),var(--e-g),var(--e-b))); */
  /* background: linear-gradient(rgb(v-bind(s_r),v-bind(s_g),v-bind(s_b)),rgb(v-bind(e_r),v-bind(e_g),v-bind(e_b))); */
}
 
.imgtxt{
  margin-top:28.0778vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* overflow: hidden; */
  text-align: center;
}
img {
  max-width:58.8785vw;
  max-height:58.8785vw;
}
.txtarea{
  margin-top:4.9676vh;
  width:70%;
}
.txt{
  /* width:100%; */
  margin-top:3.2397vh;
  margin-bottom:3.2397vh;

  font-style: normal;
  /* font-family: Gothic A1; */
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
  margin-bottom: 3.6177vh;
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
