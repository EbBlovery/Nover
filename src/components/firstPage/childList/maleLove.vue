<template>
	<div class="mail-lover">
		<p class="mail-lover-id"><span></span>男生热门</p>
		<el-row @click.native="handleToInfo(item)" class="mail-row" :gutter="30" :key="item._id" v-for="item in maleList">
			<el-col :span="6">
				<img :src="item.cover">
			</el-col>
			<el-col class="mail-row-col" :span="18">
				<p>{{item.title}}</p>
				<p>{{item.shortIntro}}</p>
				<p><span>{{item.minorCate}}</span> | <span>{{item.latelyFollower | fontFilter}}</span>人气</p>
			</el-col>
		</el-row>
		<p class="more">
			查看更多>
		</p>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return {
             maleList: []
		}
	},
	methods: {
         fetch(){
             axios.get('http://novel.juhe.im/category-info?gender=male&type=hot&major=玄幻&minor=&start=0&limit=4').then(res=>{
                	    this.maleList = res.data.data.books
                }).catch(err=>{
                	console.error(err)
                })
         },
         handleToInfo(val){
			const id = val._id
            this.$router.push({
            	path: '/noverinfo',
            	query:{
                    id
            	}
            })
            this.$store.commit('GETINFO',id)
		 }
	},
	created(){
		this.fetch()
	},
	filters: {
		fontFilter(v){
            return v>=10000?(v/10000).toFixed(1)+ '万':v
		}
	}
}
</script>

<style lang="less" scoped>
.mail-lover{
	text-align:left;
	padding: 1rem 0;
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
	margin-bottom:1rem;
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
.more{
	color:red;
	text-align:center;
	font-size:.8rem;
	margin:1rem 0;
}
</style>