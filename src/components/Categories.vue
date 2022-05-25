<template>
   <section class="categories">
      <h2>Compra y vende</h2>
      <ul>
         <li><router-link to="/products/leather">CUERO<i class="fas fa-chevron-right"></i></router-link></li>
         <li><router-link to="/products/fashion">MODA<i class="fas fa-chevron-right"></i></router-link></li>
         <li><router-link to="/products/perfume">PERFUMES<i class="fas fa-chevron-right"></i></router-link></li>         
         <li><router-link to="/products/art">ARTESANIA<i class="fas fa-chevron-right"></i></router-link></li>
      </ul>
   </section>
</template>

<script>
export default {
   name: 'CategoriesComp'
}
</script>

<style scoped lang="scss">
.categories {
   padding: 2rem 1rem;
   border-bottom: 1px solid rgb(0 0 0 / 10%);
   h2 {
      padding: 1rem 0;
      text-align: center;
      font-size: 16px;
   }
   ul {
      line-height: 44px;
      a {
         font-size: 16px;
         display: flex;
         align-items: center;
         justify-content: space-between;
         letter-spacing: 1px;
         font-weight: 500;
         transition: color .7s;
         &:hover {
            color: #fc484cff;
            i {
            color: #fc484cff;
            }
         }         
      }
   }
}
</style>