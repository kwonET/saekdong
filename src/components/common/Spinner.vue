<template>
<!-- <div class="circle_progress_wrap">
  <svg class="circle_progress" width="600" height="600" viewBox="0 0 600 600">
    <circle class="frame" cx="300" cy="300" r="200" stroke-width="12" />
    <circle class="bar" ref="bar" cx="300" cy="300" r="200" stroke-width="12" :strokeDasharray="progress_a" :strokeDashoffset="progress_o"/>
  </svg>
  <input id="control" ref="control" type="text" value="50"/>
  <strong> {{value}}</strong>
</div> -->
<div class="main"></div>
</template>

<script>
// export default{
//   props:['progress_o','progress_a'],
//   data(){
//     return{
//       control,
//       bar,
//       value,
//     }
//   },
//   methods:{
//     ProgressBar(per){
//       const RADIUS = 54;
//       var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
//       var progress = per / 100;
//       var dashoffset = CIRCUMFERENCE * (1 - progress);
      
//       this.value=per +'%';
//       changeProgress(dashoffset,CIRCUMFERENCE);
//     },
//     changeProgress(dash, Con){
//       this.progress_o=dash;
//       this.progress_a=Con;
//     },
//   },
//   created(){
//     ProgressBar(60);
//   }
  

  // control.addEventListener('input', function(event) {
  //   progress(event.target.valueAsNumber);
  // });
  // control.addEventListener('change', function(event){
  //   progress(event.target.valueAsNumber);
  // });

// }
</script>

// <style lang="scss" scoped>
// body { background-color: #222; }
// .circle_progress_wrap {
//   position: relative;
//   width: 120px;
//   height: 120px;
// }
// .circle_progress { transform: rotate(-90deg); }
// .frame, .bar { fill: none; }
// .frame { stroke: #e6e6e6; }
// .bar {
//   stroke: #03c75a;
//   stroke-linecap: round;
// }
// .value {
//   position: absolute;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   text-align: center;
//   color: #888;
//   font-size: 16px;
//   line-height: 120px;
// }

 .main{
  position: absolute;
  content: '';
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  width: 550px;
  height: 550px;
  margin-top: -150px;
  margin-left: -275px;
  border-radius: 50%;
  background: url("../../assets/ring_fill.png");

  background-size:cover;
}
.main:after{
  position:absolute;
  width:100%;
  height: 100%;
  box-sizing: border-box;
  content:'';
    border: solid 50px rgba(255, 255, 255, 0);

  border-top: solid 50px rgba(255, 255, 255, 1);
  border-radius: 50%;

  transition: all .2s;
  animation: spin 10s steps(1,end) infinite ;
  opacity: 0;
} 

@keyframes spin{
  to{ transform: rotate(0deg);}
  from{ transform: rotate(360deg)}
}
</style>

/* .spinner_container2{
  position:relative;
  z-index: 10;
}
.spinner_container1{
  position:relative;
  z-index: 1;
}

@keyframes spin{
  to{ transform: rotate(0deg);}
  from{ transform: rotate(360deg)}
}
.spinner{
  position: absolute;
  content: '';
  box-sizing: border-box;

  top: 50%;
  left: 50%;
  width: 550px;
  height: 550px;
  margin-top: -150px;
  margin-left: -275px;
  border-radius: 50%;
}
.spinner_fill{
  position: absolute;
  content: '';
  box-sizing: border-box;
 
  top: 50%;
  left: 50%;
  width: 550px;
  height: 550px;
  margin-top: -150px;
  margin-left: -275px;
  border-radius: 50%;
  } 

</style>