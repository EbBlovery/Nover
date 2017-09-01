<template>
	<div>
		<div class="header">
	    	<el-row>
	    		<el-col @click.native="back()" class="el-icon-arrow-left" :span="4">back</el-col>
	    		<el-col :span="16">{{classifyData.name}}</el-col>
	    		<el-col :span="4" class="homePage">weqwe</el-col>
	    	</el-row>
		</div>
		<div v-show="show" class="header-bar">
			<el-row class="header-bar-row">
				<el-col class="header-bar-col" @click.native="handleList(item)" :key="index" v-for="(item,index) of bar" :span="3">{{item.name}}</el-col>
			</el-row>
		</div>
		<div class="containers">
			<el-row @click.native.prevent="onClickInfo(item)" :key="item._id" :gutter="10" v-for="item in classifyData.books">
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
import {mapGetters} from 'vuex'
export default {
	data(){
		return {
             bar:[{
             	name:'热门',
             	type:'hot'
             },{
             	name:'新书',
             	type:'new'
             },{
             	name:'好评',
             	type:'reputation'
             },{
             	name:'完结',
             	type:'over'
             },{
             	name:'包月',
             	type:'monthly'
             }],
             show:true
		}
	},
	methods: {
		back(){
			this.$router.go(-1)
		},
		handleList(item){
			const val = {}
			val.type=item.type
			val.gender = this.$route.params.gender
			val.name = this.$route.params.name
            this.$store.commit('CLASSIFY',val)
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
	computed: {
		...mapGetters([
          'classifyData'
		])
	},
	filters:{
		parser(val){
			return val>=10000?(val/10000).toFixed(1) + '万':val 
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
.header-bar{
	width:100%;
	height:100%;
	&-row{
		height:3rem;
		line-height:3rem;
		color: #5c5d58;
        text-shadow: 0px 0px 1px #5c5d58;
        opacity:.7;
	}
}
.containers{
	padding-top:.1rem;
	background:rgb(245,242,237);
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
</style>