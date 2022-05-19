<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <ChartItem :item="item">

      </ChartItem>
    </div>
  </div>

</template>

<script>
import {mapState} from "vuex";
import ChartItem from "@/components/ChartItem";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Items",
  components:{
    ChartItem
  },
  computed: {
    ...mapState(['products', "items"]),
  }
}
</script>

<style scoped>

</style>