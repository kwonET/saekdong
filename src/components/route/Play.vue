<template>
  <div id="play">
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
    },
    mounted() {
        setTimeout(() => {
            // You can also use replace() instead of push()
            this.$router.replace('/play2');
            // this.$router.replace('/test');
        }, 2000);
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
    background-color: #19A5E2;
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