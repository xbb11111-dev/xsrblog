<template>
  <div class="list-container">
    <h2 class="current-type">type: {{currentType}}</h2>
    <div class="list-item" v-for="(item, index) in allAarticleList" :key="index">
      <h2 class="list-item-head">
        <a class="list-item-title" @click="hanleArticleClick(index)"
          >{{ item.title }}
        </a>
        <p class="list-item-time">{{ item.createTime + ";" }}</p>
        <p class="list-item-author">{{ item.author + ";" }}</p>
        <div class="list-tabs">
          <label>Tab:</label>
          <p
            class="list-tab"
            v-for="item in item.Type"
            :key="item"
          >
            {{ item }}
          </p>
        </div>
      </h2>
      <p class="list-item-content">{{ item.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentType:String
  },
  mounted:{
    articleList() {
      if (this.currentType === 'all') return this.allArticleList;

      return this.allArticleList.filter((item) => {
        return item.Type.includes(this.currentType)
      })
    }
       
  },
  data() {
    return {
      allAarticleList: [
        {
          id: "0001",
          title: "关于vue实现双向绑定原理",
          createTime: "2021年12月1日",
          updateTime: "2021年12月4日",
          author: "Allen",
          content:
            "1.vue双向绑定原理vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。我们先来看Object.defineProperty()这个方法：",
          desc: "",
          Type: ["JavaScrip"],
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
          Type: ["Html"],
        },
        {
          id: "0003",
          title: "第三篇",
          createTime: "2021年12月1日",
          updateTime: "2021年12月4日",
          author: "Allen",
          content:
            "1.vue双向绑定原理vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。我们先来看Object.defineProperty()这个方法：",
          desc: "",
          Type: ["Css"],
        },
        {
          id: "0004",
          title: "第四篇",
          createTime: "2021年12月1日",
          updateTime: "2021年12月4日",
          author: "Allen",
          content:
            "1.vue双向绑定原理vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。我们先来看Object.defineProperty()这个方法：",
          desc: "",
          Type: ["JavaScrip","Vue"],
        },
      ]
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