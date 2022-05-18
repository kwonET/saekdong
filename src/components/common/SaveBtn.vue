<!--한영페이지부터 쓰일 다음 버튼 컴포넌트-->
<template>
<div class="containter">
  <div class="nextBtnContainer" v-on:click="NextPage">
      <span class="NextBtn">
        {{ propsdata }}
      </span>
  </div>
</div>
</template>


<script>
export default {
  props:  {
    propsdata: {
      default: '부적 저장하기',
      type: String
    }
  },
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
  top: 93%;
  left: 50%;
  width: 50%;
  height: 6%;
  margin-top: -20%;
  margin-left: -25%;

  background: #EE4C4C;
  border-radius: 3.5097vh;
  cursor:pointer;
}
.NextBtn{
  position: absolute;
  content: ''; 

  width: 100%;
  height: 100%;
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