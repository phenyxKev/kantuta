<template>
   <Header />
   <About />
   <Footer />
   <Nav />
</template>

<script>
import Header from "@/components/Header.vue"
import About from "@/components/About.vue"
import Footer from "@/components/Footer.vue"
import Nav from "@/components/Nav.vue"

export default {
   name: "InfoView",
   components: {
      Header,
      About,
      Footer,
      Nav      
   }
}
</script>