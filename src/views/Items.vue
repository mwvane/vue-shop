<template>
  <div>
    <h1>items</h1>
    <div v-for="item in items" :key="item.id">
    <p>{{item}}</p>
    </div>
  </div>

</template>

<script>
import {mapState} from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Items",
  computed: {
    ...mapState(['products', "items"]),
  }
}
</script>

<style scoped>

</style>