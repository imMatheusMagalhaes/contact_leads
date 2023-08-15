<template>
  <div class="container-header">
    <input v-model="name" @input="searchByName" type="text" placeholder="nome do cliente">
    <button @click="searchByName">
      <i class="fa fa-search icon"></i>
    </button>
  </div>
</template>
<script>
import { store } from '../store'

export default {
  name: "header",
  props: {},
  components: {},
  data() {
    return {
      name: "",
      cloneUsers: []
    }
  },
  mounted() {

  },
  methods: {
    searchByName() {
      if (this.cloneUsers.length === 0)
        this.getUsersSessionStorage()

      const searchResult = this.cloneUsers.filter(user => {
        return user.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase())
      })
      
      if (this.name.length === 0)
        store.users = this.cloneUsers
      else
        store.users = searchResult
    },
    getUsersSessionStorage() {
      const usersStorages = sessionStorage.getItem(store.serssionKey)
      this.cloneUsers = JSON.parse(usersStorages)
    }
  }
}
</script>
<style >
.container-header {
  overflow: hidden;
  background-color: green;
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.container-header input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
  width: 350px;
  margin-left: 17px;
  height: 30px;

}

.container-header button {
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: whitesmoke;
  font-size: 17px;
  border: none;
  cursor: pointer;
  height: 42px;
}

.container-header button:hover {
  background: #ccc;
}

.icon {
  color: black;
}
</style>