<template>
   <Header />
   <Lithium />
   <Footer />
   <Nav />
</template>

<script>
import Header from "@/components/Header.vue"
import Lithium from "@/components/Lithium.vue"
import Footer from "@/components/Footer.vue"
import Nav from "@/components/Nav.vue"

export default {
   name: "PremiumView",
      components: {
      Header,
      Lithium,
      Footer,
      Nav,
   }
}
</script>