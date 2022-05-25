<template>
   <footer>
      <div class="footer general">
         <h3>Kantuta</h3>
         <router-link to="/info">Funcionamiento de la app</router-link>
         <router-link to="/info">Condiciones generales de uso</router-link> 
         <router-link to="/info">Datos y privacidad</router-link>    
      </div>
      <div class="footer help">
         <h3>Asistencia</h3>
         <router-link to="/contact">Contactarnos</router-link> 
         <router-link to="/info">FAQs</router-link> 
         <router-link to="/info">Información</router-link>
      </div>
      <div class="footer support">
         <h3>Apoyarnos</h3>
         <router-link to="#">Donaciones</router-link>
         <router-link to="/team">Quiénes somos</router-link>
      </div>
      <div class="social-networks">
         <router-link to="#"><i class="fab fa-linkedin"></i></router-link>
         <router-link to="#"><i class="fab fa-twitter"></i></router-link>
         <router-link to="#"><i class="fab fa-facebook"></i></router-link>
         <router-link to="#"><i class="fab fa-youtube"></i></router-link>
         <router-link to="#"><i class="fab fa-tiktok"></i></router-link>
         <router-link to="#"><i class="fab fa-instagram"></i></router-link>
      </div>
      <div id="credits">
         <p>&copy; 2022 / <router-link to="#">Phenyx Solutions</router-link> 🇪🇸</p>
         <p>Todos los derechos reservados</p>
      </div>
   </footer>
</template>

<script>
export default {
   name: 'FooterComp',
}
</script>

<style scoped lang="scss">
footer {
   padding: 2rem 1rem;
   background-color: rgba(255, 0, 0, 0.1);
   line-height: 1.6rem;
   .footer {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      h3 {
         font-size: 16px;
      }
      a {
         font-size: 14px;
      }
   }
   .social-networks {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin: 1rem 0;
      i {
         padding: 8px 12px;
      }
   }
   #credits {
      text-align: center;
      p, a {
         font-size: 14px;
         font-family: monospace;  
      }
      p:last-child {
         font-size: 12px;
      }
   }
}
</style>
