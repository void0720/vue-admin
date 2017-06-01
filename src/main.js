import Vue from 'vue'
import ElementUI from 'element-ui'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/scroller.css'
import App from './App.vue'
import './assets/js/jquery-1.9.1.min'
import './assets/js/base'
import VueRouter from 'vue-router'
import routes from './routers'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
    // mode: 'history',
    routes
})


new Vue({
    el: '#app',
    router,
    render: h => h(App)
});