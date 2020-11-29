<template>
  <div class="tab-container">
    <div
      class="tab tab-item"
      :class="{ active: value === index }"
      v-for="(tab, index) in tabs"
      :key="index"
      :style="{
        color: value === index ? '#fff' : 'rgba(255, 255, 255, 0.6)',
      }"
      @click="handleClick(index)"
    >
      {{ tab }}
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
    value: Number,
  },
  methods: {
    handleClick(index) {
      this.$emit("input", index);
    },
  },
};
</script>

<style>
.tab-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 45px;
  font-weight: bold;
  line-height: 55px;
}

.tab-item {
  border-bottom: 4px solid transparent;
}

.active {
  border-bottom-color: rgb(216, 99, 70);
}
</style>