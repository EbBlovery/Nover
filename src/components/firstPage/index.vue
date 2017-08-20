<template>
	<div>
		<div class="banner">
			<el-carousel height="150px">
		      <el-carousel-item v-for="item in images" :key="item.id">
		        <img :src="item.url">{{item.id}}
		      </el-carousel-item>
		    </el-carousel>
		</div>
		<div class="search">
			<label>
				<input id="searchVal" type="text" name="search" placeholder="总裁" />
			</label>
			<img @click="search()" src="../../assets/search.svg">
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
	            images:[{
					url:'http://statics.zhuishushenqi.com/recommendPage/150302233217452',
					id:1
				},{
					url:'http://statics.zhuishushenqi.com/recommendPage/150302221052796',
					id:2
				},{
					url:'http://statics.zhuishushenqi.com/recommendPage/150241662777293',
					id:3
				}]
			}
		},
		methods:{
			search(){
                var val = document.querySelector('#searchVal').value.toString();
                this.$router.push({
                	name: 'search',
                	params:{
                		val
                	}
                })
			}
		}
	}
</script>
<style lang="less" scoped>
 .el-carousel__item img {
    width:100%;
    height:100%;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .search{
  	display:flex;
  	flex-wrap:nowrap;
  	height:3rem;
  	width:100%;
  	label{
  		input{
	  		width:20rem;
	  		height:2rem;
	  		border:1px solid #999;
	  	}
  	}
  	img{
  		width:2rem;
  		height:2rem;
  	}
  }
</style>
