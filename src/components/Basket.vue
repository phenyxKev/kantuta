<template>
  <main v-if="check(basket)">
    <h2>Mi cesta de compra</h2>
    <article  v-for="item in basket" :key="item._id">
      <span>{{ item.quantity }}</span>
      <h3>{{ item.name }}</h3>
      <span>{{ item.quantity * item.price }} €</span>
      <button @click="deleteItem(item._id)"><i class="fas fa-trash"></i></button>
    </article>
    <hr>
    <div class="total">
      <p>Total</p>
      <span>{{ computeQuantity }}</span>
      <h3>Articulos</h3>
      <span>{{ computePrice }} €</span>
    </div>
  </main>
  <div class="empty">
    <p>Su cesta de compra esta vacia del momento: <router-link to="/store">ver articulos</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'BasketComp',
  props: {
    basket: Object
  },
  computed: {
    computeQuantity: function() {
      let quantity = 0
      this.basket.forEach(element => {
        quantity += element.quantity
      });
      return quantity
    },
    computePrice() {
      let price = 0
      this.basket.forEach(element => {
        price += (element.price * element.quantity)
      });
      return price
    }
  },
  methods: {
    check(check) {
       if (localStorage.getItem("basket")) {
        this.basket.length != null && this.basket.length > 0 ? check = true : check = false  
      } else {
        check = false
      }      
      return check
    },
    deleteItem(itemId) {
      if (confirm("Quiere eliminar este articulo de la cesta ?")) {
        this.$emit("deleteItem", itemId)  
      } else {
        return
      }
    }
  },
  /* Emitters */
  emits: ["deleteItem"]
}
</script>

<style scoped lang="scss">
main {
  min-height: 100vh;
  line-height: 2rem;
  padding: 2rem 1rem;
  width: 100%;
  h2 {
    margin: 4rem 0;
    color: #fc484c;
  }
}
article {
  min-width: 100%;
  max-width: 480px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  span:first-child {
    width: 5%;
  }
  h3 {
    width: 70%;
    text-overflow: ellipsis;
    overflow: auto;
    white-space: nowrap;
  }
  span:nth-child(3) {
    width: 15%;
  }
  button {
    text-align: right;
    width: 10%;
  }
}
hr {
  margin: 1rem 0;
}
.total {
  min-width: 100%;
  max-width: 480px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  p {
    width: 100%;
    margin: 1rem 0;
  }
  span:nth-child(2){
    width: 5%;    
  }
  h3 {
    width: 70%;
  }
}
.empty {
  min-height: 100vh;
  line-height: 2rem;
  margin: 4rem 0;
  padding: 2rem 1rem;
  width: 100%;
  a {
    text-decoration: underline;
    color: #fc484c;
  }
}
</style>