<template>
   <Header />
   <Store />
   <Footer />
   <Nav />
</template>

<script>
import Header from "@/components/Header.vue"
import Store from "@/components/Store.vue"
import Footer from "@/components/Footer.vue"
import Nav from "@/components/Nav.vue"

export default {
   name: 'StoreView',
   components: {
      Header,
      Store,
      Footer,
      Nav      
   }
}
</script>