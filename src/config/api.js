var url = 'http://novel.juhe.im/search?keyword=';
var urlInfo = 'http://novel.juhe.im/book-info/';
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