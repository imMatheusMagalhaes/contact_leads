<template >
  <div class="pagination">
    <button class="pagination-button" @click="previousPage">&laquo;</button>
    <button v-for="(_, index) in pagination"
      :class="selectedPage === index ? 'pagination-button-selected' : 'pagination-button'" @click="selectPage(index)">{{
        index + 1 }}</button>
    <button class="pagination-button" @click="nextPage">&raquo;</button>
  </div>
</template>
<script>
import { store } from '../store'
export default {
  name: "pagination",
  props: ["users"],
  components: {},
  data() {
    return {
      pagination: [],
      selectedPage: 0
    }
  },
  watch: {
    users() {
      if (this.pagination.length === 0)
        this.paginate(this.users, 3)

      if (this.users.length === 9)
        this.selectedPage = 0
    }
  },
  methods: {
    paginate(arr, size) {
      const pages = arr.reduce((acc, val, i) => {
        const idx = Math.floor(i / size)
        const page = acc[idx] || (acc[idx] = [])
        page.push(val)
        return acc
      }, [])
      store.users = pages[0]
      store.atualUsersPage = pages[0]
      this.pagination = pages
    },
    selectPage(index) {
      store.users = this.pagination[index]
      this.selectedPage = index
    },
    nextPage() {
      if (this.users.length > this.selectedPage) {
        const newIndex = this.selectedPage + 1
        this.selectedPage = newIndex
        this.selectPage(newIndex)
      }
    },
    previousPage() {
      if (this.selectedPage > 0) {
        const newIndex = this.selectedPage - 1
        this.selectedPage = newIndex
        this.selectPage(newIndex)
      }
    }
  }
}
</script>
<style >
.pagination {
  display: inline-block;
  margin-bottom: 15px;
  margin-top: 30px;
}

.pagination-button {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: .5s;
  background-color: white;
  border: none;

  &:hover {
    background-color: #4CAF50;
    color: white;
  }
}

.pagination-button-selected {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  background-color: #4CAF50;
  color: white;
}
</style>