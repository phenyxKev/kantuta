<template>
   <section class="support">
      <h2>Ayudanos a mejorar nuestros servicios</h2>
      <div class="links">
         <ul>
            <li><a href="#"><i class="fab fa-cc-visa"></i>Tarjeta</a></li>
            <li><a href="#"><i class="fab fa-bitcoin"></i>Cryptos</a></li>
            <li><a href="#"><i class="fab fa-patreon"></i>Patreon</a></li>
            <li><a href="#"><i class="fab fa-paypal"></i>PayPal</a></li>
         </ul>
         <p>
            Puedes apoyar el equipo Katuta en mejorar la calidad de su servicio mandando una donación
            <a href="#">aqui</a>
         </p>   
      </div>      
      
      <div class="bank anim">
         <div>
            <img src="@/assets/logos/BBVA.svg" alt="BBVA">
         </div>
         <p>Blasco Ibañez, 35</p>
         <p>46022 Valencia</p>
      </div>     
     </section>
</template>

<script>
export default {
   name: 'SupportComp'
}
</script>

<style scoped lang="scss">
.support {
   background-color: rgba(255, 0, 0, 0.1);
   padding: 3rem 1rem;
   overflow: hidden;
   h2 {
      text-align: center;
      font-size: 16px;
   }
}
.links {
   display: flex;
   flex-direction: column;
   align-items: center;
   ul {
      width: fit-content;
      line-height: 2rem;
      margin: 2rem 0;
      text-align: left;
      a:hover {
         text-decoration: underline;
         color: #fc484cff;
         transition: color 0.5s;
         i {
            color: #fc484cff;;
            transition: color 0.5s;
         }
      }          
   }   
   i {
      margin-right: 4px;
   }
   p {
      font-size: 14px;
      margin: 0 auto;
      text-align: center;
      line-height: 20px;
      max-width: 480px;
      a {
         color: #fc484cff;
         text-decoration: underline;
      }
   }   
}
.bank {
   margin-top: 1rem;
   padding: 1rem;
   width: fit-content;
   border-radius: 8px;
   border: 1px solid rgba(0, 70, 128, 0.3);
   img {
      height: 16px;
      width: auto;
      object-fit: contain;
   }
   p {
      text-align: left;
   } 
   }
</style>