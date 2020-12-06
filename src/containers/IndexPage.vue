<template>
<div class="indexPage">
  <div class="indexPage-container">
     <div class="head-list"> 
       <Head></Head>
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
}
.head-list{
    width: 1031px;
    /* border: 1px solid black; */
}
.TypeList{
    width: 251px;
    border: 1px solid black;
    /* margin-right: 89px; */
    /* margin: auto; */
    height: 419px;
    margin-left: 50px;

}
.list{
  /* border:1px solid black; */
}
</style>