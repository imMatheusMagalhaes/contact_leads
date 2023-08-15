import { reactive } from 'vue'
import { getUsers } from './services/userService'

export const store = reactive({
  serssionKey: "users",
  users: [],
  async populateUsers() {
    const usersStorages = sessionStorage.getItem(this.serssionKey)
    if (!usersStorages) {
      this.users = await getUsers()
      sessionStorage.setItem(this.serssionKey, JSON.stringify(this.users))
    } else {
      this.users = JSON.parse(usersStorages)
    }
  }
})