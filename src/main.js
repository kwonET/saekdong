// main.js vue-router 사용
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from "vuex"
Vue.use(VueRouter)

/*---------------------------*/
/*carousel 및 swipe 라이브러리 */
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'
// import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// import VueCarousel from 'vue-carousel'
// Vue.use(VueCarousel)
/*---------------------------*/

import App from './App.vue' // 라우팅 페이지 viewer app
import Home from './components/route/Home.vue' // 라우팅 대상 페이지
import Lang from './components/route/EngKor.vue' // 라우팅 대상 페이지
import Intro from './components/route/Intro.vue'
import Letter from './components/route/Letter.vue'
import store from './store'

const routes = [ // 라우트 설정
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/lang', component: Lang },
    { path: '/intro', component: Intro},
    { path: '/letter', component: Letter },
]
const router = new VueRouter({
    mode: 'history',
    routes,
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
