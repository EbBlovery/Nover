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
			<label for="search">
				<input id="searchVal" type="text" name="search" placeholder="总裁" />
			</label>
			<img @click="search()" src="../../assets/search.svg">
		</div>
		<div>
			<female-love></female-love>
		</div>
		<p class="linear"></p>
		<div>
			<male-love></male-love>
		</div>
		<p class="linear"></p>
		<div>
			<press-nover></press-nover>
		</div>
		<p class="linear"></p>
		<div>
			<male-free-limit></male-free-limit>
		</div>
		<p class="linear"></p>
		<div>
			<female-free-limit></female-free-limit>
		</div>
	</div>
</template>
<script>
    import axios from 'axios';
    import FemaleLove from './childList/femaleLove.vue';
    import MaleLove from './childList/maleLove.vue';
    import PressNover from './childList/pressNover.vue';
    import MaleFreeLimit from './childList/maleFreelimit.vue';
    import FemaleFreeLimit from './childList/femaleFreelimit.vue';
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
				}],
				list: [],
				maleList: []
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
		},
		components: {
			FemaleLove,
			MaleLove,
			PressNover,
			MaleFreeLimit,
			FemaleFreeLimit
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
  	margin: 1rem;
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
  .mail-lover{
  	 text-align:left;
  	 
     .mail-row{
     	padding: 0 1rem;
     	img{
     		width:5rem;
     		height:7rem;
     	}
     	&-col{
     		p{
     			margin:.3rem 0;
     		}
     		padding:1rem 0;
     		p:nth-child(1){
     			color:#000;
     			font-size:.9rem;
     		}
     		p:nth-child(2){
     			color:#5c5d58;
     			font-size:.85rem;
                overflow:hidden;
                height:2.8rem;
                text-overflow:ellipsis;
                line-height:1.4rem;
                hite-space:nowrap;
     		}
     		p:nth-child(3){
                font-size:.9rem;
                color: #5c5d58;
                span:nth-child(2){
                	color:rgb(185,51,33);
                }
     		}
     	}
     }
  }
  .mail-lover-id{
  	 	color:#000;
  	 	font-size:1.1rem;
  	 	font-weight:bold;
  	 	text-indent: 1rem;
  	 	position:relative;
  	 	span{
  	 		position:absolute;
  	 		top:0.3rem;
  	 		left:0rem;
  	 		width:0.2rem;
  	 		height:1rem;
  	 		display:inline-block;
  	 		background-color:rgb(185,51,33);
  	 	}
  	 }





  .linear{
	    width:100%;
	    border:.3rem solid #999;
	    opacity:.2;
	    border-radius:.1rem;
  }
</style>
