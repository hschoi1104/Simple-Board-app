<template>
  <v-row>
    <v-col cols="12" md="10" class="fill-screen">
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
    </v-col>
    <v-col>
      <v-btn
        class="ma-3"
        @click="addDialog.show = true"
        outlined
        color="primary"
        :small="$vuetify.breakpoint.smAndDown"
      >
        <v-icon v-if="$vuetify.breakpoint.xsOnly">
          mdi-plus
        </v-icon>
        <span v-else>
          추가하기
        </span>
      </v-btn>
      <v-dialog v-model="addDialog.show" persistent max-width="300px">
        <v-card>
          <v-card-title>
            <span class="headline">상벌점 항목 추가</span>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="addDialog.title"
              class="ma-3"
              label="항목 이름"
              hide-details
              outlined
            ></v-text-field>
            <v-text-field
              v-model="addDialog.content"
              class="ma-3"
              label="점수"
              hide-details
              outlined
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            해당 항목을 추가 하시겠습니까?
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="addPenaltyProperty()" text color="success"
              >추가</v-btn
            >
            <v-btn @click="addDialog.show = false" text>취소</v-btn>
          </v-card-actions>
        </v-card>
        <v-card> </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: "",
      addDialog: {
        title: "",
        content: "",
        show: false
      }
    };
  },
  async created() {
    var posts = await axios.get("/CURD/read");
    this.posts = posts.data;
  },
  method: {
    async addCURD() {
      try {
        await axios.post("/CURD/write", {
          title: this.addDialog.title,
          content: this.addDialog.content
        });
        this.addDialog.show = false;
      } catch (err) {
        console.log(err);
      }
    },
    async addPenaltyProperty() {
      try {
        await axios.post("CURD/write", {
          title: this.addDialog.title,
          content: this.addDialog.content
        });
        this.openSnackbar("추가되었습니다", "success");
      } catch (err) {
        this.openSnackbar("추가하지 못했습니다", "error");
      }
      this.addDialog.show = false;
    }
  }
};
</script>
