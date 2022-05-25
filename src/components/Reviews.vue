<template>
   <section class="reviews">
      <div class="review">
         <img src="@/assets/pics/Raquel.jpg" alt="Raquel">
         <blockquote>
            &#8220; Buscaba un regalo original para una amiga, que sea tipico de Cochabamba, y encontré un bolso de cuero en Kantuta. &#8221;
            <p>Raquel, peluquera</p>
         </blockquote>
      </div>
      <div class="review">
         <img src="@/assets/pics/Gabriel.jpg" alt="Gabriel">
         <blockquote>
            &#8220; Necesitaba una plataforma para vender mis creaciones de ropa.
            Me pusé en contacto con Kantuta y hemos empezado a distribuir ropa de moda boliviana. &#8221;
            <p>Gabriel, diseñador</p>
         </blockquote>
         
      </div>
      <div class="review">
         <img src="@/assets/pics/Kevin.jpg" alt="Kevin">
         <blockquote>
            &#8220; Ofrecen la posibilidad de recibir los articulos directamente a casa o de recogerlos al almacén si prefieres. &#8221;
            <p>Kevin, programador</p>
         </blockquote>
      </div>
   </section>
</template>

<script>
export default {
   name: 'ReviewsComp'
}
</script>

<style scoped lang="scss">
.reviews {
   padding: 2rem 1rem;
}
.review {
   text-align: center;
   font-style: italic;
   line-height: 20px;
   padding: 1rem 0;
   img {
      height: 80px;
      width: 80px;
      object-fit: cover;
      border-radius: 50%;
   }
   blockquote {
      padding-top: 8px;
      max-width: 480px;
      margin: auto;
   }
   p {
      font-style: normal;
      text-align: right;
      margin: 1rem;
      font-size: 14px;
   }
}

/* PC (>992px) screens */
@media screen and (min-width: 992px) {
   .reviews {
      display: flex;
   }
   .review {
      padding: 1rem 1rem;
   }
}
</style>