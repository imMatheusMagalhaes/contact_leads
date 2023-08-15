<template>
  <main>
    <Header />
    <ContactLeads :users="store.users" />
  </main>
</template>

<script>
import ContactLeads from './components/ContactLeads.vue';
import Header from './components/Header.vue';
import { store } from './store'

export default {
  name: "App",
  components: { ContactLeads, Header },
  data() {
    return { store };
  },
  mounted() {
    store.populateUsers()
  },
  methods: {},
}
</script>
<style></style>
