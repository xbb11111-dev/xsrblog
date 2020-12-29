<template>
<div class="indexPage">
  <div class="indexPage-container">
     <div class="head-list"> 
       <Head :MyName="MyName"></Head>
       <List class="list" :currentType="currentType"></List> 
     </div>
     <Type class="TypeList" @changeType="handleChangeType"></Type> 
   </div>
</div>
   
</template>


<script>
import Head from "../components/Head";
import List from "../components/List";
import Type from "../components/Type";

export default {
  data() {
    return {
      currentType: "all",
    };
  },

   props: {
     MyName:String,
   },
   components: {
    Head,
    Type,
    List,
  },
  methods: {
    handleChangeType(type){
      if(type.id !="001")
      {this.currentType=type.name;}
    }
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