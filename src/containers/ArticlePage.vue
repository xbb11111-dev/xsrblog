<template>
  <div style="padding: 10px">
    <!-- <router-link class="articlePage-back" :to="{path:'/'}"></router-link> -->
    <div class="articlePage">
      <div style="display: flex">
        <p class="articlePage-head">关于vue实现双向绑定原理</p>
      </div>
      <div class="articlePage-info">
        <div class="articlePage-info-item">
          <label>时间:</label>
          <p class="articlePage-time">{{ article.createTime + ";" }}</p>
        </div>
        <div class="articlePage-info-item">
          <label>作者:</label>
          <p class="articlePage-author">{{ article.author + ";" }}</p>
        </div>
        <div class="articlePage-info-item">
          <label>标签:</label>
          <div class="articlePage-tab" v-for="(item,index) in article.Type" :key="index">
           <p v-if="index==article.Type.length-1"> {{ item  + ";"}}</p>
           <p v-else> {{ item  + ","}}</p>
          </div>
        </div>
      </div>
      <div class="articlePage-content">
        <p class="articlePage-titlt">一</p>
        <p>{{article.content}}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {},
  data() {
    return {
      article: {
        id: "0001",
        title: "关于vue实现双向绑定原理",
        createTime: "2021年12月1日",
        updateTime: "2021年12月4日",
        author: "Allen",
        content:
          "我们已经知道实现数据的双向绑定，首先要对数据进行劫持监听，所以我们需要设置一个监听器Observer，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者Watcher看是否需要更新。因为订阅者是有很多个，所以我们需要有一个消息订阅器Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的。接着，我们还需要有一个指令解析器Compile，对每个节点元素进行扫描和解析，将相关指令对应初始化成一个订阅者Watcher，并替换模板数据或者绑定相应的函数，此时当订阅者Watcher接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。因此接下去我们执行以下3个步骤，实现数据的双向绑定：1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。2.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。流程图如下：",
        desc: "",
        Type: ["JavaScrip", "vue"],
      },
    };
  },
  methods: {},
};
</script>

<style>
.articlePage {
  width: 800px;
  min-width: 600px;
  margin: auto;
  padding: 10px;
}
.articlePage-head {
    font-size: 48px;
  font-weight: bolder;
  margin: auto;
  line-height: normal;
  border-bottom: 6px solid rgb(216, 99, 70);
  }
.articlePage-titlt{
  color:rgb(216, 99, 70);
  font-size:38px;
  text-align: center;
}
.articlePage-tabs {
  font-size: 17px;
  color: #555;
  align-items: flex-end;
  display: flex;
}
.articlePage-tab {
  margin-right: 8px;
  color: #555;
  display: flex;
}
.articlePage-info-item{
   margin-left: 8px;
  color: #555;
  display: flex;
}

.articlePage-author {
  color: #555;
  font-size: 17px;
  align-items: flex-end;
  display: flex;
}
.articlePage-time {
  font-size: 17px;
  color: #555;
  align-items: flex-end;
  display: flex;
}
.articlePage-info{
  margin-top: 12px;
  display: flex;
}
.articlePage-content{
  margin-top:28px;
}
/* .articlePage-back{
    border-bottom: 0px solid white !important;
    background-repeat:no-repeat;
    background-image: url("../assets/backIndexPage.jpg");
    background-size: 36px auto;
    background-position: 1px 1px;
    display: block;
    width:44px;
    height:44px;
} */
</style>