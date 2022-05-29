<template>
  <Header />
  <Explore :products="products" :API="API" />
</template>

<script>
import API from "../../api.js"
import Header from "@/components/Header.vue"
import Explore from "@/components/Explore.vue"

export default {
  name: 'ExploreView',
  components: {
    Header,
    Explore    
  },
  data() {
    return {
      products: [],
      API: API
    }
  },
  methods: {
    async getProducts() {
      const resProducts = await fetch(`${API}/api/products/all`)
      const data = await resProducts.json()
      return data
    }
  },
  async created() {
    this.products = await this.getProducts()
  }
}
</script>