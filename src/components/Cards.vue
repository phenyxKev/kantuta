<template>
  <section class="cards" v-if="products.length > 0">
    <h2>{{ cat }}</h2>
    <article v-for="product in products" :key="product._id">
      <div class="img-container">
        <img :src="`http://localhost:3000/images/${product.img[0]}`" :alt="product.img[0]" />
      </div>
      <div class="info">
        <router-link :to="`/product/${product._id}`">
          <h3>{{ product.name }}</h3>
          <p class="price">{{ product.price }} €</p>
          <p class="description">{{ product.description }}</p>
          <ul>
            <li v-for="keyword in product.keywords" :key="keyword">{{ keyword }}</li>
          </ul>
        </router-link>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'CardComp',
  props: {
    products: Array,
  },
  computed: {
    cat: function (category) {
      switch (this.$route.params.cat) {
        case "leather":
          category = "Cuero"
          break
        default:
          category = "Categoria"
      }
      return category
    }
  }
}
</script>

<style scoped lang="scss">
.cards {
  overflow: hidden;
  margin: auto;
  max-width: 100vw;
  h2 {
    margin: 2rem 0;
    text-align: center;
    color: #fc484c;
  }
}
article {
  max-width: 480px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;
  margin: 3rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  .img-container {
    overflow: hidden;
    max-height: 480px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .info {
    padding: 1rem;
    line-height: 1.6rem;
  }
  .price {
    color: #4e9850;
    font-weight: 700;
  }
  .description {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-right: 4px;
      font-size: 14px;
      &:hover {
        transition: color 0.5s;
        color: #fc484c;
      }
    }
  }
}
</style>