<template>
   <section class="contact">
      <h2>Contacto</h2>
      <p>
         Puedes escribirnos mediante este formulario y responderemos en breve,
         sobre cualquier asunto (desde pedir una cita, o una pregunta sobre algun producto, etc).
         Tambien puedes contactarnas a traves de nuestras redes-sociales debajo !
      </p>      
      <form action="" method="POST">
         <input name="name" type="text" placeholder="Nombre" required>
         <input name="tel" type="tel" placeholder="Telefono" required>
         <input name="email" type="email" placeholder="Email" required>
         <textarea name="msg" placeholder="Mensaje" rows="4" required></textarea>
         <div>
               <button type="submit"><i class="fas fa-paper-plane"></i>GO!</button>    
         </div>
         <p>*Verifica bien cada campo antes de enviar</p>            
      </form>
      <div class="links">
         <ul>
            <li><i class="fa fa-map-marker"></i>46022, Valencia España</li>
            <li><a href="mailto:kantuta@gmail.com"><i class="fas fa-envelope"></i>kantuta@gmail.com</a></li>
            <li><a href="tel:+34655"><i class="fas fa-phone"></i>+34 655 655 556</a></li>
            <li><a href="https://github.com/phenyxKev"><i class="fab fa-github"></i>phenyxKev</a></li>
         </ul>
         <ul>
            <li><a href=""><i class="fab fa-instagram"></i>instagram</a></li>
            <li><a href=""><i class="fab fa-facebook"></i>facebook</a></li>
            <li><a href=""><i class="fab fa-tiktok"></i>tiktok</a></li>
            <li><a href=""><i class="fab fa-twitter"></i>twitter</a></li>
            <li><a href=""><i class="fab fa-linkedin"></i>linkedin</a></li>
            <li><a href=""><i class="fab fa-youtube"></i>youtube</a></li>   
         </ul>
      </div>    
   </section>
</template>

<script>
export default {
   name: 'AboutComp',
   methods: {
      scrollToTop() {
         window.scrollTo(0, 0)
      }
   },
   mounted() {
      window.onload = this.scrollToTop
   }
}
</script>

<style scoped lang="scss">
.contact {
   padding: 2rem 1rem;
   max-width: 480px;
   margin: auto;
   h2 {
      margin: 2rem 0;
      text-align: center;
      color: #fc484c;      
   }
   p {
      line-height: 1.6rem;
      font-size: 14px;      
   }
}
form {
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   justify-content: space-between;
   padding: 1rem 0;
   input, textarea {
      border-radius: 4px;
      font-size: 16px;
      padding: 1rem;
      margin: 8px 0;
      border: 1px solid rgb(32,32,32);
      transition: background-color .5s;
   }
   input:focus, textarea:focus {
      outline: none;
      background-color: rgba(255, 0, 0, 0.1);
   }
   div {
      text-align: right;
   }
   button {
      width: 100px;
      padding: 1rem;
      margin: 8px 0;
      color: white;
      background-color: #fc484c;
      border-radius: 4px;
      font-weight: 600;
      i {
         color: white;
         margin-right: 4px;
      }
   }
   p {
      text-align: right;
      width: 100%;
   }
}
.links {
   padding-top: 2rem;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   line-height: 2rem;
   ul {
      li:hover {
         color: #fc484c;
         transition: color 0.5s;
      }
      i {
         margin-right: 8px;
      }
   }
}
</style>