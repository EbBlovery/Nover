<template>
  <div>
      
      <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: []
    }
  },
  created(){
    this.get()
  },
  methods: {
    get(){
       axios.get('http://novel.juhe.im/categories').then(res=>{
         this.list = res.data.data
       })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
