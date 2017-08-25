<template>
	<div>
		<template class="boys">
		    <p class="header-bar">男生</p>
			<el-row class="header-info">
				<el-col :span="8" class="header-col" :key='index' v-for="(item,index) in list.male">
					<p>{{item.name}}</p>
					<span>{{item.bookCount}}</span>
				</el-col>
			</el-row>
		</template>
		<template class="girls">
		    <p class="header-bar">女生</p>
		    <el-row class="header-info">
		    	<el-col :span="8"  class="header-col" :key='index' v-for="(item,index) in list.female">
					<p>{{item.name}}</p>
					<span>{{item.bookCount}}</span>
				</el-col>
		    </el-row>
		</template>
		<template class="press">
		    <p class="header-bar">出版</p>
		    <el-row class="header-info">
		    	<el-col class="header-col" :span="8" :key='index' v-for="(item,index) in list.press">
					<p>{{item.name}}</p>
					<span>{{item.bookCount}}</span>
				</el-col>
		    </el-row>
			
		</template>
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
	methods: {
        get(){
            axios.get(`/cats/lv2/statistics`).then(res=>{
            	this.list = res.data
            })
        }
	},
	beforeRouteEnter(to,from,next){
         next((vm)=>{
         	if(to.path==='/list'){
         		vm.get()
         	}
         })
	}
}
</script>

<style lang="less" scoped>
.header-bar{
	color:#5c5d58;
	text-align:left;
	margin: 1rem;
	font-size:.9rem;
}
.header-info{
	.header-col{
		margin:.7rem 0;
		p{
	    	color:#000;
	    	font-size:1rem;
	    	font-weight:bold;
	    	margin:.2rem 0;
	    }
	    span{
	    	color:#5c5d58;
	    	font-size:.8rem;
	    	opacity:.5;
	    }
	}
}
</style>