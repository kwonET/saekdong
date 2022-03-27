<template>
<!-- 날씨&시간 DATA test용 -->
    <div id="test">
        <div id="time-now">
            <h1>{{now}}</h1>
            <button @click="time">now time</button>
        </div>

        <button @click="fetch_Weather">now weather</button>

        <div class="weather-now" v-if="view===true">
            <!-- <button @click="fetchWeather">now weather</button> -->
            <!-- <input type="text" v-model="query" @keypress="fetchWeather"> -->
            <h1> {{ country }}</h1>
            <h1>{{ city }}</h1>
            <h1> {{ id }} </h1>
            <h1> {{ main }} </h1>
        </div>
    </div>
</template>

<script>
import { posix } from 'path';
export default {

    data(){
        return{
            now:"00:00:00",
            // api_key: "b33642b32e9e7870547c36109f42a437", 
            // url_base: "api.openweathermap.org/data/2.5/", 
            // // query: "", 
            // lat:37.47,
            // lon:126.66,
            // query:"Incheon",

            view:false,
            country:'',
            city:'',
            id:0,
            weather:'',
        }
    },
    computed: {
        hasResult:function(){
            return this.posts.length>0
        }
    },
    methods: {
        el:'#app',
        time(){
            var date=new Date();
            this.now=date.getHours()+":"
            +date.getMinutes()+":"+
            date.getSeconds();
        },
        fetchWeather(){
            const BASE_URL='https://api.openweathermap.org/data/2.5/weather?q=Incheon&appid=b33642b32e9e7870547c36109f42a437'
            // const fetchUrl=`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`;
            // https://api.openweathermap.org/data/2.5/ weather?lat={lat}&lon={lon}&appid={API key}
            // let fetchUrl=`${this.url_base}weather?lat=${this.lat}&lon=${this.lon}$appid=${this.api_key}`;
        //     fetch(fetchUrl)
        //         .then((res)=>{
        //             console.log(res);
        //             return res.json();
        //         }).then(this.setResults);
        // },
            this.$http.get(`${BASE_URL}`)
            .then((result) => {
                this.country = result.data.sys.country;
                this.city = result.data.sys.name;
                this.id = result.data.weather.id;
                this.weather=result.data.weather.main;
                this.view = true
                console.log(result)
            })
        }
    }
}
</script>

<style>

</style>