<template>
  <div class="list-container">
    <div class="list-item" v-for="(item, index) in articleList" :key="index">
      <h2 class="list-item-head">
        <a class="list-item-title" @click="hanleArticleClick(index)"
          >{{ articleList[index].title }}
        </a>
        <p class="list-item-time">{{ articleList[index].createTime + ";" }}</p>
        <p class="list-item-author">{{ articleList[index].author + ";" }}</p>
        <div class="list-tabs">
          <label>Tab:</label>
          <p
            class="list-tab"
            v-for="item in articleList[index].Type"
            :key="item"
          >
            {{ item }}
          </p>
        </div>
      </h2>
      <p class="list-item-content">{{ articleList[index].content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      articleList: [
        {
          id: "0001",
          title: "关于vue实现双向绑定原理",
          createTime: "2021年12月1日",
          updateTime: "2021年12月4日",
          author: "Allen",
          content:
            "1.vue双向绑定原理vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。我们先来看Object.defineProperty()这个方法：",
          desc: "",
          Type: ["JavaScrip", "vue"],
        },
        {
          id: "0002",
          title: "第二篇",
          createTime: "2021年12月1日",
          updateTime: "2021年12月4日",
          author: "Allen",
          content:
            "1.vue双向绑定原理vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。我们先来看Object.defineProperty()这个方法：",
          desc: "",
          Type: ["JavaScrip", "vue"],
        },
      ],
    };
  },
  methods: {
    hanleArticleClick(index) {
      // this.isClickArticle=true;
      //  this.$emit("articleShow", this.isClickArticle);
      this.$router.push({
        path: "/article",
        query: { id: this.articleList[index].id },
      });
    },
  },
};
</script>

<style>
.list-item {
  margin-bottom: 25px;
}
.list-item-title {
  align-items: flex-end;
  display: flex;
  cursor: pointer;
}
.list-item-time {
  font-size: 17px;
  color: #555;
  align-items: flex-end;
  display: flex;
  margin-left: 12px;
}
.list-item-content {
  font-size: 17px;
}
.list-tabs {
  font-size: 17px;
  color: #555;
  align-items: flex-end;
  display: flex;
}
.list-tab {
  margin-left: 8px;
  color: #555;
}
.list-item-head {
  display: flex;
}
.list-item-author {
  color: #555;
  font-size: 17px;
  align-items: flex-end;
  display: flex;
}
</style>