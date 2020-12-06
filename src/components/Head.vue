<template>
  <div class="head-container">
    <img  class="head-picture" src="../assets/allen.jpg">
    <div class="head-msg" v-for="(msg,head) in myMsg" :key="head">
      <lable>{{head+":"}}</lable><div>{{msg}}</div>
    </div>
    <p class="head-sign">{{sign}}</p>
  </div>
</template>


<script>

export default {
  props: {
  
  },
  data(){
   return{
      myMsg:{
        email:"xu_shiran@163.com",
        wechat:"xbb11111",
        github:"xbb11111",
        qq:"601404039"
      },
      sign:"我是Allen，一个爱打篮球的程序员。"
    }
  },
  methods: {

    
  },
};
</script>

<style>
.head-container{
  width: 100%;
  height: 300px;
  /* border: 1px solid black; */
  
}
.head-picture{
    float: left;
    margin-left: .5em;
    border-radius: 50%;
    border: 4px solid #fff;
    box-shadow: 0 2px 1px #eee;
    width:80px;
    height: 80px;
}
.head-msg{
  display: flex;
}
.head-lable{
  text-align:right;
}
.head-sign{
  
}
</style>