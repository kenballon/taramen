<template>
  <div class="container">
    <div class="main-dish-menu-wrapper">
      <h1>Menus</h1>
      <h4>Anything you crave for we'll deliver it!</h4>
      <MenuCatCards />
    </div>
    
  </div>
</template>

<script>
import MenuCatCards from "../components/MenuCatCards.vue";

export default {
  components: { MenuCatCards },
};
</script>

<style lang="scss" scoped>
.main-dish-menu-wrapper{
  h1{
    font-size: 5rem;
    font-weight: 900;
    opacity: 0.8;   
    padding-top: 32px;
    line-height: 1.2em;
  }
  h4{
    font-size: 2.5rem;
    font-family: inter;
    font-weight: 300;
    opacity: 0.8;  
    padding-bottom: 56px; 
  }  
}
</style>