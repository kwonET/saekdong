<template>
  <div class="removeBtnContainer" @click="RemoveItem">
      <i class="fa-solid fa-dumpster"></i>
  </div>
</template>

<script>
export default {
    methods:{
        RemoveItem(){
            this.$emit('ClearAll');
        }
    }
}
</script>

<style>
i{
  font-size:50px;
}
</style>