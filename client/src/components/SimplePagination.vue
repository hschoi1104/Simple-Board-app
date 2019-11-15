<template>
  <div>
    <h1>TABLE PAGINATION</h1>
    <posts-list :list-array="pageArray" />
  </div>
</template>

<script>
import axios from 'axios'
import PostsList from './PostsList'
import Vue from 'vue'


export default {
  name: 'simple-pagination',
  components: {
    PostsList
  },
  data () {
    return {
      pageArray: []
    }
  },
  created () {
    axios.get('http://localhost:8080/api/posts')
    .then(response => {
      console.log(response);
      console.log(response.data);
      this.pageArray = response.data;
    })
    .catch(err => {
      console.log(err);
    });
  }
}
</script>

<style>
h1 {
  color: #454545;
  text-align: center;
}
</style>