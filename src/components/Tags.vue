<template>
  <div class="container-tags">
    <div v-for="chip in chips">
      <button :id="chip" @click="searchByTags" :class="selectedChips[chip] ? 'chip-select' : 'chip-no-select'">
        {{ chip }}
      </button>
    </div>
  </div>
</template>
<script>
import { store } from '../store'

export default {
  name: "tags",
  props: ["users"],
  components: {},
  data() {
    return {
      chips: [],
      selectedChips: {},
      cloneUsers: []
    }
  },
  watch: {
    users() {
      if (this.chips.length === 0)
        this.getChips()
    }
  },
  methods: {
    getChips() {
      this.users.map(user => {
        const userTags = user.company.bs.split(" ")
        userTags.map(tag => this.chips.push(tag))
      })
      this.chips = this.chips.filter((chip, i) => this.chips.indexOf(chip) === i);
      this.chips.map(chip => {
        this.selectedChips[chip] = false
      })
    },
    searchByTags(value) {
      const tag = value.target.innerText
      this.selectChip(tag)
      if (this.cloneUsers.length === 0)
        this.getUsersSessionStorage()

      const tagsToCompare = this.chips.filter(chip => this.selectedChips[chip])
      const result = this.cloneUsers.filter(user => tagsToCompare.some(tag => user.company.bs.includes(tag)))

      if (tagsToCompare.length === 0)
        store.users = store.atualUsersPage
      else
        store.users = result

    },
    selectChip(tag) {
      this.selectedChips[tag] = !this.selectedChips[tag]
    },
    getUsersSessionStorage() {
      const usersStorages = sessionStorage.getItem(store.serssionKey)
      this.cloneUsers = JSON.parse(usersStorages)
    }
  }
}
</script>
<style>
.chip-no-select {
  background-color: white;
  color: green;
  font-size: small;
  margin: 1px;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid green;
}

.chip-select {
  background-color: green;
  color: white;
  font-size: small;
  margin: 1px;
  padding: 5px;
  border-radius: 10px;
}

.container-tags div button {
  cursor: pointer;
  transition: .5s;

}

.container-tags div button:hover {
  color: #e2feeb;
  background-color: green;
}

.container-tags {
  margin-top: 75px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 99%;
}

@media (min-width: 450px) {
  .container-tags {
    margin-top: 75px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
}
</style>