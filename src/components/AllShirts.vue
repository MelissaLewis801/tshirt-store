<template>
  <listOfProducts :products="getShirts"/>
</template>

<script>
import { mapGetters } from 'vuex'
import listOfProducts from './ListOfProducts'
export default {
  components: {
    listOfProducts
  },
  computed: {
    ...mapGetters([
      'getShirts'
    ])
  }
}
</script>

<style>
</style>
