<template>
  <div id="app">
    <div class="header">
      <!-- <img src="./assets/logo.png"> -->
      <div class="header-btn logo"><img src="./assets/logo.png"></div>
      <div class="header-btn boospra"><img @click="handleToBook()" src="./assets/boospra.png">我的书架</div>
      <div class="header-btn user"><img @click="handleToUser()" src="./assets/user.png"></div>
    </div>
    <div>
     <keep-alive>
       <router-view></router-view>
     </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {

    }
  },
  methods:{
    handleToUser(){
      alert('denglu')
    },
    handleToBook(){
      alert('book')
    }
  }
}
</script>

<style lang="less" scpoed>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.header{
  height:2.5rem;
  display:flex;
  flex-wrap:nowrap;
  justify-content: space-between;
  align-items:center;
  color:#e43439;
  .logo{
    width:9rem;
    img{
      width:100%;
      height:1.6rem;
    }
  }
  .boospra{
    width:6rem;
    img{
      width:2rem;
      height:1.6rem;
    }
  }
  
}
</style>
