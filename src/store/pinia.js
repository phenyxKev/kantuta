import { defineStore  } from 'pinia'

export const piniaCart = defineStore("cart", {
  state: () => {
    return { cart: localStorage.getItem("basket") ? true : false }
  },
  actions: {
    addItem() {
      this.cart = true
    },
    deleteCart() {
      this.cart = false
    }
  }
})