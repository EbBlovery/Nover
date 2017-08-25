<template>
	<div>
		<template class="boys">
		    <p class="header">男生</p>
		    <el-row @click.native="handleToOwer(item)" class="rank-list" :key="index" v-if="!item.collapse" v-for="(item,index) in list.male">
		    	<el-col :span="4"><img :src="'http://statics.zhuishushenqi.com' + item.cover"></el-col>
		    	<el-col :span="20"><p>{{item.title}}</p></el-col>
		    </el-row>
		    <el-row class="rank-list" @click.native="handleToggle()">
		    	<el-col :span="4"><img src="http://statics.zhuishushenqi.com/ranking-cover/144738093413066"></el-col>
		    	<el-col :span="20"><p>别人家的排行榜</p></el-col>
		    </el-row>
		    <el-row @click.native="handleToOther(item)" class="rank-list" :class="{isshow:show1}" :key="index" v-if="item.collapse" v-for="(item,index) in list.male">
		    	<el-col :span="4"><img style="opacity:0" src="#"></el-col>
		    	<el-col :span="20"><p>{{item.title}}</p></el-col>
		    </el-row>
		</template>
		<template class="boys">
		    <p class="header">女生</p>
		    <el-row @click="handleToOwer(item)" class="rank-list" :key="index" v-if="!item.collapse" v-for="(item,index) in list.female">
		    	<el-col :span="4"><img :src="'http://statics.zhuishushenqi.com' + item.cover"></el-col>
		    	<el-col :span="20"><p>{{item.title}}</p></el-col>
		    </el-row>
		    <el-row class="rank-list" @click.native="handleToggle2()">
		    	<el-col :span="4"><img src="http://statics.zhuishushenqi.com/ranking-cover/144738093413066"></el-col>
		    	<el-col :span="20"><p>别人家的排行榜</p></el-col>
		    </el-row>
		    <el-row @click.native="handleToOther(item)" class="rank-list" :class="{isshow:show2}" :key="index" v-if="item.collapse" v-for="(item,index) in list.female">
		    	<el-col :span="4"><img style="opacity:0" src="#"></el-col>
		    	<el-col :span="20"><p>{{item.title}}</p></el-col>
		    </el-row>
		</template>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	data(){
		return {
            list: [],
            show1:false,
            show2:false
		}
	},
	beforeRouteEnter(to,from,next){
		next(vm=>{
			if(to.path==='/ranklist'){
				vm.get()
			}
		})
	},
	methods: {
		get(){
             axios.get(`/ranking/gender`).then(res=>{
                this.list = res.data
             })
		},
		handleToggle(){
			this.show1 = !this.show1
		},
		handleToggle2(){
			this.show2 = !this.show2
		},
		handleToOwer(item){
			console.log(item)
		},
		handleToOther(item){
			const id = item._id
			this.$router.push({
				path: '/rankinfo',
                query: {
                	id
                }
			})
			this.$store.commit('TORANKING',id)
		}
	},
	computed: {
		
	}
}
</script>

<style lang="less" scoped>
.isshow{
	display:none;
}
.header{
	width:100%;
	height:3.5rem;
	background:rgb(230,230,230);
	line-height:3.5rem;
	text-align:left;
	text-indent:1rem;
	color:rgb(153,153,153);
	font-size:.8rem;
}
.rank-list{
	margin: 1.8rem 0;
	img{
		width:2.5rem;
		height:2.5rem;
	}
	p{
		text-align:left;
		height:2.5rem;
		line-height:2.5rem;
	}
}
</style>