<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Title</th>
          <th class="text-left">Contents</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in posts" :key="item.name">
          <td>{{ item.title }}</td>
          <td>{{ item.content }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import axios from'axios';
  export default {
    data: () => ({
      posts:''
    }),
    async created(){
        var posts = await axios.get('/CURD/read');
        this.posts = posts.data
    }
  }
</script>