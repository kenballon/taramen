<template>
  <div class="hero-section grid align-center items-center">
    <div class="grid-container container">
     <div class="d-grid grid-row-4 grid-col-3 height-100">
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div class="hero-text-wrapper row-span-2 col-span-2">
         <h1 class="pb-1">Our Ramen Special</h1>
         <h3 class="pb-3 mb-1">Partnered with our Ebi Tempura Alacarte only at Php 150.00</h3>
         <router-link :to="{name: 'Menus'}" class="btn">See Menus</router-link>
       </div>
       <div></div>
       <div></div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style lang="scss" scoped>
.hero-section{
  position: relative;
  background-image: url('../assets/images/ramen.jpg');
  background-position: center;
  background-size: cover;
  height: 900px;
  max-height: 900px;
  color:white;
  h1{
    font-size: 72px;
    width: 19ch;
    line-height: 1.2em;    
  }
  h3{
    width: 25ch;
    font-family: Inter;
    font-size: 2rem;
    font-weight: 300;       
  }
  &::before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    background-color: rgba(0, 0, 0, 0.295);
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .grid-container{
    position: relative;
    z-index: 2;
  }
}
</style>