<template>
  <div>
    <md-table>
      <md-table-row>
        <md-table-head>TITLE</md-table-head>
        <md-table-head>AUTHOR</md-table-head>
        <md-table-head>CONTENT</md-table-head>
        <md-table-head>POSTSED_DATE</md-table-head>
      </md-table-row>
      <md-table-row v-for="p in paginatedData" :key="p.title">
        <md-table-cell>{{ p.title }}</md-table-cell>
        <md-table-cell>{{ p.author }}</md-table-cell>
        <md-table-cell>{{ p.content }}</md-table-cell>
        <md-table-cell>{{ p.posted_date }}</md-table-cell>
      </md-table-row>
    </md-table>
    <div class="btn-cover">
      <md-button :disabled="pageNum === 0" @click="prevPage" class="md-raised">
        이전
      </md-button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
      <md-button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="md-raised">
        다음
      </md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'posts-list',
  data () {
    return {
      pageNum: 0
    }
  },
  props: {
    listArray: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      required: false,
      default: 10
    }
  },
  methods: {
    nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
    }
  },
  computed: {
    pageCount () {
      let listLeng = this.listArray.length,
          listSize = this.pageSize,
          page = Math.floor(listLeng / listSize);
      if (listLeng % listSize > 0) page += 1;
      
      /*
      아니면 page = Math.floor((listLeng - 1) / listSize) + 1;
      이런식으로 if 문 없이 고칠 수도 있다!
      */
      return page;
    },
    paginatedData () {
      const start = this.pageNum * this.pageSize,
            end = start + this.pageSize;
      return this.listArray.slice(start, end);
    }
  }
}
</script>

