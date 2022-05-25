<template>
   <Header />
   <Hero />
   <Partners />
   <Categories />
   <Reviews />
   <Support />
   <Premium />
   <Newsletter />
   <Footer />
   <Nav />
</template>

<script>
import Header from "@/components/Header.vue"
import Hero from "@/components/Hero.vue"
import Partners from "@/components/Partners.vue"
import Categories from "@/components/Categories.vue"
import Reviews from "@/components/Reviews.vue"
import Support from "@/components/Support.vue"
import Premium from "@/components/Premium.vue"
import Newsletter from "@/components/Newsletter.vue"
import Footer from "@/components/Footer.vue"
import Nav from "@/components/Nav.vue"

export default {
   name: "HomeView",
   components: {
      Header,
      Hero,
      Partners,
      Categories,
      Reviews,
      Support,
      Premium,
      Newsletter,
      Footer,
      Nav      
   },
   methods: {
      intersectionObserverAPI() {
         const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.9
         }
         function handleIntersect(entries, observer) {
            entries.forEach(entry => {
               if (entry.intersectionRatio > options.threshold) {
                  entry.target.style.animation = "anim 1s linear"
                  entry.target.style.opacity = "1"
                  observer.unobserve(entry.target)
               }    
            });
         } 
         const observer = new IntersectionObserver(handleIntersect, options)
         const elmts = document.querySelectorAll(".anim")
         elmts.forEach(elt => {
            observer.observe(elt)
         })
      }
   },  
   mounted() {
      this.intersectionObserverAPI()
   } 
};
</script>
