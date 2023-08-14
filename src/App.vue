<template>
  <main class="app">
    <ContactLeads :users="store.users" />
  </main>
</template>

<script>
import ContactLeads from './components/ContactLeads.vue';
import { store } from './store'

export default {
  name: "App",
  components: { ContactLeads },
  data() {
    return { store };
  },
  mounted() {
    store.populateUsers()
  },
  methods: {},
}
</script>
