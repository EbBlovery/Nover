<template>
  <div>
     <div class="header">
     	<mt-header title="优质书源">
		  <mt-button @click="back()" slot="left" icon="back">返回</mt-button>
		  <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
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
        .mint-header{
	        background:rgb(185,51,33);
	        height: 3rem;
	        font-size:1.2rem;
        }
	}
	.content{
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