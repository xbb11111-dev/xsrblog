<template>
  <div class="head-container">
    <div class="head-title">{{MyName+"'s Blog"}}</div>
    <div style="display: flex;">
      <img  class="head-picture" src="../assets/allen.jpg">
    <!-- <div class="head-msg-list">
        <div class="head-msg" v-for="(msg,head) in myMsg" :key="head">
           <label>{{head+":"}}</label>
           <div>{{msg}}</div>
        </div>
    </div> -->
      <div class="head-sign-list">
       <p class="head-sign">{{sign1}}</p>
       <p class="head-sign">{{sign2}}</p>
      </div>
    </div>
 
    <div class="head-logo-list">
      <a class="head-log head-logo1" @click="hanlePersonalClick"></a>
      <a class="head-log head-logo2" href="https://github.com/xbb11111-dev"></a>
      <a class="head-log head-logo3" href=""></a>
      <a class="head-log head-logo4" href="https://www.zhihu.com/people/bei-wu-di-86"></a>
    </div>
  </div>
</template>


<script>

export default {
  props: {
   MyName:String,
  },
  data(){
   return{
      myMsg:{
        email:"xu_shiran@163.com",
        wechat:"xbb11111",
        github:"xbb11111",
        qq:"601404039"
      },
      sign1:"我是Allen，",
      sign2:"一个爱打篮球的程序员。",
      
    }
  },
  methods: {
      hanlePersonalClick() {
      this.$router.push({
        path: "/about_me",
      });
    },
    
  },
};
</script>

<style>
.head-container{
  width: 100%;
  height: 300px;
  /* border: 1px solid black; */
  
}
.head-title{
     font-family: Montserrat,sans-serif;
    font-weight: bolder;
    text-rendering: optimizeLegibility;
    font-size: 2.5rem;
    margin-bottom: 30px;
    
}
.head-picture{
    float: left;
    border-radius: 50%;
    border: 4px solid #fff;
    box-shadow: 0 2px 1px #eee;
    width:80px;
    height: 80px;
}
.head-msg-list{
  display:flex;
}
.head-msg{
  display: flex;
}
.head-lable{
  text-align:right;
}
.head-sign-list{
  position: absolute;
  margin-left: 95px;
}
.head-sign{
    margin-top: 9px;
    font-size: 20px;
    font-weight: 400
}
.head-logo-list{
display: flex;
margin-top: 20px;
}
.head-log{
    margin-right: 16px;
    border-bottom: 0px solid white !important;
    width: 38px;
    height: 38px;
    background-repeat:no-repeat;
  }
.head-logo1{
   
    background-image: url("../assets/personalInfor.jpg");
    background-size: 36px auto;
    background-position: 1px 1px;
}
.head-logo2{
    background-image: url("../assets/gitHub.jpg");
    background-position: -10px -2px;
    background-size: 55px auto;
}
.head-logo3{
    background-image: url("../assets/weChat.jpg");
    background-size: 71px auto;
    background-position: -17px -10px;
}
.head-logo4{
    background-image: url("../assets/zhiHu.jpg");
     background-size: 37px auto;
    background-position: 0px 0px;
}
/* .head-logo{
    margin-left: 5px;
    border-bottom: 0px solid white !important;
    width: 80px;
    height: 80px;
    background-image: url("../assets/gitHub.jpg");
    background-repeat:no-repeat;
     background-size: 44px auto;

} */
</style>