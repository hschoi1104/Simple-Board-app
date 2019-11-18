<template>
  <v-container>
     <v-row>
        <v-col>
          <v-text-field v-model="post.title" solo></v-text-field>
          <v-text-field v-model="post.author" solo></v-text-field>
          <v-textarea v-model="post.contents" solo></v-textarea>
        </v-col>
      </v-row>
     <v-row>
       <v-col class="d-flex flex-row-reverse">
              <v-btn @click="onDoneClick">Done</v-btn>
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
      }
    };
  },
  async mounted() {
    try {
        const res = await axios.get(`http://localhost:8000/api/post/${this.postid}`)
        this.post = res.data
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
        onDoneClick() {
               axios.put(`http://localhost:8000/api/post/${this.postid}`,{
                title: this.post.title,
                contents: this.post.contents,
                author: this.post.author,
              })
              .then((res)=>{
                this.$router.push('/view/'+this.postid);
              })
              .catch((err)=>{
                console.log(err)
              })
          }
    }
};
</script>
