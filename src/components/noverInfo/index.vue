<template>
	<div>
	     <p @click="back()">back</p>
		书籍详情
	</div>
</template>

<script>
import { getInfo } from '../../config/api.js';
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
	created(){
		
	},
	computed: {
		noverdata(){
			getInfo(this.$route.query.id).then(res=>{
            	console.log(res)
            })
		}
	}
}
</script>