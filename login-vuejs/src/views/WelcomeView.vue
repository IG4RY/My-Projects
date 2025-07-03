<template>
  <div>
    <h1>Bienvenido: {{ user }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>