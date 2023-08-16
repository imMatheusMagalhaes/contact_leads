<template >
  <div class="card">
    <div class="card-text">
      <div class="portada">
        <div class="img-avatar">
          <minidenticon-svg :key="user.id" :username="user.username"></minidenticon-svg>
        </div>
      </div>
      <div class="title-total">
        <div class="title">{{ user.company.name }}</div>
        <h2>{{ user.name }}</h2>
        <div class="user-data">{{ user.phone }}</div>
        <div class="user-data">{{ user.email }}</div>
        <a :href="'https://' + user.website" target="_blank" class="user-data site">{{ user.website }}</a>
        <div class="actions">
          <button @click="openEmail(user.email)"><i class="fa-solid fa-envelope"></i></button>
          <button @click="openGeo(user.address.geo)"><i class="fa fa-map-location-dot"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { minidenticonSvg } from '../libs/minidenticons.min.js'
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
      return window.location.href = `mailto: ${url}`
    },
    openGeo(geo) {
      return window.open(`https://www.google.com/maps/dir//${geo.lng}, ${geo.lat}`, '_blank');
    },
  },
}
</script>
<style>
.card {
  background: #fff;
  width: 100%;
}

.card h2 {
  margin: 0;
  padding: 0 1rem;
}

.card .title {
  padding: 1rem;
  text-align: right;
  color: green;
  font-weight: bold;
  font-size: 12px;
}

.card .actions {
  display: flex;
  width: 40%;
  padding: 11px;
  justify-content: space-between;
}

.img-avatar {
  width: 80px;
  height: 80px;
  border: 6px solid white;
  background-color: black;
}

.card-text {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.title-total {
  margin-left: 25px;

}

.user-data {
  margin-left: 16px;
  padding: 0px 0px 5px 0px;
}

.site {
  text-decoration: none;
  color: green;
}

.portada {
  width: 100%;
  height: 100%;
  background-color: green;
  background-position: bottom center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card .actions button {
  border: none;
  background: none;
  font-size: 24px;
  color: #8bc34a;
  cursor: pointer;
  transition: .5s;

}
.card .actions button:hover {
  color: #e2feeb;
  transform: rotate(22deg)
}
</style>