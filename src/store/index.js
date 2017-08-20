import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

import { getInfo, getNoverList, getChapter, getContent } from '../config/api.js';

export default new Vuex.Store({
	state: {
        infodata: [],
        noverList: [],
        contentData: []
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
                state.noverList = res.data.data.chapters
            }).catch(err=>{
            	console.error(err.message)
            })
        },
        GETCONTENT(state,item){
            getContent(item.link).then(res=>{
            	console.log(res);
            })
        }
	},
	actions: {

	}
})

