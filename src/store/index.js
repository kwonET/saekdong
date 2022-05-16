import Vue from "vue";
// import { VueCarousel } from "vue-carousel";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios';
Vue.prototype.$http = axios;
import { posix } from 'path';
import { stat } from "fs";

import { fetchNewsList } from '../components/api/index.js';

import VueGeolocationApi from 'vue-geolocation-api'
Vue.use(VueGeolocationApi/*, { ...options } */)
// axios.defaults.timeout=6000;
Vue.use(Vuex);

//export default new Vuex.Store(
export default new Vuex.Store({
    modules:{},
    plugins:[
        createPersistedState(),
    ],
    state:{
        latitude: '',
        longitude: '',
        //textContent: '',
        //ver:'guest',
        //openweather api
        now:"지금은..",
        weather_des:"날씨",
        time_color:[],
        weather_color:[],
        palette:[],
        palette_r:[],
        palette_g:[], 
        palette_b:[],
        //others
        ver:'staff',
        language: 'ko',
        currentIndex:0,
        news:0,
        color:[
            { 
                feature:'아침',
                rgb:[253,209,112]
            },
            { 
                feature:'낮',
                rgb:[104,203,110]
            },
            { 
                feature:'저녁',
                rgb:[254,153,197]
            },
            { 
                feature:'맑음',
                rgb:[10,163,233]
            },
            { 
                feature:'구름',
                rgb:[252,152,132]
            },
            { 
                feature:'흐림',
                rgb:[255,51,122],
            },
            { 
                feature:'비',
                rgb:[212,46,218]
            },
            { 
                feature:'눈',
                rgb:[207,222,229]
            },
        ],
        cards:[
            {
                description:
                [
                    "여기 색동 요술봉은 염원을 가진 사람을 도와 그들의 소원을 이루어주는 기적의 마법이 담겨 있습니다.",
                    "Here a wishful Saekdong Magic Wand shows a miracle that helps people with desire and to make their wishes come true."    
                ],
                img:"/carousel1.png"
            },
            {
                description:
                [
                    "우선, 색동 요술 편지에 당신의 염원을 작성하세요.",
                    "First, you will write down your wish on Saekdong Magic Letter."
                ],
                img:"/carousel2.png"
            },
            {
                description:
                [
                    "공간에 흩어져 있는 33개의 색동 요술 도형은 믿음 사랑 소망으로 구성되어 있습니다.",
                    "The 33 magical Saekdong shapes scattered around the space consist of Trust, Love and Hope."
                ],
                img:"/carousel3.png"
            },
            {
                description:
                [
                    "선택한 3개의 도형이 모여 당신의 요술봉이 탄생합니다.",
                    "The chosen 3 shapes come together and become your magic wand."
                ],
                img:"/carousel2.png"
            }
        ]
    },
    getters:{
        currentIndex:state => {
            return state.currentIndex;
        },
        cards: state=>{
            return state.cards;
        },
        // nowFeature:state=>{
        //     return state.color;
        // },
        nowColor: state=>{
            return state.color;
        },
        timeColor: state=>{
            return state.time_color;
        },
        weatherColor: state=>{
            return state.weather_color;
        },
        paletterColor: state=>{
            return state.palette;
        }
    },
    mutations:{
        SET_NEWS(state, news) {
            state.news = news;
        },
        // Language 설정 관련
        updateLanguage:(state,newLanguage)=>{
            state.language=newLanguage
        },
        toggleLanguage:state=>{
            if(state.language=='ko') state.language='en'
            else state.language='ko'
        },
        // Card 인덱스 설정 관련 (Intro page)
        nextIndex:state=>{
            if(state.currentIndex<state.cards.length-1)
                state.currentIndex++;
        },
        prevIndex:state=>{
            if(state.currentIndex>0)
                state.currentIndex--;
        },
        // arrow @click시 
        prevCard:state=>{
            state.currentIndex--;
        },
        nextCard:state=>{
            state.currentIndex++;
        },
        initCard:state=>{
            state.currentIndex=0;
        },
        generateLoc:(state,payload)=>{
            state.latitude = payload.coords.latitude;
            state.longitude = payload.coords.longitude;
            //state.textContent = 'Your location data is ' + state.latitude + ', ' + state.longitude;
        },
        // color 
        generateNow:(state,payload)=>{
            if(payload>=6 && payload<12){state.now='아침'; state.time_color=state.color[0].rgb;}
            else if(payload>=12 && payload<18){state.now='낮'; state.time_color=state.color[1].rgb;}
            else if(payload>=18 && payload<24){state.now='저녁'; state.time_color=state.color[2].rgb;}
            else if(payload>=0 && payload<6){state.now='새벽'; state.time_color=state.color[0].rgb;}
        },
        generateWeatherDes:(state,payload)=>{
            if (payload==800){state.weather_des='맑음'; state.weather_color=state.color[3].rgb; }
            else if (payload==801 || payload==802 || payload==803|| payload==804) {state.weather_des='구름'; state.weather_color=state.color[4].rgb; }
            else if ((payload>=200 && payload<250)||(payload>=300 && payload<350) || (payload>700 && payload<790)){state.weather_des='흐림'; state.weather_color=state.color[5].rgb; }
            else if (payload>=500 && payload<600 ) {state.weather_des='비'; state.weather_color=state.color[6].rgb;}
            else if (payload>=600 && payload<650 ) {state.weather_des='눈'; state.weather_color=state.color[7].rgb;}
        },
        paletteColor:(state)=>{
            //r
            state.palette.splice(0);
            state.palette_r.splice(0);
            state.palette_g.splice(0);
            state.palette_b.splice(0);
            if(state.time_color[0]<state.weather_color[0]){
                var differ =(state.weather_color[0]-state.time_color[0])/11;
                for(var i=0;i<12;i++) {
                    state.palette_r.push(state.time_color[0] + differ*i );
                }
                state.palette.push(state.palette_r);
                //for(var i=1;i<12;i++) {state.palette[i-1].push(state.time_color+differ*i);}
            }
            if (state.time_color[0]>state.weather_color[0]){
                var differ =(state.time_color[0]-state.weather_color[0])/11;
                for(var i=0;i<12;i++) {
                    state.palette_r.push(state.time_color[0] - differ*i);
                }
                state.palette.push(state.palette_r);
                //for(var i=1;i<12;i++) {state.palette[i-1].push(state.weather_color+differ*i);}
            }
        
            //g
            if(state.time_color[1]<state.weather_color[1]){
                var differ2 =(state.weather_color[1]-state.time_color[1])/11;
                for(var i=0;i<12;i++) {
                    state.palette_g.push(state.time_color[1]+differ2*i);
                }
                state.palette.push(state.palette_g);
            }
            if (state.time_color[1]>state.weather_color[1]){ 
                var differ2 =(state.time_color[1]-state.weather_color[1])/11;
                for(var i=0;i<12;i++) {
                    state.palette_g.push(state.time_color[1]-differ2*i);
                }
                state.palette.push(state.palette_g);
            }
            //b
            if(state.time_color[2]<state.weather_color[2]){
                var differ =(state.weather_color[2]-state.time_color[2])/11;
                for(var i=0;i<12;i++) {
                    state.palette_b.push(state.time_color[2]+differ*i);
                }
                state.palette.push(state.palette_b);
            }
            if (state.time_color[2]>state.weather_color[2]){
                var differ =(state.time_color[2]-state.weather_color[2])/11;
                for(var i=0;i<12;i++) {
                    state.palette_b.push(state.time_color[2]-differ*i);
                }
                state.palette.push(state.palette_b);
            }
        }
    },
    actions:{
        FETCH_NEWS:({commit})=> {
            fetchNewsList()
            .then(response => {
                console.log(response);
                //구조상 actions에서 state로 바로 데이터를 바인딩 할 수 없다.
                //actions에서는 mutations을 거쳐 state로 가기 때문에
                //mutations에서 이를 담아주는 함수를 실행해야함.
                //actions에서는 mutations에 접근할 수 있게 context가 제공된다.
                //context.commit으로 해당 mutations에 접근할 수 있다.
                commit('SET_NEWS', response.data[response.data.length()].id); //context.commit('전송할 mutations 함수의 이름', 전송할 데이터);
            })
            .catch(error => {
                console.log(error);
            })
        },
        playSound_charm:({commit})=>{
            var audio=new Audio(`/src/assets/charm_sound.wav`);
            audio.play();
        },
        geofind:({commit})=>{
            // if(!("geolocation" in navigator)) {
            //     state.textContent = 'Geolocation is not available.';
            //     return;
            // }
            //     state.textContent = 'Locating...'
            
            // get position
            navigator.geolocation.getCurrentPosition(pos => {
                console.log(pos);
                commit('generateLoc',pos);
            })
                // err => {
                //     state.textContent = err.message;
                // })
        },
        callDate:({commit})=>{
            //time
            var date=new Date();
            commit('generateNow', date.getHours());
        },
        callWeather:({commit})=>{
                axios.get(`"https://api.openweathermap.org/data/2.5/weatther?lat=" + ${state.latitude} + "&lon=" + ${state.longitude} + "&appid=b33642b32e9e7870547c36109f42a437"`)
                //axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Incheon&appid=b33642b32e9e7870547c36109f42a437`)
                .then((result)=>{
                    commit('generateWeatherDes',result.data.weather[0].id);
                    commit('paletteColor');
                    //state.city= result.data.sys.country+","+result.data.name+"시";
                    //state.weather=result.data.weather[0].id;
                })
                // .catch((result)=>{
                //     commit('failWeatherDes',result);
                // })
        },
    },
})