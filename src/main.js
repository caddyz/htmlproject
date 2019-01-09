import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import Test from './components/Test.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
  {path:"/test",component:Test}
]

const router = new VueRouter({
  routes
})

new Vue({
  router:router,
  render: h => h(App)
}).$mount("#app")
