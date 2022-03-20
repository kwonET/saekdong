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
    background-color: #FDD170;
}
.container{
    margin:0 auto;
}
</style>