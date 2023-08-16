<template>
  <div class="container-header">
    <input v-model="name" @input="searchByName" type="text" placeholder="Nome do Cliente">
  </div>
</template>
<script>
import { store } from '../store'

export default {
  name: "header-bar",
  props: [],
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
        store.users = store.atualUsersPage
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
  align-items: center;
}

.container-header input[type=text] {
  text-align: center;
  width: 43%;
  height: 40%;

}

@media (max-width: 450px) {
  .container-header input[type=text] {
    width: 90%;
    height: 60%;

  }
}
</style>