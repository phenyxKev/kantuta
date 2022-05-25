<template>
   <section id="hero">
      <h1>
         <div>Tu mercado</div>
         <div>hispano</div>
         <div>boliviano</div>
      </h1>
      <p>Compra tus productos y artesanía boliviana</p>
      <p>Entregamos a domicilio en Valencia, España !</p>
      <div class="links-btn">
         <div>
            <router-link to="/explore">Descubre nuestros productos</router-link>   
         </div>         
         <router-link to="/contact">Trabaja con nosotros</router-link>
      </div>
      <div class="highlight">
         <h2>Destacados<i class="fa fa-arrow-right"></i></h2>
         <div class="scroll-wrapper">
            <div><router-link to="/product/628913c6ef19b1960bfbf77c"><img src="@/assets/pics/shirt.png" alt="#"></router-link></div>
            <div><router-link to="/product/62893562150539ddbb5bc5ae"><img src="@/assets/pics/yanbal.jpg" alt="#"></router-link></div>
            <div><router-link to="/product/628935be150539ddbb5bc5af"><img src="@/assets/pics/textil.jpg" alt="#"></router-link></div>
            <div><router-link to="/product/628914dbef19b1960bfbf77e"><img src="@/assets/pics/clothes.jpg" alt="#"></router-link></div>
            <div><router-link to="/product/627bebed5cbad1b5fb757aab"><img src="@/assets/pics/timbaland.jpg" alt="#"></router-link></div>
            <div><router-link to="/product/627be6b95cbad1b5fb757aa9"><img src="@/assets/pics/tim-wildsmith-ULXZmSKt1KA-unsplash.jpg" alt="#"></router-link></div>
            <div><router-link to="/product/627bea5b5cbad1b5fb757aaa"><img src="@/assets/pics/ugluk-potroshitel-XwjrPFW7xw0-unsplash.jpg" alt="#"></router-link></div>
         </div>         
      </div> 
   </section>   
</template>
<script>
export default {
   name: 'HeroComp',
}
</script>

<style scoped lang="scss">
$red: #fc484cff;
$yellow: #fcf630ff;
$green: #00d455ff;

#hero {
   //background-image: url("../assets/kantuta.svg");
   overflow: hidden;
   padding: 0 1rem;
}
h1 {
   font-size: 38px;
   animation: fadein 1s linear;
   font-weight: 800;
   margin: 2rem 0;
   div:first-child {
      font-size: 48px;
      color: $red;
      animation: rightToLeft1 800ms linear;
   }
   div:nth-child(2) {
      color: $yellow;
      animation: rightToLeft2 1000ms linear;
   }
   div:last-child {
      color: $green;
      animation: rightToLeft3 1200ms linear;   }
   
}
p {
   line-height: 1.6rem;
}
.links-btn {
   margin: 2rem 0;
   a {
      width: fit-content;
      padding: 1rem;
      display: flex;
      align-items: center;
      border-radius: 8px;
      font-weight: 700;
      margin: 1rem 0;
      &:active {
         transform: scale(0.98);
      }
   }
   a:first-child {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0) 5%, rgba(252, 72, 75, 0.8), rgba(252, 245, 48, 0.8), rgba(0, 212, 85, 0.8), rgba(255, 255, 255, 0) 20%);
      color: rgb(32,32,32);
      border: 1px solid white;
      background-color: rgba(255, 0, 0, 0.1);
   }
   a:last-child {
      color: $red;
      border: 1px solid $red;
   }
}
.highlight {
   margin: 2rem 0;
   h2 {
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      i {
         font-size: 16px;
      }
   }
   .scroll-wrapper{
      width: 100%!important;
      display: flex;
      flex-wrap: nowrap;
      overflow-y: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
         display: none;
      }
      div {
         margin: 8px;
         background-color: rgba(0, 0, 0, 0.1);
         height: 120px;
         min-width: 120px;
         max-width: 120px;
         overflow: hidden;
         border-radius: 1rem;
         img {
            height: 100%;
            width: 100%;
            object-fit: cover;
         }
      }
   }   
}


/* Animation */
@keyframes fadein {
   from {
      opacity: 0;
   } to {
      opacity: 1;
   }
}
@keyframes rightToLeft1 {
   from {
      opacity: 0.6;
      transform: translateX(1rem);
   } to {
      opacity: 1;
      transform: translateX(0);
   }
}
@keyframes rightToLeft2 {
   from {
      opacity: 0.3;
      transform: translateX(2rem);
   } to {
      opacity: 1;
      transform: translateX(0);
   }
}
@keyframes rightToLeft3 {
   from {
      opacity: 0;
      transform: translateX(3rem);
   } to {
      opacity: 1;
      transform: translateX(0);
   }
}

/* +> 992px screens */
@media screen and (min-width: 992px) {
   h1 {
      margin-top: 100px;
   }
   .highlight {
      h2 {
         i {
            display: none;
         }
      }
      .scroll-wrapper {
         display: grid;
         grid-template-columns: auto auto auto auto;
         grid-template-rows: auto auto;
      }
   }
}
</style>