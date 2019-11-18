<template>
  <v-container>
    <v-row>
      <v-col>
        <v-list twoline>
          <v-list-item v-for="post in postlist" :key="post._id" :to="'/view/' + post._id" >
            <!-- <v-list-item-avatar>
              <v-icon>human</v-icon>
            </v-list-item-avatar> -->
            <v-list-item-content>
              <v-list-item-title>{{ post.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ post.contents }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          
        </v-list>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-row-reverse">
        
        <v-btn to="/write">write</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      postlist: []
    };
  },
  methods: {
    onWriteClick() {
      this.$router.push('/write')
    }
  },
  created() {
    axios
      .get("http://localhost:8000/api/post")
      .then(res => {
        console.log(res.data);
        this.postlist = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
