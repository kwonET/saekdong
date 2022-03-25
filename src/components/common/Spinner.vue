<template>
  <div id="loading">
  <!-- <div class="lds-facebook" v-if="loading">          -->
    <div class="spinner"  v-if="loading"></div>  
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
#loading{
    /* display:none; */
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
}
@keyframes spinner{
    from {transform: rotate(0deg);}
    to {transfrom: rotate(360deg);}
}
#loading .spinner{
  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 64px;
  height: 64px;
  margin-top: -32px;
  margin-left: -32px;
  border-radius: 50%;
  border: 4px solid lightgrey;
  border-top-color: blue;
  animation: spinner .8s linear infinite;
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