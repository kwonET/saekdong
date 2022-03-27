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
/* position: absolute;
  content: '';
  box-sizing: border-box;
 
  top: 50%;
  left: 50%;
  width: 550px;
  height: 550px;
  margin-top: -150px;
  margin-left: -275px;
  border-radius: 50%; */

.nextBtnContainer{
  position: absolute;
  content: ''; 
  top: 90%;
  left: 50%;
  width: 700px;
  height: 135px;
  margin-top: -150px;
  margin-left: -350px;

  /* margin:0 auto;
  width: 700px;
  height: 135px;

  display:flex;
  align-items: center;
  justify-content: space-around; */

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
  /* flex-basis: 150px; */
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