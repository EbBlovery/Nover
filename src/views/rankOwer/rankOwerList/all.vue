<template>
	<div>
		<div class="containers">
			<el-row @click.native.prevent="onClickInfo(item)" :key="item._id" :gutter="10" v-for="item in list.books">
				<el-col class="images" :span="6">
					<img :src="'http://statics.zhuishushenqi.com' + item.cover">
				</el-col>
				<el-col class="inform" :span="18">
            <p v-text="item.title"></p>
            <p><span v-text="item.author"></span>|<span v-text="item.cat"></span></p>
				    <p v-text="item.shortIntro"></p>
				    <p><span>{{item.latelyFollower | parser}}人气</span> | <span>{{item.retentionRatio}}%留存</span></p>
				</el-col>
				<p class="linear"></p>
			</el-row>
		</div>
	</div>
</template>
<script>
import {getRanking} from '../../../config/api.js'
export default {
	data(){
		return {
             list: []
		}
	},
	beforeRouteEnter(to,from,next){
		next(vm=>{
            if(to.path === '/rankower/all'){
            	vm.get()
            }
		})
	},
	methods: {
		get(){
            getRanking(this.$route.params.id).then(res=>{
            	this.list = res.data.ranking
            })
		},
		onClickInfo(val){
        	var id = val._id;
        	this.$router.push({
        		path: '/noverInfo',
        		query:{
                    id
        		}
        	})
        	this.$store.commit('GETINFO',id)
        }
	},
	filters:{
		parser(val){
			return val>=10000?(val/10000).toFixed(1) + '万':val 
		}
	}
}
</script>

<style lang="less" scoped>
.containers{
   .el-row{
     margin:1rem .1rem;
   }
   .images{
   	 img{
   	 	width:4rem;
   	    height:6rem;
   	 }
   }
   .inform{
   	 p:nth-child(1){
   	 	font-size:16px;
   	 	font-weight:bold;
   	 	text-align:left;
   	 }
   	 p:nth-child(2){
   	 	font-size:9px;
   	 	text-align:left;
   	 	margin:0.3rem 0;
   	 	span{
   	 		color:rgb(153,153,153);
   	 	}
   	 }
   	 p:nth-child(3){
   	 	text-align:left;
   	 	font-size:9px;
   	 	color:rgb(153,153,153);
   	 	overflow:hidden;
   	 	text-overflow:ellipsis;
   	 	white-space:nowrap;
   	 }
   	 p:nth-child(4){
   	 	text-align:left;
   	 	margin-top:0.3rem;
   	 	span{
   	 		color:rgb(185,51,33);
   	 		font-size:9px;
   	 	}
   	 }
   }
}
.linear{
    height:1px;
    background:#000;
    -webkit-transform:scaleY(0.5);
    -webkit-transform-origin:0 0;
    transform:scaleY(0.5);
    transform-origin:0 0;
    overflow:hidden;
}
</style>