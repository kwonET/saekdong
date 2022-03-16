
<template>
  <div id="intro">
      <CardList />
      <NextBtn v-on:toNext="toNextPage"></NextBtn>
  </div>
</template>

<script>
import CardList from "../common/CardList.vue"
import NextBtn from '../common/NextBtn.vue'

export default {
    components:{
        CardList,
        NextBtn
    },
    methods:{
      toNextPage(){
        this.$router.replace('/letter');
      }
    }
}
</script>

<style lang="scss" scoped>
    * {
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 2rem;
    padding-left: 40px;
  }
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #333;
    
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -1.5px;

    color: #000000;
  }

  #intro {
    position: relative;
    padding: 20px 0;
    overflow: hidden;
  }
</style>


