<template>
    <div id="stick" :style="userStyle" style>
      <div class="wish-stick">
        <img id="element" :src="require(`../../assets/pngreplace/Spr_${imgName[0]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_m_p': mid_point === true,'mid_b_b' : mid_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${imgName[1]}.png`)" alt="">
        <img id="element" 
            :class="{'heart_b_p': bottom_point === true,'heart_b_b' : bottom_between === true,}"
            :src="require(`../../assets/pngreplace/Spr_${imgName[2]}.png`)" alt="">
        <img class="stick" src="../../assets/pngreplace/Spr_Stick.png" alt="">
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            point:["A-2","A-8","B-4","B-6","C-5","A-10"],
            //c-1 뜨는 문제 + c-2, c-8
            between:["A-1","A-3","A-4","B-2","B-5","B-7","B-8","B-10","B-11","C-1","C-2","C-3","C-4","C-7","C-8"],
            //a-5 ~ b-1 살짝 뜸 + c-9
            none:["A-5","A-6","A-7","A-9","A-11","B-1","B-3","C-6","C-9","C-10"],
            imgName:['C-10','C-10','B-9'],
            randomName:['C-1','B-2','A-4'],
            bottom_point:false,
            bottom_between:false,
            mid_point:false,
            mid_between:false,
        }
    },
    computed:{
      timeColor(){
          return this.$store.state.time_color;
      },
      weatherColor(){
          return this.$store.state.weather_color;
      }, 
      paletteColor(){
          return this.$store.state.palette;
      },
      userStyle(){
          return{
              //home = 0번째
              '--r':this.paletteColor[0][10],
              '--g':this.paletteColor[1][10],
              '--b':this.paletteColor[2][10],
          }
      },
        objStack(){
            return this.$store.state.objStk;
    }
  },
  methods:{
    makePDF(){
        var dataUrl='../../assets/';
        var node = document.getElementById('stick');
        htmlToImage.toPng(node)
            .then(function (dataUrl) {
                download(dataUrl, 'my-stick.png');
        })
    },
    bottomHeartP(){
        this.bottom_between=false;
        this.bottom_point=true; 
    },
    bottomHeartB(){
        this.bottom_between=true;
        this.bottom_point=false;
    },
    bottomHeartN(){
        this.bottom_between=false;
        this.bottom_point=false;
    },
    midHeartP(){
        this.mid_between=false;
        this.mid_point=true; 
    },
    midHeartB(){
        this.mid_between=true;
        this.mid_point=false;
    },
    midHeartN(){
        this.mid_between=false;
        this.mid_point=false;
    },
  },
  mounted(){
        //하트가 첫번째로 쌓이는 경우 2
        if(this.imgName[2]=="B-9"){
            if((this.point).includes(this.imgName[1])){
                this.bottomHeartP();
            }
            else if((this.between).includes(this.imgName[1])){
                this.bottomHeartB();
            }
            else if((this.none).includes(this.imgName[1])){
                this.bottomHeartN();
            }
        }  
        //하트가 두번째로 쌓이는 경우 1
        else if(this.imgName[1]=="B-9"){
            if((this.point).includes(this.imgName[0])){
                this.midHeartP();
            }
            else if((this.between).includes(this.imgName[0])){
                this.midHeartB();
            }
            else if((this.none).includes(this.imgName[0])){
                this.midHeartN();
            }
        }  
    },
    created(){
        this.$store.dispatch('geofind');
        this.$store.dispatch('callWeather');
        this.$store.dispatch('callDate');
}
}
</script>

<style>
body{
    margin:0;
}
#stick{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgb(var(--r),var(--g),var(--b));
}
.wish-stick{
    width:100%;
    height:100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.stick{
    width:50%;
}
#element{
    width:40%;
    margin-left:30%;
    margin-right:30%;
}
/* 하트 */
.heart_b_p{
    margin-top:-3.5%;
}
.heart_b_b{
    margin-top:-1.2%;
}
.heart_m_p{
    margin-top:-3.5%;
}
.heart_m_b{
    margin-top:-1.3%;
}
.stick{
    margin: 0%;
}
</style>