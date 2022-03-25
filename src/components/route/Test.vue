<template>
<!-- 날씨&시간 DATA test용 -->
    <div id="test">
        <div id="time-now">
            <p>{{now}}</p>
            <button @click="time">now time</button>
        </div>

        <button @click="fetchWeather">now weather</button>

        <div class="weather-now" v-if="view">
            <!-- <button @click="fetchWeather">now weather</button> -->
            <!-- <input type="text" v-model="query" @keypress="fetchWeather"> -->
            <p> {{country}},{{city}} </p>
            <p> {{id}} </p>
            <p> {{main}} </p>
        </div>
    </div>
</template>

<script>
export default {
    name:test,
    data(){
        return{
            now:"00:00:00",
            api_key: "b33642b32e9e7870547c36109f42a437", 
            url_base: "https://api.openweathermap.org/data/2.5/", 
            // query: "", 
            lat:37.47,
            lon:126.66,
            query:"Incheon",
            country:'',
            city:'',
            id:0,
            weather:'',
            view:false,
        }
    },
    methods:{
        time(e){
            var date=new Date();
            this.now=date.getHours()+":"
            +date.getMinutes()+":"+
            date.getSeconds();
        },
        fetchWeather(){
            const fetchUrl=`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`;
            // https://api.openweathermap.org/data/2.5/ weather?lat={lat}&lon={lon}&appid={API key}
            // let fetchUrl=`${this.url_base}weather?lat=${this.lat}&lon=${this.lon}$appid=${this.api_key}`;
        //     fetch(fetchUrl)
        //         .then((res)=>{
        //             console.log(res);
        //             return res.json();
        //         }).then(this.setResults);
        // },
            this.$http.get(`${fetchUrl}`)
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