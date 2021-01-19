<template>
  <div id="app">
    <router-view/>
    <navigation v-show="isNavShow"></navigation>
  </div>
</template>

<script>
import navigation from "./components/navigation.vue";

export default {
  components: { navigation },
  name: 'App',
 data(){
   return{
   }
 },
 computed:{
   isNavShow(){
     if(this.$route.name==='welcome'||this.$route.name==='signIn'){
       return false;

     }else{
       return true
     }
   }
 }
}
</script>

<style lang="less">
@color:#f71037;
*{
  margin: 0;
  padding: 0;
}
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
