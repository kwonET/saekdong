import Vue from "vue";
// import { VueCarousel } from "vue-carousel";
import Vuex from "vuex";

Vue.use(Vuex);

//export default new Vuex.Store(
export default new Vuex.Store({
    state:{
        currentIndex:0,
        cards:[
            {
                description:"여기 색동 요술봉은 염원을 가진 사람을 도와 그들의 소원을 이루어주는 기적의 마법이 담겨 있습니다.",
                img:"/carousel1.png"
            },
            {
                description:"우선, 색동 요술 편지에 당신의 염원을 작성하세요.",
                img:"/carousel2.png"
            },
            {
                description:"공간에 흩어져 있는 33개의 색동 요술 도형은 믿음 사랑 소망으로 구성되어 있습니다.",
                img:"/carousel3.png"
            },
            {
                description:"선택한 3개의 도형이 모여 당신의 요술봉이 탄생합니다.",
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
        }
    },
    mutations:{
        nextIndex:state=>{
            if(state.currentIndex<state.cards.length-1)
                state.currentIndex++;
        },
        prevIndex:state=>{
            if(state.currentIndex>0)
                state.currentIndex--;
        }
    }
})