<template>
  <div>
    <div class="header">
      <el-row>
        <el-col @click.native="back()" class="el-icon-arrow-left" :span="4">返回</el-col>
        <el-col :span="16">登录</el-col>
        <el-col :span="4" @click.native="handleToHome()" class="homePage">Home</el-col>
      </el-row>
    </div>
    <div class="container">
       <p>第三方账号快捷登录</p>
       <div>
         <el-row>
           <el-col class="qq" :span="12">
             <img src="../../assets/qq.jpg" alt="">
             <p>QQ</p>
           </el-col>
           <el-col class="weibo" :span="12">
             <img src="../../assets/weibo.jpg" alt="">
             <p>微博</p>
           </el-col>
         </el-row>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    handleToHome(){
      this.$router.push({
        path:'/'
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .header{
    width:100%;
    height: 3rem;
    background:rgb(185,51,33);
    .el-col{
      height:inhert;
      color:#fff;
      line-height: 3rem;
      font-size: 1.1rem;
    }
  }
  .container{
    padding-top: 20rem;
    width: 100%;
    height: 40rem;
    >p{
      color:#313131;
    }
    .qq{
      img{
        width: 5rem;
        height: 5rem;
      }
    }
    .weibo{
      img{
        width: 5rem;
        height: 5rem;
      }
    }
  }
</style>
