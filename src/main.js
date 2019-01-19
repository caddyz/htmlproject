import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import PhotoWall from './components/PhotoWall.vue'
import Home from './components/Home.vue'
import Register from './components/Register.vue'
import Fusion from './components/Fusion.vue'
import WriteArticle from './components/WriteArticle.vue'
import ArticleDetail from "./components/homepage/ArticleDetail.vue";


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(mavonEditor)

const routes = [
  {path:"/photo",component:PhotoWall},
  {path:"/home",component:Home},
  {path:"/register",component:Register},
  {path:"/fusion",component:Fusion},
  {path:"/write",component:WriteArticle},
  {path:"/article",component:ArticleDetail},
]

const router = new VueRouter({
  routes
})

new Vue({
  router:router,
  render: h => h(App)
}).$mount("#app")
