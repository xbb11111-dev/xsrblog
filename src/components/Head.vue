<template>
  <div class="tab-container">
    <div>
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

    
  },
};
</script>

<style>

</style>