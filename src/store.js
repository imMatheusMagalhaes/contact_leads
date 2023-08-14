import { reactive } from 'vue'
import { getUsers } from './services/userService'

export const store = reactive({
  users: [],
  async populateUsers() {
    if (this.users.length === 0) { this.users = await getUsers() }
  }
})