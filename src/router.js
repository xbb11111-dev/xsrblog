
import VueRouter from 'vue-router';
import ArticlePage from './containers/ArticlePage.vue';
import AboutMePage from './containers/AboutMePage.vue';
import IndexPage from './containers/IndexPage.vue';
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/', component: IndexPage },
    { path: '/about_me', component: AboutMePage },
    { path: '/article', component: ArticlePage }
  ]
})

export default router;