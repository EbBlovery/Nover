<template>
	<div>
	    <div class="header">
	    	<el-row>
	    		<el-col @click.native="back()" class="el-icon-arrow-left" :span="4">back</el-col>
	    		<el-col :span="16" v-text="contentData.chapter.title?contentData.chapter.title:'章节'"></el-col>
	    		<el-col :span="4" class="homePage">weqwe</el-col>
	    	</el-row>
	    </div>
	    <div v-if="!contentData.chapter.body">
	    	loading ..........
	    </div>
	    <div v-else class="content">
	    	<p v-html="paragraph"></p>
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
	computed: {
        ...mapGetters([
            'contentData'
        ]),
        paragraph(){
             return this.contentData.chapter.body.replace(/\s+/g,'<span style="display: block; height: 5px;"></span>')
        }
	},
	methods: {
		back(){
			this.$router.go(-1)
		}
	}
}
</script>

<style lang="less" scoped>
	.header{
		width:100%;
		height: 3rem;
		position:fixed;
		top:0;
		left:0;
		background:rgb(185,51,33);
		.el-col{
			height:inhert;
			color:#fff;
			line-height: 3rem;
			font-size: 1.1rem;
		}
	}
	.content{
		width:100%;
		height:100%;
		margin-top:3rem;
		min-height: 50rem;
		background: rgb(238,230,211);
		p{
			padding: 1rem 1rem;
			text-align:left;
			color:#5c5d58;
			font-size: 1.3rem;
		}
	}
</style>