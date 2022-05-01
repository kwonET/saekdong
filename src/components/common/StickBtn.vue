<!--한영페이지부터 쓰일 다음 버튼 컴포넌트-->
<template>
<div class="containter">
  <div class="stickBtnContainer" v-on:click="NextPage">
      <span class="StickBtn">
        {{ propsdata }}
      </span>
  </div>
</div>
</template>


<script>
export default {
  props:  {
    propsdata: {
      default: '내 요술봉 링크 바로가기',
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
.stickBtnContainer{
    position: absolute;
    content: ''; 
    left: 30%;
    top: 23%; 
    width: 45%;
    height: 4%;
    background: #C7D4ED;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
}
span{
    margin:0 auto;

    font-style: medium;
    font-weight:600;
    font-size: 3.2vw;
    line-height: 3.5rem;
    text-align: center;
    letter-spacing: -2px;

    color: rgba(36, 57, 151, 1);
}
</style>