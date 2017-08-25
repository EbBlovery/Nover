<template>
  <div class="mail-lover">
	<p class="mail-lover-id"><span></span>男生限免</p>
	<el-row class="mail-list">
		<el-col @click.native="handleToInfo(item)" class="mail-row" :key="item._id" v-for="item in list" :span="6">
			<img :src="item.cover">
			<p>{{item.title|filterSize}}</p>
		</el-col>
	</el-row>
	<p class="more">查看更多></p>
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
		axios.get('http://novel.juhe.im/category-info?gender=male&type=monthly&major=玄幻&minor=&start=0&limit=4').then(res=>{
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
		},
		filterSize(v){
            if(v.length>=4){
                return v.slice(0,4)
            }else{
            	return v
            }
		}
	}
}
</script>
<style lang="less" scoped>
.mail-list{
	padding-left: .9rem;
    .mail-row{

    	img{
    		width:5rem;
    		height:7rem;
    	}
    	p{
    		text-indent:.5rem;
    		overflow:hodden;
    		text-overflow:ellipsis;
    		white-space:nowrap;
    	}
    }
}


.mail-lover-id{
	margin-bottom:1rem;
	margin-top:1rem;
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