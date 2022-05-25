<template>
   <section class="newsletter">
      <h2>Sucribete a nuestra newsletter !</h2>
         <form>
            <input name="email" type="email" placeholder="Tu email">
            <div class="submit">
               <button class="anim" type="submit">SUSCRIBIRSE</button>
            </div>  
         </form>     
         <p>Recibe de antemano las promociones sobre los productos para estrenar de Kantuta y de sus colaboradores.</p>       
   </section>    
</template>

<script>
export default {
   name: "NewsletterComp"
}
</script>

<style lang="scss" scoped>
.newsletter {
   border-top: 1px solid rgba(0, 0, 0, 0.1);
   padding: 3rem 1rem;
   h2 {
      text-align: center;
      font-size: 16px;
   }
   p {
      font-size: 14px;
      margin: 0 auto;
      padding: 8px;
      max-width: 480px;
      text-align: center;
      line-height: 20px;
      font-weight: 500;
      transition: color .5s;
   }
}
form {
   max-width: 480px;
   margin: auto;
   margin-top: 1rem;
   position: relative;
   input {
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 8px;
      padding: 11px 128px 11px 16px;
      font-size: 16px;
      width: 100%;
      transition: border-color .25s,background-color .25s;
      line-height: inherit;
      line-height: 24px;
      outline: none;
      &:hover {
         border: 1px solid #fc484cff;
      } 
   }
   .submit {
      position: absolute;
      top: 6px;
      right: 6px;
      color: white;     
   }
   button {
      border-radius: 4px;
      padding: 0 12px;
      line-height: 36px;
      color: inherit;
      background-color: #fc484cff;
      transition: background-color .25s;
      font-weight: 600;
      cursor: pointer;
      font-size: 14px;
   }
}      
</style>