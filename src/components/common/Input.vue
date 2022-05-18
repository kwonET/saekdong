<template>
<div class="add">
  <input type="text" v-model="newInputItem" v-on:keyup.enter="addInput" class="letter-input">
    <div class="containter">
        <button class="add__button" v-on:click="addInput">
        <span v-if="this.language=='ko'" lass="blind">입력 완료</span>
        <span v-if="this.language=='en'" lass="blind">Complete!</span>
        </button>
    </div>  
</div>
</template>

<script>
export default {
    data(){
        return{
        newInputItem:"",
        }
    },
    methods:{
        addInput(){
            if(this.newInputItem!==''){
            this.$emit('addInputItem',this.newInputItem) //addTodoItem이라는 이벤트가 하위컴포넌트에서 발생
            this.clearInput();
            }
        },
        clearInput(){
        this.newInputItem=''; // 데이터를 리셋
        }
    },
    computed:{
        language(){
        return this.$store.state.language;
        },
    }
}
</script>

<style>
.add{
    display: flex;
    flex-direction: column;
}
input{
  width:100%;
  height:100%;
  font-family: 'Gothic A1';
  font-style: normal;
  font-weight: 500;
  font-size: 3.2056vw;
  line-height: 22px;
  text-align: center;
  letter-spacing: -1.5px;

  color: #000000;
}
.container{
  width:100%;
}
.add__button{
    position: absolute;
    content: ''; 
    left: 20%;
    top: 90%; 
    width: 60%;
    height: 30%;
    background: #d3ddf1;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
}
.blind{
    margin:0 auto;

    font-style: medium;
    font-weight:600;
    font-size: 2.8vw;
    line-height: 3.5rem;
    text-align: center;
    letter-spacing: -2px;

    color: rgb(11, 31, 121);
}
span{
  font-style: normal;
  font-weight: 500;
  font-size: 3vw;
  line-height: 4rem;
  /* identical to box height */

  text-align: center;
  letter-spacing: -1.5px;

  color: #000000;
}
</style>