<template>
   <Header />
   <Team />
   <Footer />
   <Nav />
</template>

<script>
import Header from "@/components/Header.vue"
import Team from "@/components/Team.vue"
import Footer from "@/components/Footer.vue"
import Nav from "@/components/Nav.vue"

export default {
   name: "TeamView",
   components: {
      Header,
      Team,
      Footer,
      Nav      
   }
}
</script>