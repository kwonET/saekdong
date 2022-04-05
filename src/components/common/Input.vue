<template>
  <input type="text" v-model="newInputItem" v-on:keyup.enter="addInput" class="letter-input">
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
    }
  
}
</script>

<style>

</style>