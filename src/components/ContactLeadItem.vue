<template >
  <div class="card">
    <div class="img-avatar">
      <minidenticon-svg :key="user.id" :username="user.name"></minidenticon-svg>
    </div>

    <div class="card-text">
      <div class="portada">

      </div>
      <div class="title-total">
        <div class="title">{{user.company.name}}</div>
        <h2>{{ user.name }}</h2>

        <div class="desc">Morgan has collected ants since they were six years old and now has many dozen ants but none in
          their pants.</div>
        <div class="actions">
          <button><i class="far fa-heart"></i></button>
          <button @click="openEmail(user.email)"><i class="far fa-envelope"></i></button>
          <button><i class="fas fa-user-friends"></i></button>
        </div>
      </div>

    </div>



  </div>
</template>
<script>
import { minidenticonSvg } from 'https://cdn.jsdelivr.net/npm/minidenticons@4.2.0/minidenticons.min.js'
export default {
  name: "ContactLeadItem",
  components: { minidenticonSvg },
  props: ["user"],
  data() {
    return {}
  },
  mounted() { },
  methods: {
    openEmail(url) {
      return window.location.href =  "mailto: " + url
    }
  },
}
</script>
<style></style>