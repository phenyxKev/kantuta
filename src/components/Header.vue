<template>
   <header>
      <div class="social-network">
         <a v-if="this.$route.path === '/'" href="#"><i class="fab fa-facebook"></i></a>
         <button v-else @click="$router.go(-1)"><i class="fas fa-arrow-left"></i></button>
      </div>      
      <div id="logo"><router-link to="/team"><img src="../assets/kantuta.svg" alt="logo Kantuta"></router-link></div>
      <div class="social-network"><a href="#"><i class="fab fa-instagram"></i></a></div>     
   </header>   
</template>

<script>
export default {
   name: 'HeaderComp'
}
</script>

<style scoped lang="scss">
header {
   padding: 0.4rem 2rem;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
#logo {
   overflow: hidden;
   text-align: center;
   a {
      display: flex;
      justify-content: center;
   }
   img {
      height: 38px;
      width: 38px;
      object-fit: contain;
   }
}
.social-network {
   min-width: 25%;
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   &:last-child {
      justify-content: flex-end;
   }
   i {
      font-size: 1.2rem;
   }
}

/* +> 992px screens */
@media screen and (min-width: 992px) {
   header {
      border-bottom: none;
   }
   #logo {
      position: fixed;
      top: 0.5rem;
      background-color: white;
      z-index: 3;
      border: 1px solid white;
      img {
         height: 70px;
         width: 70px;
         padding: 8px;
      }
   }
   .social-network {
      display: none;
   }
}
</style>
