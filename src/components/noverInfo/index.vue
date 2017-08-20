<template>
	<div>
     <div class="header">
    	<el-row>
    		<el-col @click.native="back()" class="el-icon-arrow-left" :span="4">back</el-col>
    		<el-col :span="16">有关的书籍</el-col>
    		<el-col :span="4" class="homePage">weqwe</el-col>
    	</el-row>
	 </div>
     <div class="content">
     	 <el-row :gutter='0'>
     	 	<el-col class="content-left" :span='6'>
     	 		<img :src="infodata.cover">
     	 	</el-col>
     	 	<el-col class="content-right" :span='18'>
     	 		<p v-text="infodata.title"></p>
     	 		<p>
     	 			<span v-text="infodata.author"></span> | 
     	 			<span v-text="infodata.cat"></span> | 
     	 			<span>{{infodata.wordCount|wordsize}}字</span>
     	 		</p>
     	 		<p>{{infodata.updated | days}}天前更新</p>
     	 	</el-col>
     	 </el-row>
     	 <el-row>
     	 	<el-col :span='12'>
     	 		<el-button size=large :plain="true" type="danger">加入书架</el-button>
     	 	</el-col>
     	 	<el-col :span='12'>
     	 		<el-button @click="handleToStart(infodata._id)" size=large type="danger">开始阅读</el-button>
     	 	</el-col>
     	 </el-row>
     	 <p class="linear"></p>
     	 <el-row>
     	 	<el-col :span="8">
     	 		<p class="personInfo">追人气</p>
     	 		<p>{{infodata.latelyFollower}}</p>
     	 	</el-col>
     	 	<el-col :span="8">
     	 		<p class="personInfo">读者留存率</p>
     	 		<p>{{infodata.retentionRatio}}%</p>
     	 	</el-col>
     	 	<el-col :span="8">
     	 		<p class="personInfo">日更字数/天</p>
     	 		<p>{{infodata.serializeWordCount}}</p>
     	 	</el-col>
     	 </el-row>
     	 <p class="linear"></p>
     	 <el-row :gutter="30">
     	 	<el-col>
     	 		<p class="info-text" v-text="infodata.longIntro"></p>
     	 	</el-col>
     	 </el-row>
     	 <p class="linear"></p>
     	 <el-row @click.native="handleToList(infodata._id)">
     	 	<el-col :span="10">目录</el-col>
     	 	<el-col class="mulu-list" :span="14">[{{infodata.updated | days}}天前更新]{{infodata.lastChapter}}</el-col>
     	 </el-row>
     	 <p class="linear"></p>
     	 <el-row>
     	 	<el-col>
     	 	</el-col>
     	 </el-row>
     </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data(){
		return {

		}
	},
	methods: {
        back(){
        	this.$router.go(-1)
        },
        handleToList(val){
        	this.$router.push({
        		path:'/noverlist',
        		query: {
        			val
        		}
        	})
        	this.$store.commit('GETLIST',val)
        },
        handleToStart(val){
        	this.$router.push({
        		path: '/content/1',
        	})
        	this.$store.dispatch('STARTNOVER',val)
        }
	},
	created(){
		
	},
	computed: {
		...mapGetters([
           'infodata'
		])
	},
	filters: {
		wordsize(v){
			var val = v;
            return val>=10000?(val/10000).toFixed(0) + '万':val;
		},
		days(val){
            var day = new Date(val);
            var newdays = new Date();
            var time = (newdays.valueOf()-day.valueOf())/(1000*24*60*60).toFixed(0);
            return time>=1&&time<=7?1:7;
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
	.content{
		margin:1rem 0;
		.content-left{
			img{
				width:4rem;
				height:6rem;
			}
		}
		.content-right{
			p{
				text-align:left;
				margin:.2rem 0;
			}
			p:nth-child(1){
				font-size:1.1rem;
			}
			p:nth-child(2){
				font-size:.8rem;
				span{
					color: rgb(153,153,153);
				}
			}
		}
		.personInfo{
			color:rgb(153,153,153);
			font-size:.8rem;
		}
		.info-text{
			color:#000;
			font-size:.8rem;
			text-align:left;
			height:4rem;
			line-height:1.4rem;
			overflow:hidden;
			text-overflow:ellipsis;
   	 	    white-space:normal;
   	 	    margin:0 1rem;
		}
		.mulu-list{
			text-align:left;
	   	 	font-size:9px;
	   	 	color:rgb(153,153,153);
	   	 	overflow:hidden;
	   	 	text-overflow:ellipsis;
	   	 	white-space:nowrap;
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
        opacity:.3;
        margin:1rem 0;
    }
</style>