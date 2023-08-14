<template>
  <div v-for="user in users">
    <ContactLeadItem :user="user" />
  </div>
</template>
<script>
import ContactLeadItem from './ContactLeadItem.vue';

export default {
  name: "ContactLeads",
  components: { ContactLeadItem },
  props: ["users"],
  data() {
    return {}
  },
  mounted() { },
  methods: {},
}
</script>
<style></style>