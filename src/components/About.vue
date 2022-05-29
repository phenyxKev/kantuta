<template>
   <section class="info">
      <h2>Información</h2>
      <h3>Que es Kantuta ?</h3>
      <p>Kantuta es una plataforma web e-commerce de venta de productos bolivianos (cuero, ropa, perfume, artesanía) ubicada en Valencia, España.</p>

      <h3>Geolocalisación</h3>
      <p>Ofrecemos servicio en la zona de Valencia capital (Con la intención mas adelante de cubrir toda España).</p>
      
      <h3>Política de privacidad</h3>
      <p>
         No guardamos datos privados de los visitantes de la pagina web.
         Utilizamos el servicio Google Analytics para optimizar el SEO.
         Guardamos el email de los suscritores a nuestra newsletter para poder mandarles email directamente.
      </p>

      <h3>Condiciones de uso</h3>
      <p>
         Kantuta no acepta devoluciónes.
         Puedes <router-link to="/contact">contactarnos</router-link> si quieres ver/probar la ropa antes de comprar.
      </p>
      <p>
         Kantuta es una idea y creación original de <a href="https://github.com/phenyxKev">PhenyxKev</a>.
         No se permite copiar el código ni imitar el business model
         (es decir una plataforma web e-commerce de ventra de productos latinoamericanos para el mercado Español).
         No duden en mandar un email a : <a href="mailto:kevin.jgnetworks@gmail.com">kevin.jgnetworks@gmail.com</a> para tener más información.
      </p>

      <h3>Política de cookies</h3>
      <p>Kantuta no utiliza cookies.</p>
   </section>
</template>

<script>
export default {
   name: 'AboutComp'
}
</script>

<style scoped lang="scss">
.info {
   line-height: 1.6rem;
   padding: 2rem 1rem;
   h2 {
      margin: 2rem 0;
      text-align: center;
      color: #fc484cff
   }
   h3 {
      margin-top: 1rem;
      font-size: 0.9rem;
   }
   a {
      color: #fc484cff;
      text-decoration: underline;
   }
}
</style>