import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

import { getInfo, getNoverList, getChapter } from '../config/api.js';

export default new Vuex.Store({
	state: {
        infodata: [],
        noverList: []
	},
	getters:{
		infodata: state=> state.infodata,
		noverList: state=> state.noverList
	},
	mutations: {
        GETINFO(state,id){
            getInfo(id).then(res=>{
            	state.infodata = res.data.data
            }).catch(err=>{
            	console.error(err.message)
            })
        },
        GETLIST(state,val){
            getNoverList(val).then(res=>{
            	return res
            }).then(res=>{
            	console.log(res)
            	return getChapter(res[1]._id)
            }).then(res=>{
            	console.log(res.data.data.chapters)
                state.noverList = res.data.data.chapters
            }).catch(err=>{
            	console.error(err.message)
            })
        }
	},
	actions: {

	}
})

