<template>
   <Header />
   <Contact />
   <Footer />
   <Nav />
</template>

<script>
import Header from "@/components/Header.vue"
import Contact from "@/components/Contact.vue"
import Footer from "@/components/Footer.vue"
import Nav from "@/components/Nav.vue"

export default {
   name: "ContactView",
   components: {
      Header,
      Contact,
      Footer,
      Nav      
   }
}
</script>