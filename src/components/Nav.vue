<template>
   <nav>
      <div class="navbar">
         <ul>
            <li><router-link to="/"><img src="@/assets/icons/home.svg" alt="home">Kantuta</router-link></li>
            <li><router-link to="/store"><img src="@/assets/icons/store.svg" alt="store">tienda</router-link></li>
            <li><button @click="openNav"><img src="@/assets/icons/menu.svg" alt="store">menu</button></li>
            <li><router-link to="/cart"><img src="@/assets/icons/cart.svg" alt="cart"><span>{{ notif }}</span>cesta</router-link></li>
            <li><router-link to="/contact"><img src="@/assets/icons/message.svg" alt="message">contacto</router-link></li>
         </ul>
      </div>
      <aside v-if="nav" ref="aside">
         <button @click="closeNav()"><i class="fas fa-times"></i></button>
         <ul>
            <li><router-link to="/" @click="closeNav()"><img src="@/assets/icons/home.svg" alt="home">Kantuta</router-link></li>
            <li><router-link to="/explore" @click="closeNav()"><img src="@/assets/icons/explore.svg" alt="home">Explora</router-link></li>
            <li><router-link to="/store" @click="closeNav()"><img src="@/assets/icons/store.svg" alt="store">Tienda</router-link></li>
            <li><router-link to="/cart" @click="closeNav()"><img src="@/assets/icons/cart.svg" alt="cart">Cesta</router-link></li>
            <li><router-link to="/contact" @click="closeNav()"><img src="@/assets/icons/message.svg" alt="message">Contacto</router-link></li>
            <li><router-link to="/team" @click="closeNav()"><img src="@/assets/icons/user.svg" alt="team">Nuestro Equipo</router-link></li>
            <li><router-link to="/info" @click="closeNav()"><img src="@/assets/icons/info.svg" alt="info">Información</router-link></li>
            <li><router-link to="/premium" @click="closeNav()"><img src="@/assets/icons/premium.svg" alt="premium">Kantuta+ premium</router-link></li>
         </ul>
         <p>powered by { Phenyx Solutions }</p>
      </aside>
   </nav>
   
</template>

<script>
import { piniaCart } from '@/store/pinia.js'
export default {
   name: 'NavComp',
   data() {
      return {
         nav: false
      }
   },
   computed: {
      notif: function() {
         if(piniaCart().cart) {
            return "🔴"
         } else {
            return null
         }
      }
   },
   methods: {
      openNav() {
         this.nav = true
         document.querySelector('body').classList.add('hide-scrollBar')
      },
      closeNav() {
         document.querySelector('aside').classList.add('closeMenu')
         document.querySelector('body').classList.remove('hide-scrollBar')
         setTimeout(() => {
            this.nav = false
         }, 290)
      },
      hideNav() {
         if (window.innerWidth > 992) return
         let reachingBottomOfWindow = window.innerHeight + document.documentElement.scrollTop + 200
         if (reachingBottomOfWindow >= document.documentElement.offsetHeight) {
            document.querySelector('nav').classList.add("hide")
         } else {
            document.querySelector('nav').classList.remove("hide")
         }
      },
      checkLogo(e) {
         if(e.target.alt === "logo Kantuta" && this.nav) {
            this.closeNav()
         }
      }
   },
   mounted() {
      window.onscroll = this.hideNav
      window.onclick = this.checkLogo
   }
}
</script>

<style scoped lang="scss">
nav {
   position: fixed;
   width: 100%;
   max-width: 990px;
   background-color: white;
   border-top: 1px solid rgba(0, 0, 0, 0.1);
   opacity: 1;
   transition: opacity 1s;
}
.navbar {
   ul {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0.6rem 0;
      li {
         display: flex;
         justify-content: center;
         overflow: hidden;
         width: 100%;
         &:active {
            transform: scale(0.94);
         }
      }
      a, button {
         position: relative;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         font-size: 14px;
         font-weight: 400;
         width: 100%;
         span {
            font-size: 8px;
            position: absolute;
            transform: translate(6px, -12px);
         }
      }
      img {
         height: 18px;
         width: 18px;
      }
   }   
}
aside {
   position: fixed;
   overflow: hidden;
   z-index: 2;
   background-color: white;   
   top: 0;
   left: 0;
   height: 100vh;
   width: 100vw;
   max-width: 100%;
   box-shadow: 4px 0 10px 1px rgb(0 0 0 / 10%);
   padding: 2rem;
   animation: openMenu 300ms linear;
   button {
      position: absolute;
      top: 0;
      right: 0;
      width: fit-content;
      padding: 2rem;
      i {
         font-size: 1.1rem;
         vertical-align: middle;
         margin-right: 0;
      }
   }
   ul {
      animation: openMenu 300s linear;
      display: flex;
      flex-direction: column;
      line-height: 4rem;
      margin-top: 2rem;
   }
   img {
      height: 18px;
      width: 18px;
      margin-right: 8px;
      transform: translateY(2px);
   }
   p {
      position: absolute;
      bottom: 3rem;
      text-align: center;
      width: 100%;
      font-family: monospace;
      transform: translateX(-2rem);
   }
}
/* Hide the bottom bar when reaching footer */
.hide {
   opacity: 0;
}

/* Animations */
@keyframes openMenu {
   from {
      width: 220px;
   } to {
      width: aside;
   }
}
.closeMenu {
   animation: closeMenu 300ms linear;
}
@keyframes closeMenu {
   from {
      width: aside;
      opacity: 1;
   } to {
      width: 220px;
      opacity: 0;
   }    
}

/* Mobile (<992px) screens */
@media screen and (max-width: 992px) {
   nav {
      bottom: 0;
   }
}
/* PC (>992px) screens */
@media screen and (min-width: 992px) {
   nav {
      margin: auto;
      position: fixed;
      z-index: 2;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
   }
   .navbar {
      width: 100%;
      padding-left: 20%;
      ul {
         padding: 1.1rem 0;
         li:nth-child(3) {
            order: 1;
         }
         a, button {
            flex-direction: row;
         }
         img {
            margin-right: 8px;
         }
      }
   }
   aside {
      position: absolute;
      display: inline-table;
      ul {
         margin-top: 100px;
      }
   }
}
</style>
