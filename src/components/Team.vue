<template>
   <section class="title">
      <h2>Conoce al equipo Kantuta</h2>
      <p>
         Te presentamos a los miembros de Kantuta !
         Entre modernidad y el apego a la tradición,
         descubre a los rostros detras de Kantuta.
         No dudes en contarnos si tambien quieres hacer parte de la aventura.
      </p>
   </section>
   <section class="members">

      <article>
         <figure>
            <img src="@/assets/pics/Raquel.jpg" alt="Raquel">
         </figure>
         <div class="info">
            <h1>Raquel 🇧🇴</h1>
            <p>Directora <span>@</span>Kantuta</p>
            <p>
               Nativa de Cochabamba radico en Valencia desde hace 15 años. Busco promocionar el saber-hacer
               latinoamericano utilizando soluciones modernas.
            </p>
            <ul>
               <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            </ul>
         </div>
      </article>

      <article>
         <figure>
            <img src="@/assets/pics/Kevin.jpg" alt="Kevin">
         </figure>
         <div class="info">
            <h1>Kevin 🇫🇷</h1>
            <p>Creador <span>@</span>Kantuta</p>
            <p>
               Me ocupo en especial de las partes tecnicas de Kantuta sobre todo la programación web.
               Me gusta compartir mi pasión con otros y doy clases de informatica
               no dudes en contactarme si tambien te interesa este ambito.
            </p>
            <ul>
               <li><a href="#"><i class="fab fa-twitter"></i></a></li>
               <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            </ul>
         </div>
      </article>      

      <article>
         <figure>
            <img src="@/assets/pics/Gabriel.jpg" alt="Gabriel">
         </figure>
         <div class="info">
            <h1>Gabriel 🇧🇴</h1>
            <p>Diseñador <span>@</span>Kantuta</p>
            <p>
               Aprecio todo lo que es el arte grafico y el diseño. Tambien tengo mucho interes en las redes sociales
               y llevo el facebook & instagram de Kantuta.
            </p>
            <ul>
               <li><a href="#"><i class="fab fa-facebook"></i></a></li>
               <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            </ul>
         </div>
      </article>

      <article>
         <figure>
            <img src="" alt="">
         </figure>
         <div class="info">
            <h1>Naomi 🇪🇸</h1>
            <p>Gestora de red-social <span>@</span>Kantuta</p>
            <p>
               Manejo Tik Tok de Kantuta. Siguenos ahi para ver nuestros ultimos videos !
            </p>
            <ul>
               <li><a href="#"><i class="fab fa-tiktok"></i></a></li>
            </ul>
         </div>
      </article>

      <article>
         <figure>
            <img src="" alt="">
         </figure>
         <div class="info">
            <h1>Jorge 🇧🇴</h1>
            <p>Manager marketing <span>@</span>Kantuta</p>
            <p>
               Originario de La Paz, Bolivia, tambien hablo valenciano.
               Siempre he estado navegando entre la cultura latina y la española.
               Por este motivo hago de intermediario entre la gente.
               Me gusta aprender nuevas cosas para progresar y poder compartirlo.
            </p>
            <ul>
               <li><a href="#"><i class="fab fa-facebook"></i></a></li>
               <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            </ul>
         </div>
      </article>

      <article>
         <figure>
            <img src="" alt="">
         </figure>
         <div class="info">
            <h1>Jean 🇫🇷</h1>
            <p>consultante tecnico <span>@</span>Kantuta</p>
            <p>
               Ex-informatico para el CNRS (Centro Nacional de Investigación Scientifica)
               mi area es la dimensión technologica. Tambien soy especialista en cryptomonedas
               y cyber seguridad.
               Soy consultante tecnico de Kantuta.
            </p>
            <ul>
               <li><a href="#"><i class="fab fa-facebook"></i></a></li>
               <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            </ul>
         </div>
      </article>

   </section>
</template>

<script>
export default {
   name: 'TeamComp'
}
</script>

<style scoped lang="scss">
.title {
   margin: auto;
   line-height: 1.6rem;
   padding: 2rem 1rem;
   max-width: 480px;
   h2 {
      color: #fc484cff;
      margin: 2rem 0;
   }
}
.members {
   line-height: 1.6rem;
   padding: 1rem 1rem 2rem 1rem;
   article {
      margin: auto;
      max-width: 480px;
      padding: 2rem 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
   }
   span {
      color: #fc484cff;
   }
   figure {
      flex-shrink: 0;
      img {
         border-radius: 50%;
         width: 96px;
         height: 96px;
         object-fit: cover;
      }
   }
   ul {
      display: flex;
      li {
         margin-right: 1rem;
      }
   }
}
</style>