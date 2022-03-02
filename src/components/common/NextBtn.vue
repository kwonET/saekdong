<!--한영페이지부터 쓰일 다음 버튼 컴포넌트-->
<template>
  <div class="nextBtnContainer" v-on:click="NextPage">
      <span class="NextBtn">
        다음
      </span>
  </div>
</template>


<script>
export default {
  methods:{
    NextPage(){
      this.$emit('toNext');
    }
  }
}
</script>

<style scoped>
.nextBtnContainer{
  width:71.0280vw;
  height:7.0194vh;
  margin:26.4579vh auto;
  background: #474A57;
  border-radius: 3.5097vh;
  display:flex;
  align-items: center;
  cursor: pointer;
}

.NextBtn{
    margin:0 auto;
    /* font-family: Gothic A1; */
    font-style: normal;
    font-weight: bold;
    font-size: 4.2056vw;
    line-height: 22px;
    /* identical to box height */

    text-align: center;
    letter-spacing: -1px;

    color: #FFFFFF;
}

</style>