<template>
	<div>
		list
	</div>
</template>
<script>
import axios from 'axios'
export default {
	data(){
		return {

		}
	},
	methods: {
        get(){
            axios.get(`/cats/lv2/statistics`).then(res=>{
            	console.log(res)
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