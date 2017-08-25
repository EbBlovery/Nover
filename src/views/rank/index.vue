<template>
	<div>
		<template class="boys">
		    <p>男生</p>
		    <el-row :key="index" v-if="!item.collapse" v-for="(item,index) in list.male">
		    	<el-col :span="4"><img :src="'http://statics.zhuishushenqi.com' + item.cover"></el-col>
		    	<el-col :span="20">{{item.title}}</el-col>
		    </el-row>
		</template>
		<!-- <div>
			{{maleList}}
		</div> -->
		<!-- <template class="girls">
			<p>女生</p>
			<el-row v-for="item in listFemale">
		    	<el-col :span="4"><img :src="'http://statics.zhuishushenqi.com' + item.cover"></el-col>
		    	<el-col :span="20">{{item.title}}</el-col>
		    </el-row>
		</template> -->
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
		}
	},
	computed: {
		
	}
}
</script>