// main.js vue-router 사용
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from "vuex"
Vue.use(VueRouter)


import App from './App.vue' // 라우팅 페이지 viewer app
import Home from './components/route/Home.vue' // 라우팅 대상 페이지
import Lang from './components/route/EngKor.vue' // 라우팅 대상 페이지
import Intro from './components/route/Intro.vue'
import Letter from './components/route/Letter.vue'
import Letter2 from './components/route/Letter2.vue'
import Play from './components/route/Play.vue'
import Play2 from './components/route/Play2.vue'

import store from './store'

const routes = [ // 라우트 설정
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/lang', component: Lang },
    { path: '/intro', component: Intro},
    { path: '/letter', component: Letter },
    { path: '/letter2', component: Letter2 },
    { path: '/play', componnent: Play },
    { path: '/play2', component: Play2 },
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
