import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

import { getInfo, getNoverList, getChapter, getContent,getClassify,getRanking } from '../config/api.js';

export default new Vuex.Store({
	state: {
        infodata: [],
        noverList: [],
        contentData: [],
        classifyData: [],
        rankData: []
	},
	getters:{
		infodata: state=> state.infodata,
		noverList: state=> state.noverList,
		contentData: state=> state.contentData,
        classifyData: state=> state.classifyData,
        rankData: state=> state.rankData
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
            	return getChapter(res[1]._id)
            }).then(res=>{
                state.noverList = res.data.data.chapters
            }).catch(err=>{
            	console.error(err.message)
            })
        },
        GETCONTENT(state,item){
            getContent(item.link).then(res=>{
            	state.contentData = res.data
            })
        },
        CLASSIFY(state,item){
            getClassify(item.gender,item.type,item.name).then(res=>{
                state.classifyData = res.data
                state.classifyData.name = item.name
            })
        },
        TORANKING(state,id){
            getRanking(id).then(res=>{
                state.rankData = res.data.ranking
            })
        }
	},
	actions: {
        STARTNOVER({commit},val){
            getNoverList(val).then(res=>{
            	return res
            }).then(res=>{
            	return getChapter(res[1]._id)
            }).then(res=>{
            	var item = res.data.data.chapters[0];
                commit('GETCONTENT',item)
            }).catch(err=>{
            	console.error(err.message)
            })
        }
	}
})

