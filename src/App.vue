<template>
  <div id="app" class="typo">
    
    <Tab :MyName="MyName" :tabs="tabs"/>
    <div>
      <!-- <IndexPage v-if="curTabKey === 'index'"></IndexPage>
      <AboutMePage v-else-if="curTabKey === 'aboutme'"></AboutMePage> -->
      <router-view :MyName="MyName"></router-view>
    </div>
  </div>
</template>

<script>
import Tab from "./components/Tab.vue";
// import IndexPage from"./containers/IndexPage";
// import AboutMePage from"./containers/AboutMePage";
export default {
  name: "App",
  components: {
    Tab,
    // IndexPage,
    // AboutMePage,
  },
  data() {
    return {
      // tabs: [
      //   {
      //     name: '首页',
      //     icon: '',
      //     key: 'index',
      //   },
      //   {
      //     name: "关于我",
      //     icon: '',
      //     key: 'aboutme'
      //   },
      // ],
        tabs: [
        {
          name: '首页',
          key: 'index',
          path: '/',
        },
        {
          name: "关于我",
          key: 'aboutMe',
          path: '/about_me'
        },
      ],
      // curTabKey:'index',
      // curTabIndex:'index',
      MyName:'Allen',
      
    };
  },
  methods:{
    //   handleChangeTabKey(key) {
    //   this.curTabKey = key;
    // },
    
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
