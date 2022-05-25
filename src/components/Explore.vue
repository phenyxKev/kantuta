<template>
  <div class="slider-container" ref="slider"
    @contextmenu.prevent.stop
  >
    <div 
      class="slide" v-for="(item, i) in products" :key="i"
      ref="slides"
      @dragstart.prevent
      @touchstart="fStart($event, i)"
      @touchend="fEnd"
      @touchmove="fMove"
      @mousedown="fStart($event, i)"
      @mouseup="fEnd"
      @mouseleave="fEnd"
      @mousemove="fMove"
    >
      <h2>{{ item.name }}</h2>
      <h4>{{ item.price }} €</h4>
      <img :src="`http://localhost:3000/images/${item.img[0]}`" :alt="item.img[0]">
      <router-link class="btn" :to="`/product/${item._id}`">Mas detalles</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExploreComp',
  props: {
    products: Array
  },
  data() {
    return {
      isDragging: false,
      startPos: 0,
      index: 0,
      translate: 0,
      direction: 0
    }    
  },
  methods: {
    fStart($event, i) {
      this.index = i
      this.startPos = this.getPositionX($event)
      this.isDragging = true      
      this.$refs.slider.classList.add("grabbing")
    },
    fEnd() {
      if(!this.isDragging) return
      this.isDragging = false
      this.$refs.slider.classList.remove("grabbing")
      if(this.translate > 50 && this.direction === -1 && (this.index < this.$refs.slides.length - 1)) this.index++
      if(this.translate < -50 && this.direction === 1 && (this.index > 0)) this.index--
      this.setTranslateX(this.index)
    },
    fMove($event) {
      if (this.isDragging) {
        const newPos = this.getPositionX($event)
        this.translate = this.startPos - newPos
        this.translate > 0 ? this.direction = -1 : this.direction = 1
      }
    },
    getPositionX($event) {
      return $event.type.includes('mouse') ? $event.pageX : $event.touches[0].clientX
    },
    setTranslateX(i) {
      const width = this.$refs.slider.clientWidth
      this.$refs.slider.style.transform = `translateX(-${width * i}px)`
    }
  }
}
</script>

<style scoped lang="scss">
.slider-container {
  height: 100vh;
  display: inline-flex;
  transform: translateX(0);
  transition: transform 0.3s ease-out;
  cursor: grab;
}
.slide {
  max-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  user-select: none;
}
.slide img {
  max-width: 100%;
  max-height: 60%;
  margin: 4rem;
  user-select: none;
  transition: transform 0.3s ease-in-out;
}
h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
h4 {
  font-size: 1.3rem;
}
.btn {
  border: 1px solid black;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  font-size: 16px;
  font-weight: 700;
}
.grabbing {
  cursor: grabbing;
}
.grabbing .slide img {
  transform: scale(0.9);
}
</style>