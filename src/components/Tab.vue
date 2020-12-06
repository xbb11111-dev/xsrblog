<template>
  <div class="container">
    <div class="name-container">{{MyName}}</div>
    <div class="tab-container">
     <div
      class="tab tab-item"
      :class="{ active: curTabKey ===tab.key }"
      v-for="(tab, index) in tabs"
      :key="index"
      :style="{
        color: curTabKey === tab.key ? '#000' : 'rgba(113, 88, 34, 0.6)',
      }"
      @click="handleClick(tab.key)"
     >
      {{ tab.name }}
     </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
     curTabKey:String,
     MyName:String,
  },
  methods: {
    handleClick(key) {
      this.$emit("changeTabKey", key);
    },
  },
};
</script>

<style>
.container{
  display:flex;
  box-shadow: 0px 5px 18px rgb(216, 99, 70);
  display: flex;
  height: 76px;
  padding-left: 10px;
}
.tab-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 20px;
    line-height: 35px;
    background: #fff;
    margin-left: 78%;
    width: 14%;
}
.name-container{
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 30px;
  font-weight: bold;
  line-height: 55px;
  background:#fff;
}
.tab-item {
  border-bottom: 2px solid transparent;
  cursor: pointer;
}

.active {
  border-bottom-color: rgb(216, 99, 70);
}
</style>