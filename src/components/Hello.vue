<template>
  <div>
    <div>
      <el-tabs class="nav-bar" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="首页" name="index"></el-tab-pane>
        <el-tab-pane label="分类" name="list"></el-tab-pane>
        <el-tab-pane label="排行" name="third"></el-tab-pane>
        <el-tab-pane label="书单" name="fourth"></el-tab-pane>
        <el-tab-pane label="VIP专区" name="fifth"></el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <router-view></router-view>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.nav-bar{
  background-color:#e4343c;
  height:2.6rem;
  >.el-tabs__item{
    color:#fff;
  }
}
</style>
