<template>
  <main>
    <div class="gallery">
      <button @click="$router.go(-1)"><i class="fas fa-arrow-left"></i></button>
      <button @click="expand(item.img)"><i class="fa fa-expand"></i></button>
      <img v-for="(pic, i) in item.img" :key="i" :src="`${API}/images/${pic}`" :alt="pic">
      <div class="slideInfo"><i class="fas fa-camera"></i> <span>{{ gallery }}</span></div>
    </div>

    <article>
      <div class="itemInfo">
        <h1>{{ item.name }}</h1>
        <p class="price">{{ item.price }} €</p>
      </div>
      <div class="itemOffer">
        <button @click="buy(item._id)">Comprar</button>
        <button @click="add(item._id)">Añadir a la cesta<span v-if="dialogBox" class="box">+1</span></button>        
      </div>      
      <div class="itemCriteria">
        <h3>Criterios</h3>
        <ul>
          <li>Estado: {{ item.state }}</li>
          <li>Marca: {{ item.brand }}</li>
        </ul>
      </div>
      <div class="itemDescription">
        <h3>Description</h3>
        <p class="description">{{ item.description }}</p>
        <ul>
          <li v-for="keyword in item.keywords" :key="keyword">{{ keyword }}</li>
        </ul>  
      </div>
      <div class="itemShare">
        <h3>Compartir anuncio</h3>
        <ul>
          <li>
            <button @click="share('https://grafikart.fr/tutoriels/boutons-partage-social-697', 'https://twitter.com/intent/tweet?text=')">
              <i class="fab fa-twitter"></i>
            </button>
          </li>
          <li>
            <button @click="share('https://grafikart.fr', 'https://www.facebook.com/sharer/sharer.php?u=')">
              <i class="fab fa-facebook"></i>
            </button>
          </li>
          <li>
            <button @click="share('https://grafikart.fr/tutoriels/boutons-partage-social-697', 'https://www.linkedin.com/shareArticle?url=')">
              <i class="fab fa-linkedin"></i>
            </button>
          </li>
          <li>
            <button @click="share('https://grafikart.fr/tutoriels/boutons-partage-social-697', 'whatsapp://send?')">
              <i class="fab fa-whatsapp"></i>
            </button>
          </li>
        </ul>
      </div>
      <div class="itemPayment">
        <h3>Formas de pago</h3>
        <ul>
          <li><i class="fab fa-cc-visa"></i> VISA</li>
          <li><i class="fab fa-paypal"></i> PayPal</li>
          <li><i class="fab fa-bitcoin"></i> Crypto</li>
        </ul>
      </div>    
    </article>
  </main>
</template>

<script>
import { piniaCart } from '@/store/pinia.js'
export default {
  name: 'ItemComp',
  props: {
    item: Object,
    gallery: Number,
    API: String
  },
  data() {
    return {
      dialogBox: false
    }
  },
  methods: {
    toBasket(_id) {
      let basket, quantity = 1, name = this.item.name, price = this.item.price
      "basket" in localStorage ? basket = JSON.parse(localStorage.getItem("basket")) : basket = []
      for (let i = 0; i < basket.length; i++) {
        if (_id == basket[i]._id) {
          quantity += Number(basket[i].quantity)
          basket.splice(i, 1)
        }
      }      
      basket.push({ _id, quantity, name, price })
      localStorage.setItem("basket", JSON.stringify(basket))
      piniaCart().addItem()
    },
    add(_id) {
      this.toBasket(_id)
      this.dialogBox = true
      setTimeout(() => this.dialogBox = false, 1000)
    },
    buy(_id) {
      this.toBasket(_id)
      this.$router.push('/cart')
    },
    share(myUrl, shareUrl) {
      shareUrl = shareUrl + encodeURIComponent(document.title) + " " + encodeURIComponent(myUrl)
      window.open(shareUrl, "Compartir", `scrollbars=yes, width=${window.innerWidth}, height=640, top=0, left=0`)
    },
    expand(itemImg) {
      console.log(itemImg)
    }
  }
}
</script>

<style scoped lang="scss">
.gallery {
  width: 100% !important;
  display: flex;
  flex-wrap: nowrap;
  overflow-y: scroll;
  height: 270px;
  position: relative;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  button {
    position: absolute;
    top: 1rem;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    i {
      font-size: 16px;
    }
    &:first-child {
      left: 1rem;
      
    }
    &:nth-child(2) {
      right: 1rem;
    }
  }
  img {
    height: 100%;
    min-width: 100%;
    object-fit: cover;
  }
  .slideInfo {
    position: absolute;
    top: calc(270px - 4rem);
    width: fit-content;
    left: calc(100% - 4rem);
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 1rem;
    padding: 6px;
    font-size: 0.9rem;
  }
  i, span {
    color: white;
  }
}
article {
  padding: 1rem;
  line-height: 1.6rem;
}
.itemInfo {
  p {
    padding-top: 4px;
    font-weight: 700;
  }
}
.itemOffer {
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  button {
    position: relative;
    font-size: 16px;
    font-weight: 700;
    padding: 0.8rem;
    border-radius: 8px;
    color: white;
  }
  button:first-child {
    border: 1px solid #5bbd5e;
    background-color: #5bbd5e;
  }
  button:last-child {
    border: 1px solid #5bbd5e;
    color: #5bbd5e;
  }
}
.itemCriteria {
  margin: 1rem 0;
}
.itemDescription {
  margin: 1rem 0;
  ul {
    display: flex;
    li {
      margin-right: 4px;
      font-size: 14px;
    }
  }
}
.itemShare {
  margin: 1rem 0;
  ul {
    margin-top: 1rem;
    display: flex;
    width: 50%;
    justify-content: space-between;
  }
  button {
    font-size: 20px;
  }
}
.itemPayment {
  margin: 2rem 0;
  ul {
    width: fit-content;
    margin-top: 1rem;
    border: 1px solid black;
    border-radius: 1rem;
    padding: 1rem 2rem;
    i {
      margin-right: 4px;
    }
  }
}
.box {
  font-size: 32px;
  position: absolute;
  left: 2rem;
  top: 0;
  color: #5bbd5e;
  width: fit-content;
  font-weight: 700;
  animation: dialogBox 1s linear;
  opacity: 0;
}

/* Animation */
@keyframes dialogBox {
  0% {
    top: 0;
    opacity: 0.2;
  } 
  60% {
    top: -2rem;
    opacity: 1;
  }
  100% {
    top: -4rem;
    opacity: 0;
  }
}
</style>