<!--한영페이지부터 쓰일 다음 버튼 컴포넌트-->
<template>
<div class="containter">
  <div class="nextBtnContainer" v-on:click="NextPage">
      <span class="NextBtn">
        다음
      </span>
  </div>
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
.container{
  width:100%;
}
.nextBtnContainer{
  position: absolute;
  content: ''; 
  top: 90%;
  left: 50%;
  width: 700px;
  height: 135px;
  margin-top: -150px;
  margin-left: -350px;

  background: #474A57;
  border-radius: 3.5097vh;
  cursor:pointer;
}
.NextBtn{
  position: absolute;
  content: ''; 
  top: 90%;
  left: 50%;
  width: 700px;
  height: 135px;
  margin-top: -120px;
  margin-left: -350px;
  display: flex;
  align-items: center;
  justify-content: center;
}
span{
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