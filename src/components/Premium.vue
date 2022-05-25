<template>
<section class="premium">
   <h2>Quieres abrir un negocio online ? Te interesa el marketing digital ? Pasate a ser premium con Lithium+</h2>
   <p>
      Lithium+ es el club premium de negocios de Kantuta. Ofrecemos una formación sobre los ambitos que mas te interesan:
      desde Marketing Digital, SEO, Diseño Grafico, Programación Web y Community Management.
      Haras parte de un club de emprendedores inovadores.
      Dale a este <router-link to="/premium">enlace</router-link> para mas información.
   </p>
</section>
</template>

<script>
export default {
   name: 'PremiumComp'
}
</script>

<style scoped lang="scss">
.premium {
   padding: 2rem 1rem;
   h2 {
      text-align: center;
      font-size: 16px;
      padding: 1rem 0;
   }
   p {
      font-size: 14px;
      margin: 0 auto;
      line-height: 1.4rem;
      max-width: 480px;
   }
   a {
      text-decoration: underline;
      color: #fc484cff;
   }
}
</style>