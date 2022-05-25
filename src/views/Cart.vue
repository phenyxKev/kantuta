<template>
  <Header />
  <Basket :basket="basket" @deleteItem="deleteItem"/>
  <Footer />
  <Nav />
</template>

<script>
import Header from "@/components/Header.vue"
import Basket from "@/components/Basket.vue"
import Footer from "@/components/Footer.vue"
import Nav from "@/components/Nav.vue"
import { piniaCart } from '@/store/pinia.js'

export default {
  name: 'CartView',
  components: {
    Header,
    Basket,
    Footer,
    Nav
  },
  data() {
    return {
      basket: {}
    }
  },
  methods: {
    deleteItem(itemId) {
      this.basket = this.basket.filter((item) => item._id != itemId)
      if (!this.basket.length) {
        piniaCart().deleteCart()
        localStorage.removeItem("basket")
      } else {
        localStorage.setItem("basket", JSON.stringify(this.basket))  
      }      
    }
  },
  created() {
    this.basket = JSON.parse(localStorage.getItem("basket"))
  }
}
</script>