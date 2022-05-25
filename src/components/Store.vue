<template>
   <section class="store">
      <article>
         <div class="img-container">
            <img src="https://images.unsplash.com/photo-1571829604981-ea159f94e5ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="clothes">
         </div>
         <router-link class="title-container" to="/products/leather">            
            <h3>CUERO<i class="fas fa-chevron-right"></i></h3>
         </router-link>
      </article>
      <article>
         <div class="img-container">
            <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80" alt="leather">
         </div>
         <router-link class="title-container" to="/products/fashion">            
            <h3>MODA<i class="fas fa-chevron-right"></i></h3>
         </router-link>
      </article>
      <article>
         <div class="img-container">
            <img src="https://images.unsplash.com/photo-1619994403073-2cec844b8e63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="perfume">
         </div>
         <router-link class="title-container" to="/products/perfume">            
            <h3>PERFUME<i class="fas fa-chevron-right"></i></h3>
         </router-link>
      </article>
      <article>
         <div class="img-container">
            <img src="https://images.unsplash.com/photo-1568805778719-c768512debe8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="artcraft">
         </div>
         <router-link class="title-container" to="/products/art">            
            <h3>ARTESANIA<i class="fas fa-chevron-right"></i></h3>
         </router-link>
      </article>
   </section>   
</template>

<script>
export default {
   name: 'StoreComp'
}
</script>

<style scoped lang="scss">
.store {
   margin: auto;
   line-height: 1.6rem;
   padding: 2rem 1rem;
   max-width: 480px;
   min-width: 100%;
}
article {
   margin: auto;
   display: flex;
   align-items: center;
   position: relative;
   max-width: 480px;
   &:first-child {
      animation: appear 400ms linear;
   }
   &:nth-child(2) {
      animation: appear 700ms linear;
   }
   &:nth-child(3) {
      animation: appear 1000ms linear;
   }
   &:nth-child(4) {
      animation: appear 1300ms linear;
   }
   &:hover {
      .img-container {
         box-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
         transition: box-shadow 1s;
         
      }
      .title-container {
         background-color: rgba(255, 0, 0, 0.2);
         transition: background-color 1.5s;
         i {
            transform: scale(1.4);
            transition: transform .5s;
         }
      }
   }
   &:active {
      transform: scale(0.98);
   }
}
.img-container {
   position: absolute;
   width: 112px;
   height: 112px;
   border-radius: 50%;
   overflow: hidden;
   border: 4px solid white;
   img {
      height: 100%;
      width: 100%;
      object-fit: cover;
   }
}
.title-container {
   margin: 2rem 0;
   background-color: rgba(255, 0, 0, 0.1);
   padding: 1.5rem 2rem;
   border-radius: 64px;
   width: 100%;
   text-align: right;
   
   h3 {
      font-size: 16px;   
   }      
   i {
      color: #fc484cff;
      margin-left: 2rem;
   }
}

/* Animation */
@keyframes appear {
   0% {
      opacity: 0;
      transform: translateY(2rem);
   }
   30% {
      opacity: 0;
   }
   100% {
      opacity: 1;
      transform: translateY(0);
   }
}
</style>