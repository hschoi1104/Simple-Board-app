<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card v-if="!iserror" :loading="loading_swc">
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-subtitle>{{ post.author }}</v-card-subtitle>
          <v-card-text class="pa-5">{{ post.contents }}</v-card-text>
        </v-card>
        <v-card v-else>
            <v-card-text>
                게시글이 없습니다.
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
     <v-row>
       <v-col class="d-flex flex-md-center">
              <v-btn :to="'/update/' + post._id">Update</v-btn>
          </v-col>
          <v-col class="d-flex flex-md-center">
              <v-btn :to="'/'">Home</v-btn>
          </v-col>
          <v-col class="d-flex flex-center">
              <v-btn @click="onDeleteClick">Delete</v-btn>
          </v-col>
      </v-row>
  </v-container>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      post: {
        title: "",
        contents: "",
        author: ""
      },
      iserror: false,
      loading_swc:true
    };
  },
  async mounted() {
    try {
        const res = await axios.get(`http://localhost:8000/api/post/${this.postid}`)
        this.post = res.data
        this.loading_swc = false
    }
    catch (err) {
        console.log(err)
    }

  },
  computed: {
    postid() {
      return this.$route.params.post_id;
    }
  },
  methods: {
        onDeleteClick() {
          try{
              axios.delete(`http://localhost:8000/api/post/${this.postid}`)
               this.$router.push('/')
          }
          catch{
              console.log(err)
          }
        },
        onUpdateClick() {
           this.$router.push('/update')
        }
    }
};
</script>
