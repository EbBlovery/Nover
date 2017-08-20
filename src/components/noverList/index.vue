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
     		<li v-for="item in noverList">
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
        }
	}
</style>