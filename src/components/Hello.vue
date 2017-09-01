<template>
  <div>
    <div class="header">
      <div class="header-btn logo"><img src="../assets/logo.png"></div>
      <div class="header-btn boospra"><img @click="handleToBook()" src="../assets/boospra.png">我的书架</div>
      <div class="header-btn user"><img @click="handleToUser()" src="../assets/user.png"></div>
    </div>
    <div>
      <el-tabs class="nav-bar" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页" name="index"></el-tab-pane>
        <el-tab-pane label="分类" name="list"></el-tab-pane>
        <el-tab-pane label="排行" name="ranklist"></el-tab-pane>
        <el-tab-pane label="书单" name="fourth"></el-tab-pane>
        <el-tab-pane label="VIP专区" name="fifth"></el-tab-pane>
      </el-tabs>
    </div>
    <div>
     <keep-alive>
       <router-view></router-view>
     </keep-alive>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'hello',
  data () {
    return {
      list: [],
      activeName: 'index'
    }
  },
  created(){
    this.get()
  },
  methods: {
    get(){
       axios.get('http://novel.juhe.im/categories').then(res=>{
         this.list = res.data.data
       })
    },
    handleClick(tab, event) {
      this.activeName = tab.name;
      const name = tab.name;
      this.$router.push({
        path: name
      })
    },
    handleToUser(){
      this.$router.push({
        path: '/login'
      })
    },
    handleToBook(){
      alert(345)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.nav-bar{
  background-color:#e4343c;
  height:2.6rem;
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
