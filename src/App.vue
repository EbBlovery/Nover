<template>
  <div id="app">
     <keep-alive>
       <router-view></router-view>
     </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'app',
  data(){
    return {

    }
  }
}
</script>

<style lang="less">
@import './style/resert.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
