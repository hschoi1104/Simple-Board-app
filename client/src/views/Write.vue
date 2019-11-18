<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field v-model="title" placeholder="제목" solo></v-text-field>
          <v-text-field v-model="author" placeholder="작성자" solo></v-text-field>
          <v-textarea v-model="content" placeholder="내용" solo></v-textarea>
        </v-col>
      </v-row>
      <v-row>
          <v-col class="d-flex flex-row-reverse">
              <v-btn @click="onWriteClick">Write</v-btn>
          </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            title: "",
            content: "",
            author: "",
        }
    },
    methods: {
        onWriteClick() {
            axios.post('http://localhost:8000/api/post', {
                title: this.title,
                contents: this.content,
                author: this.author,
            })
            .then((res) => {
                this.$router.push('/')
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
};
</script>
