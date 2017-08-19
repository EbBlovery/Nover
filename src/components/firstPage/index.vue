<template>
	<div>
		<div class="banner">
			<el-carousel height="150px">
		      <el-carousel-item v-for="item in images" :key="item.id">
		        <img :src="item.url">{{item.id}}
		      </el-carousel-item>
		    </el-carousel>
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
		}
	}
</script>
<style lang="less" scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
