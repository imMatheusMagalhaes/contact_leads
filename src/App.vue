<template>
  <main>
    <Header />
    <Tags :users="store.users"/>
    <ContactLeads :users="store.users" />
  </main>
</template>

<script>
import ContactLeads from './components/ContactLeads.vue';
import Header from './components/Header.vue';
import Tags from './components/Tags.vue';
import { store } from './store'

export default {
  name: "App",
  components: { ContactLeads, Header, Tags },
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
