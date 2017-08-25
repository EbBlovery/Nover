var url = 'http://novel.juhe.im/search?keyword=';
var urlInfo = 'http://novel.juhe.im/book-info/';
var noverUrl = 'http://novel.juhe.im/book-sources?view=summary&book='
var chapter = 'http://novel.juhe.im/book-chapters/'
var contentUrl = 'http://chapter2.zhuishushenqi.com/chapter/'
const baseUrl = '/book/by-categories'


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
export function getContent(urls){
     return axios.get(`/chapter/${urls}?k=2124b73d7e2e1945&t=1468223717`).then(res=>{
     	return res
     })
}

export function getClassify(gender='',type='hot',major='',minor=''){
    return axios.get(`${baseUrl}?gender=${gender}&type=${type}&major=${major}&minor=${minor}&start=0&limit=20`).then(res=>{
        return res
    })
}

export function getRanking(id){
    return axios.get(`/ranking/${id}`).then(res=>{
        return res
    })
}
