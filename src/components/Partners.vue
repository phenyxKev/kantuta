<template>
   <section class="partnership">
      <h2>Nuestros patrocinadores</h2>
      <div class="partners">
         <div>
            <img src="@/assets/logos/reservia.svg" alt="Reservia">
         </div>
         <div>
            <img src="@/assets/logos/groupomania.svg" alt="Groupomania">
         </div>
         <div>
            <img src="@/assets/logos/ohmyfood.svg" alt="Ohmyfood">
         </div>    
         <div>
            <img src="@/assets/logos/fraichup.svg" alt="Fraichup">
         </div>
         <div>
            <img src="@/assets/logos/loremipsum.svg" alt="Loremipusum">
         </div>   
      </div>      
      <p class="see-more anim"><router-link to="/contact">Hazte patrocinador</router-link></p>
   </section>   
</template>

<script>
export default {
   name: 'PartnersComp'
}
</script>

<style scoped lang="scss">
.partnership {
   padding: 2rem 1rem;
   border-top: 1px solid rgb(0 0 0 / 10%);
   border-bottom: 1px solid rgb(0 0 0 / 10%);
   h2 {
      padding: 1rem 0;
      text-align: center;
      font-size: 16px;
   }
   .partners {
      display: flex;
      flex-wrap: wrap;
      div {
         border-radius: 50%;
         width: calc(100% / 3);
         padding: 1rem;
         filter: grayscale(1);
         img {
            overflow: hidden;         
            height: 100%;
            width: 100%;
            object-fit: contain;               
         }
      }   
   }
   .see-more {
      text-align: right;
      font-style: italic;
      margin-top: 1rem;
      font-size: 14px;
   }
}

/* +> 500px screens */
@media screen and (min-width: 500px) {
   .partnership {
      .partners {
         div {
            width: calc(100% / 4);
         }
      }
   }
}
/* +> 600px screens */
@media screen and (min-width: 600px) {
   .partnership {
      .partners {
         div {
            width: calc(100% / 5);
         }
      }
   }
}
/* +> 700px screens */
@media screen and (min-width: 700px) {
   .partnership {
      .partners {
         div {
            width: calc(100% / 6);
         }
      }
   }
}
</style>