<template>
  <div class="mail-lover">
	<p class="mail-lover-id"><span></span>女生最爱</p>
	<el-row @click.native="handleToInfo(item)" class="mail-row" :gutter="30" :key="item._id" v-for="item in list">
		<el-col :span="6">
			<img :src="item.cover">
		</el-col>
		<el-col class="mail-row-col" :span="18">
			<p>{{item.title}}</p>
			<p>{{item.shortIntro}}</p>
			<p><span>{{item.minorCate}}</span> | <span>{{item.latelyFollower | fontFilter}}</span>人气</p>
		</el-col>
	</el-row>
  </div>	
</template>


<script>
import axios from 'axios'
export default {
	data(){
		return {
			list: []
		}
	},
	created(){
		this.get()
	},
	methods: {
		get(){
		axios.get('http://novel.juhe.im/category-info?gender=female&type=over&major=现代言情&minor=&start=0&limit=3').then(res=>{
            	    this.list = res.data.data.books
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
</style>