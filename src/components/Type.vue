<template>
  <div class="type-container">
    <div>
      <div class="type-title">标签分类</div>
      <div class="type-div" v-for="(item, index) in typeList" :key="index">
        <a class="type-item">{{ typeList[index].name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      typeList: [
        {
          id: "001",
          name: "JavaScript",
          articles: ["d", "a"],
        },
        {
          id: "002",
          name: "Html",
          articles: ["d", "a"],
        },
        {
          id: "003",
          name: "Css",
          articles: ["d", "a"],
        },
        {
          id: "0",
          name: "Vue",
          articles: ["d", "a"],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.type-item {
    display: block;
    line-height: 16px;
    float: left;
}
.type-div {
       display: flex;
    margin-top: 13%;
    margin-left: 15%;
}
.type-title {
  height: 30px;
  border-bottom: 1px solid #555;
  text-align: center;
}
</style>