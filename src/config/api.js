var url = 'http://novel.juhe.im/search?keyword=';

import axios from 'axios'
export function search(val){
    return axios.get(`${url}${val}`).then(res=>{
    	return res.data
    })
}