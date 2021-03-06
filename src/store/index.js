import Vue from "vue";
// import { VueCarousel } from "vue-carousel";
import Vuex from "vuex";
import axios from 'axios';
Vue.prototype.$http = axios;
import { posix } from 'path';
// axios.defaults.timeout=6000;
Vue.use(Vuex);

//export default new Vuex.Store(
export default new Vuex.Store({
    state:{
        //ver:'guest',
        //openweather api
        now:"지금은..",
        weather_des:"날씨",
        time_color:[],
        weather_color:[],
        palette:[[]],
        //others
        ver:'staff',
        language: 'ko',
        currentIndex:0,
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
                rgb:[253,152,132]
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
            else if (payload>=600 && payload<650 ) {state.weather_des='눈'; state.weather_color=state.color[7].rgb; }
        },
        paletteColor:(state)=>{
            //r
            if(state.time_color[0]<state.weather_color[0]){
                var differ =(state.weather_color[0]-state.time_color[0])/12;
                for(var i=1;i<12;i++) state.palette[i-1][0]=state.time_color+differ*i;
            }
            else{
                var differ =(state.time_color[0]-state.weather_color[0])/12;
                for(var i=1;i<12;i++) state.palette[i-1][0]=state.weather_color+differ*i;
            }
            //g
            if(state.time_color[1]<state.weather_color[1]){
                var differ =(state.weather_color[1]-state.time_color[1])/12;
                for(var i=1;i<12;i++) state.palette[i-1][1]=state.time_color+differ*i;
            }
            else{
                var differ =(state.time_color[1]-state.weather_color[1])/12;
                for(var i=1;i<12;i++) state.palette[i-1][1]=state.weather_color+differ*i;
            }
            //b
            if(state.time_color[2]<state.weather_color[2]){
                var differ =(state.weather_color[2]-state.time_color[2])/12;
                for(var i=1;i<12;i++) state.palette[i-1][2]=state.time_color+differ*i;
            }
            else{
                var differ =(state.time_color[2]-state.weather_color[2])/12;
                for(var i=1;i<12;i++) state.palette[i-1][2]=state.weather_color+differ*i;
            }
        }
    },
    actions:{
        callDate:({commit})=>{
            //time
            var date=new Date();
            commit('generateNow', date.getHours());
        },
        callWeather:({commit})=>{
            //const BASE_URL='https://api.openweathermap.org/data/2.5/weather?q=Incheon&appid=b33642b32e9e7870547c36109f42a437'
            //this.$http.get(`${BASE_URL}`)
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Incheon&appid=b33642b32e9e7870547c36109f42a437`)
                .then((result)=>{
                    commit('generateWeatherDes',result.data.weather[0].id);
                    //state.city= result.data.sys.country+","+result.data.name+"시";
                    //state.weather=result.data.weather[0].id;
                })
                // .catch((result)=>{
                //     commit('failWeatherDes',result);
                // })

        },
    }
})