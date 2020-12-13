<template>
<div class="indexPage">
  <div class="indexPage-container">
     <div class="head-list"> 
       <Head :MyName="MyName"></Head>
       <List class="list"></List> 
     </div>
     <Type class="TypeList"></Type> 
   </div>
</div>
   
</template>


<script>
import Head from "../components/Head";
import List from "../components/List";
import Type from "../components/Type";

export default {
   props: {
     MyName:String,
   },
   components: {
    Head,
    Type,
    List,
  },
  methods: {
  },
};
</script>

<style>
@import "../typocss/typo.css";
.indexPage{
   display:flex;
}
.indexPage-container{
   margin:auto;
   display:flex;
   margin-top: 50px;
   padding: 20px;
   min-width: 600px;
}
.head-list{
    min-width: 500px;
    width: 800px;
    
}
.TypeList{
    width: 135px;
    min-width: 100px;
    border: 1px solid #555;
    height: 204px;
    margin-left: 50px;
    padding: 15px;

}
.list{
  
}
</style>