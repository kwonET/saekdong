<template>
<div id="play2" :style="userStyle" style>
    <div class="text-container">
        <span v-if="this.language=='ko'">이제 앞쪽에 펼쳐진<br> 색동 나라의 풍경속에서<br> 당신의 요술봉을 확인해 보세요</span>
        <span v-if="this.language=='en'">Now let’s check out your magic<br> wand in the scenery of<br> Saekdong Land coming next.</span>
    </div>
  <div class="progress">
    <span>{{ percent }} %</span>
    <div class="circle-wrap">
        <div class="circle">
            <div class="mask full">
                <div class="fill"></div>
            </div>
            <div class="mask half">
                <div class="fill"></div>
            </div>
            <div class="inside-circle">  </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      percent:0,
    }
  },
    mounted() {
        setTimeout(() => {
            // You can also use replace() instead of push()
            this.$router.replace('/charm');
        }, 4000),
        setInterval(this.getPercent,40);
    },
    methods:{
      getPercent(){
          this.percent++;
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
            '--r':this.paletteColor[0][8],
            '--g':this.paletteColor[1][8],
            '--b':this.paletteColor[2][8],
          }
        }
    },
      created(){
        this.$store.dispatch('geofind');
        this.$store.dispatch('callWeather');
        this.$store.dispatch('callDate');
      },
}
</script>


<style>
body{
    margin:0;
}
#play2{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgb(var(--r),var(--g),var(--b));
}
.text-container{
    width:70%;
    height:30%;
    display:flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    margin-left:15%;
    margin-top:20%;
}
.progress{
  display: flex;
  width:100%;
  height:550px;
  justify-content: center;
  align-items: center;
}
.circle-wrap {
  margin: 0 auto;
  width: 550px;
  height: 550px;
  /* background: #fefcff; */
  border-radius: 50%;
  /* border: 1px solid #cdcbd0; */
}

.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width:550px;
  height: 550px;
  position: absolute;
  border-radius: 50%;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
}

.circle-wrap .circle .mask {
  clip: rect(0px, 550px, 550px, 275px);
}

/* .circle-wrap .inside-circle {
  width: 550px;
  height: 200px;
  border-radius: 50%;
  background: #d2eaf1;
  line-height: 120px;
  text-align: center;
  margin-top: 150px;
  margin-left: 150px;
  color: #19A5E2;
  position: absolute;
  z-index: 100;
  font-weight: 700;
  font-size: 2em;
} */

/* color animation */

/* 3rd progress bar */
.mask .fill {
  clip: rect(0px, 275px, 550px, 0px);
  background-image:url('../../assets/ring_fill.png');
  /* background-repeat: no-repeat; */
  background-size: 550px 550px;
}

.mask.full,
.circle .fill {
  animation: fill ease-in-out 4s;
  transform: rotate(180deg);
}

@keyframes fill{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

span{
  width:100%;
  position:absolute;
  z-index:1000;
  font-style: medium;
  font-weight: 500;
  font-size: 5.3075vw;
  line-height: 4rem;
  text-align: center;
  letter-spacing: -1.5px;

  color: #FFFFFF;
}
</style>