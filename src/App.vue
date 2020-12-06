<template>
  <div id="app" class="typo">
    
    <Tab :MyName="MyName" :tabs="tabs" :curTabKey="curTabKey" @changeTabKey="handleChangeTabKey" />
    <div>
      <IndexPage v-if="curTabKey === 'index'">Tab{{}}</IndexPage>
      <AboutMePage v-else-if="curTabKey === 'aboutme'">Tab{{}}</AboutMePage>
      <Article @articleShow="handleChangeisClick" v-else-if="isClickArticle"></Article>
    </div>
  </div>
</template>

<script>
import Tab from "./components/Tab.vue";
import IndexPage from"./containers/IndexPage";
import AboutMePage from"./containers/AboutMePage";
import Article from"./containers/Article";
export default {
  name: "App",
  components: {
    Tab,
    IndexPage,
    AboutMePage,
    Article,
  },
  data() {
    return {
      tabs: [
        {
          name: '首页',
          icon: '',
          key: 'index',
        },
        {
          name: "关于我",
          icon: '',
          key: 'aboutme'
        },
      ],
      curTabKey:'index',
      curTabIndex:'index',
      MyName:'Allen',
      isClickArticle:false,
    };
  },
  methods:{
      handleChangeTabKey(key) {
      this.curTabKey = key;
    },
    handleChangeisClick(isClickArticle){
    this.isClickArticle=isClickArticle;
    }
  },
};
</script>

<style>
@import "typocss/typo.css";
#app {
  /* text-align: center; */
  color: #2c3e50;
  
}
.content-container {
  font-size: 48px;
  color: #fff;
}
</style>
