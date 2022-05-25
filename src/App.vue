<template>
   <router-view />
</template>

<script>
export default {
	name: "App"
}
</script>

<style lang="scss">
#app {
   position: relative;
   min-height: 100vh;
   max-width: 992px;
   margin: auto;
   display: flex;
   flex-wrap: nowrap;
   flex-direction: column;
   overflow: hidden;
}
* {   
   box-sizing: border-box;
   font-family: "Ubuntu",
      -apple-system,
      BlinkMacSystemFont,
      Roboto,
      "Segoe UI",
      Helvetica,
      Arial,
      sans-serif;
   margin: 0;
   padding: 0;
   color: rgb(32,32,32);;
}
ul {
   list-style: none;
}
a {
   color: inherit;
   text-decoration: none;
}
button {
   background: transparent;
   border: none;
   outline: 0;
   color: inherit;
   cursor: pointer;
   &:active {
      transform: scale(0.94);
   }
}

/* Hide scrollBar when aside is on */
.hide-scrollBar {
   overflow: hidden;
}

/* Animations */
@keyframes anim {
   from {
      transform: translateX(-1.5rem);
      opacity: 0.4;
   } to {
      opacity: 1;
   }
}

/* +> 992px screens */
@media screen and (min-width: 992px) {
   #app {
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      border-left: 1px solid rgba(0, 0, 0, 0.1);;
   }
}
</style>