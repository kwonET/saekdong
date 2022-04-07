<template>
<!-- 날씨&시간 DATA test용 -->
<div id="test">
    <!-- <div class="weather-now">
        <button @click="fetch_Weather">now weather</button>

        <h1>{{ now }}</h1>

        <h1> {{ city }}</h1> 
        <h1> {{ weather_des }}</h1> 

        <h2>{{ time_color }}</h2>
        <h2>{{ weather_color }}</h2>
    </div> -->
</div>
</template>

<script>
import { posix } from 'path';

export default {
     data(){
        return{
            now:"지금은..",
            city:"00,00시",
            weather:"00,00",
            weather_des:"날씨",
        }
    },
    props:
    {
        time_color:(0,0,0),
        weather_color:(0,0,0),
    },
    computed:{
      hasResult() {
        return this.posts.length > 0
      }
    },
    methods:{
        match_Color(){
            //time
            if(this.now=='아침'){
                this.time_color=this.palette[0].rgb;
            }
            else if(this.now=='낮'){
                this.time_color=this.palette[1].rgb;
            }
            else if(this.now=='저녁'){
                this.time_color=this.palette[2].rgb;
            }

            //weather
            if(this.weather_des=='맑음'){
                this.weather_color=this.palette[3].rgb;
            }
            else if(this.weather_des=='구름'){
                this.weather_color=this.palette[4].rgb;
            }
            else if(this.weather_des=='흐림'){
                this.weather_color=this.palette[5].rgb;
            }
            else if(this.weather_des=='비'){
                this.weather_color=this.palette[6].rgb;
            }
            else if(this.weather_des=='눈'){
                this.weather_color=this.palette[7].rgb;
            }
        }
    },
    computed: {
      palette() { //rgb
        return this.$store.getters.nowColor;
      },
    },
    created:{
        fetch_Weather(){
                    //time
                    var date=new Date();
                    if(date.getHours()>=6 && date.getHours()<12){this.now='아침'}
                    else if(date.getHours()>=12 && date.getHours()<18){this.now='낮'}
                    else if(date.getHours()>=18 && date.getHours()<24){this.now='밤'}
                    //weather
                    const BASE_URL='https://api.openweathermap.org/data/2.5/weather?q=Incheon&appid=b33642b32e9e7870547c36109f42a437'
                    this.$http.get(`${BASE_URL}`)
                    .then((result) => {
                        this.city= result.data.sys.country+","+result.data.name+"시";
                        this.weather=result.data.weather[0].id;
                        
                        if (this.weather==800){this.weather_des='맑음'}
                        else if (this.weather==801 || this.weather==802 || this.weather==803|| this.weather==804) {this.weather_des='구름'}
                        else if ((this.weather>=200 && this.weather<250)||(this.weather>=300 && this.weather<350) || (this.weather>700 && this.weather<790)){this.weather_des='흐림'}
                        else if (this.weather>=500 && this.weather<600 ) {this.weather_des='비'}
                        else if (this.weather>=600 && this.weather<650 ) {this.weather_des='눈'}
                        this.match_Color();
                        //+","+result.data.weather[0].main;
                    })
                    this.match_Color();
        }
    }
}
</script>

<style>

</style>