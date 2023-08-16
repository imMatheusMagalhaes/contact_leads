<template>
  <main class="main">
    <Header />
    <Tags :users="store.users" />
    <ContactLeads :users="store.users" />
    <Pagination :users="store.users" />
  </main>
</template>

<script>
import ContactLeads from './components/ContactLeads.vue';
import Header from './components/Header.vue';
import Pagination from './components/Pagination.vue';
import Tags from './components/Tags.vue';
import { store } from './store'

export default {
  name: "App",
  components: { ContactLeads, Header, Tags, Pagination },
  data() {
    return { store };
  },
  mounted() {
    store.populateUsers()
  },
  methods: {},
}
</script>
<style>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
