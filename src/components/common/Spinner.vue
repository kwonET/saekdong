<template>
  <div id="loading">
  <!-- <div class="lds-facebook" v-if="loading">          -->
    <!-- <img class="spinner" src="../../assets/ring.png" alt=""> -->
    <div class="spinner-container2" v-if="loading===true">
      <img class="spinner" src="../../assets/ring.png" alt="">
    </div>

    <div class="spinner-container1" v-if="loading===true">
      <img  class="spinner_fill" src="../../assets/ring_fill.png" alt="" >
    </div>  
    <!-- <div>
    </div>
    <div>
    </div>
    <div>
    </div> -->
  </div>
</template>

<script>
    export default {
    props: {
      loading: {                                                
          type: Boolean,
          required: true,
      },
    },
    
}
</script>

<style>
.spinner_container2{
  position:relative;
  z-index: 10;
}
.spinner_container1{
  position:relative;
  z-index: 1;
}
/* 
@keyframes spin{
  to{ transform: rotate(0deg);}
  from{ transform: rotate(360deg)}
} */
.spinner{
  position: absolute;
  /* z-index: 100; */
  content: '';
  box-sizing: border-box;

  top: 50%;
  left: 50%;
  width: 550px;
  height: 550px;
  margin-top: -150px;
  margin-left: -275px;
  border-radius: 50%;
  /* border-color: black;
  border-top-color: aliceblue; */
  /* animation: spin 0.8s ease-in infinte; */
}
.spinner_fill{
  position: absolute;
  /* z-index: 1; */
  content: '';
  box-sizing: border-box;
 
  top: 50%;
  left: 50%;
  width: 550px;
  height: 550px;
  margin-top: -150px;
  margin-left: -275px;
  border-radius: 50%;
  /* animation: spin 0s ease-in 1s; */
  }

/* .lds-facebook {
  display: inline-block;
  position: absolute;
  width: 64px;
  height: 64px;
  top: 47%;
  left: 47%;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: #42b883;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 26px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 45px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 6px;
    height: 51px;
  }
  50%, 100% {
    top: 19px;
    height: 26px;
  }
} */
</style>