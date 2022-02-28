// import Vue from 'vue'
// import App from './App.vue'

// import VueMobileDetection from "vue-mobile-detection";

// import router from './routes';


// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)

// })

// Vue.use(VueMobileDetection);

// main.js vue-router 사용
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue' // 라우팅 페이지 viewer app
import Home from './components/Home.vue' // 라우팅 대상 페이지
import About from './components/EngKor.vue' // 라우팅 대상 페이지

Vue.use(VueRouter)

const routes = [ // 라우트 설정
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About }
]
const router = new VueRouter({
    mode: 'history',
    routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
