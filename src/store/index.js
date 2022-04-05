import Vue from "vue";
// import { VueCarousel } from "vue-carousel";
import Vuex from "vuex";

Vue.use(Vuex);

//export default new Vuex.Store(
export default new Vuex.Store({
    state:{
        //ver:'guest',
        ver:'staff',
        language: 'ko',
        currentIndex:0,
        color:[
            { 
                feature:'아침',
                rgb:(253,209,112)
            },
            { 
                feature:'낮',
                rgb:(104,203,110)
            },
            { 
                feature:'저녁',
                rgb:(254,153,197)
            },
            { 
                feature:'맑음',
                rgb:(10,163,233)
            },
            { 
                feature:'구름',
                rgb:(253,152,132)
            },
            { 
                feature:'흐림',
                rgb:(255,51,122),
            },
            { 
                feature:'비',
                rgb:(212,46,218)
            },
            { 
                feature:'눈',
                rgb:(207,222,229)
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
    }
})