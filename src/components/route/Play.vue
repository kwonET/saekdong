<template>
  <div id="play" :style="userStyle" style>
      <div class="container">
            <span v-if="this.language=='ko'">색동요술나라로 <br> 염원이 접수 되었습니다.</span>
            <span v-if="this.language=='en'">Your wish is sent <br> to Saekdong Magic Land.</span>
      </div>
  </div>
</template>

<script>
export default {
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
                '--r':this.paletteColor[0][7],
                '--g':this.paletteColor[1][7],
                '--b':this.paletteColor[2][7],
            }
        }
    },
    mounted() {
        setTimeout(() => {
            // You can also use replace() instead of push()
            this.$router.replace('/play2');
            // this.$router.replace('/test');
        }, 1500);
    },
    created(){
        this.$store.dispatch('callWeather');
        this.$store.dispatch('callDate');
  },
}
</script>

<style>
body{
    margin:0;
}
#play{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgb(var(--r),var(--g),var(--b));
}
.container{
    height:80%;
    display:flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    margin:20% auto;
}
span{
    margin:0 auto;

    font-style: normal;
    font-weight: 500;
    font-size: 5.6075vw;
    line-height: 4rem;
    text-align: center;
    letter-spacing: -1.5px;

    color: #FFFFFF;
}
</style>