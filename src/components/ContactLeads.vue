<template>
  <div class="contact-leads">
    <div class="container-contact-leads" v-for="user in users">
      <ContactLeadItem :user="user" />
    </div>
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
<style>
.contact-leads {
  .container-contact-leads {
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>