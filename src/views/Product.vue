<template>
  <Item :item="item" :gallery="gallery" />
  <Footer />
  <Nav />
</template>

<script>
import API from "../../api.js"
import Item from "@/components/Item.vue"
import Footer from "@/components/Footer.vue"
import Nav from "@/components/Nav.vue"

export default {
  name: "ProductView",
  components: {
    Item,
    Footer,
    Nav
  },
  data() {
    return {
      item: {},
      gallery: 0
    }
  },
  methods: {
    async getItem(id) {
      const resItem = await fetch(`${API}/api/products/item/${id}`)
      const data = await resItem.json()
      data.pic = `${API}/images/${data.img[0]}`
      return data
    }
  },
  async created() {
    this.item = await this.getItem(this.$route.params.id)
    this.gallery = this.item.img.length
  }
}
</script>