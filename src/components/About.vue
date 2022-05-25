<template>
   <section class="info">
      <h2>Información</h2>
      <h3>Que es Kantuta ?</h3>
      <p>Kantuta es una plataforma web de compra/venta de articulos bolivianos ubicada en Valencia, España.</p>
      
      <h3>Que productos vendemos ?</h3>
      <p>En especial la artesania, ropa de moda latinoamericana, cuero y productos de belleza.</p>
      
      <h3>Donde trabajamos ?</h3>
      <p>En Valencia y alrededores. Pero mas adelante buscaremos ofrecer una cobertura a nivel nacional y cubrir toda España.</p>
      
      <h3>Como hago para recibir mi compra ?</h3>
      <p>
         Si se encuentra en Valencia ciudad nosotros mandamos gratuitamente un repartidor a entregar el pedido. Si prefiere puede
         venir recogerlo directamente a la oficina. Tambien podemos mandarlo por amazon (gastos de envio aparte).
      </p>

      <h3>Me gustaria vender mis productos mediante la plataforma. Puedo hacerlo ?</h3>
      <p>Claro que si. Si los productos propuestos son coherentes con el proposito de la pagina, pide una cita aqui:
         <a href="mailto:kantuta@gmail.com" target="_blank">kantuta@gmail.com</a>
         y nos organizamos.
      </p>
      
      <h3>Me gustaria trabajar con Kantuta. Como hago ?</h3>
      <p>Mandanos un email: <a href="mailto:kantuta@gmail.com" target="_blank">kantuta@gmail.com</a> y nos pondremos en contacto contigo.</p>

      <h3>Puedo hacer una devolución ?</h3>
      <p>
         Kantuta no acepta devoluciónes. Pero si realmente hay un problema que viene de nuestra parte no dudes en
         ponerse en contacto con nosotros mediante este <router-link to="">formulario</router-link> y veremos una solución.
      </p>
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