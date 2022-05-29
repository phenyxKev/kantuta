<template>
  <Header />
  <Cards :products="products" :API="API" />
  <Footer />
  <Nav />
</template>

<script>
import API from "../../api"
import Header from "@/components/Header.vue"
import Cards from "@/components/Cards.vue"
import Footer from "@/components/Footer.vue"
import Nav from "@/components/Nav.vue"

export default {
  name: "ProductsView",
  components: {
    Header,
    Cards,
    Footer,
    Nav
  },
  data() {
    return {
      products: [],
      API: API
    }
  },
  methods: {
    async getProducts(cat) {
      const resProducts = await fetch(`${API}/api/products/cat/${cat}`)
      const data = await resProducts.json()
      return data
    }
  },
  async created() {
    this.products = await this.getProducts(this.$route.params.cat)
  }
}
</script>