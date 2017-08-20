<template>
	<div class="app">
	    <div>
		   <mt-header class="headers" fixed title='有关的书籍'>
	    	<router-link to="/index" slot="left">
			    <mt-button icon="back">back</mt-button>
			 </router-link>
			 <mt-button icon="more" slot="right"></mt-button>
	       </mt-header>
	    </div>
		<div class="content no-find" v-if="!books.length">
			<img src="../../assets/continue.png">
			<p>未找到你搜索的书籍</p>
		</div>
		<div class="content containers" v-else>
			<el-row @click.native.prevent="onClickInfo(item)" :key="item._id" :gutter="10" v-for="item in books">
				<el-col class="images" :span="6">
					<img :src="item.cover">
				</el-col>
				<el-col class="inform" :span="18">
                    <p v-text="item.title"></p>
                    <p><span v-text="item.author"></span>|<span v-text="item.cat"></span></p>
				    <p v-text="item.shortIntro"></p>
				    <p><span>{{item.latelyFollower | parser}}人气</span> | <span>{{item.retentionRatio}}%留存</span></p>
				</el-col>
				<div class="linear"></div>
			</el-row>
		</div>
	</div>
</template>
<script>
    import { search } from '../../config/api.js';
	export default {
		data(){
			return {
                books:[]
			}
		},
		methods: {
            get(){
                search(this.$route.params.val).then(res=>{
                	this.books=res.data.books
                	
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
            }
		},
		beforeRouteEnter(to,from,next){
			next(vm=>{
				if(to.params.val){
					vm.get();
				}
			})
		},
		filters:{
			parser(val){
				return val>=10000?(val/10000).toFixed(1) + '万':val 
			}
		}
	}
</script>
<style lang="less" scoped>
.app{
	background:rgb(245,242,237);
	position:relative;
	width:100%;
	height:100%;
}
.headers{
	position:fixed;
	top:0px;
	left:0px;
	background:rgb(185,51,33);
	height:3rem;
}
.content{
	margin-top:3.2rem;
}
.no-find {
	padding:5rem 0;
	p{
		color:rgb(178,178,178);
		font-size:0.8rem;
	}
	img{
        height:8rem;
		width:8rem;
	}
}
.containers{
   .el-row{
     margin:.7rem .1rem;
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