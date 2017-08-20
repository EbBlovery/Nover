var url = 'http://novel.juhe.im/search?keyword=';
var urlInfo = 'http://novel.juhe.im/book-info/';
var noverUrl = 'http://novel.juhe.im/book-sources?view=summary&book='
var chapter = 'http://novel.juhe.im/book-chapters/'


import axios from 'axios'
export function search(val){
    return axios.get(`${url}${val}`).then(res=>{
    	return res.data
    })
}

export function getInfo(id){
	 console.log(id)
     return axios.get(`${urlInfo}${id}`).then(res=>{
     	return res
     })
}

export function getNoverList(id){
    return axios.get(`${noverUrl}${id}`).then(res=>{
    	return res.data.data
    })
}

export function getChapter(id){
    return axios.get(`${chapter}${id}`).then(res=>{
    	return res
    })
}