<template>
	<div>
		<div class="header">
	    	<el-row>
	    		<el-col @click.native="back()" class="el-icon-arrow-left" :span="4">back</el-col>
	    		<el-col :span="16">{{rankDatas.title}}</el-col>
	    		<el-col :span="4" class="homePage">weqwe</el-col>
	    	</el-row>
		</div>
		<div>
			<el-row class="header-bar">
				<el-col @click.native="toWeek(rankDatas._id)" :span="8"><p>周榜</p></el-col>
				<el-col @click.native="toMonth(rankDatas.monthRank)" :span="8"><p>月榜</p></el-col>
				<el-col @click.native="toAll(rankDatas.totalRank)" :span="8"><p>总榜</p></el-col>
			</el-row>
		</div>
		<div>
		  <keep-alive>
		  	<router-view></router-view>
		  </keep-alive>
		</div>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
	data(){
		return {

		}
	},
	methods: {
        back(){
        	this.$router.go(-1)
        },
        toWeek(id){
             this.$router.push({
             	name: 'week',
             	params: {
             		id
             	}
             })
        },
        toMonth(id){
            this.$router.push({
             	name: 'month',
             	params: {
             		id
             	}
            })
        },
        toAll(id){
            this.$router.push({
             	name: 'all',
             	params: {
             		'id':id
             	}
            })
        }
	},
	computed: {
        ...mapGetters([
            'rankDatas'
        ])
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
	height:4rem;
	line-height:4rem;
	p{
        color:#5c5d58;
        font-size: .9rem;
	}
}
</style>