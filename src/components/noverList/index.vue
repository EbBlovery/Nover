<template>
  <div>
     <div class="header">
            <el-row>
                <el-col @click.native="back()" class="el-icon-arrow-left" :span="4">back</el-col>
                <el-col :span="16">章节</el-col>
                <el-col :span="4" class="homePage">weqwe</el-col>
            </el-row>
     </div>
     <div v-if="!noverList.length">
     	loading............
     </div>
     <div v-else class="content">
     	<ul>
     	    <li>
     	    	<span>目录</span><span>共{{noverList.length+1}}章</span>
     	    </li>
     		<li @click="toContent(item,index)" v-for="(item,index) in noverList">
     			<p v-text="item.title"></p>
     		</li>
     	</ul>
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
        toContent(item,index){
            this.$router.push({
            	path: '/content/'+ index
            })
            this.$store.commit('GETCONTENT',item)
        }
	},
	computed: {
		...mapGetters([
            'noverList'
		])
	}
}
</script>

<style lang="less" scoped>
.header{
    z-index:10000;
    position:fixed;
    top:0;
    left:0;
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
    margin-top:3.2rem;
	width:100%;
	height:100%;
	background:rgb(255,255,255);
	padding: 0 1.5rem;
	ul li{
        text-align:left;
        margin: 1rem 0;
        p{
        	font-size: .8rem;
            color: rgb(153,153,153);
        }
	}
}











</style>