<template>
  <HeroSection /> 
  <BestSellerList /> 
</template>

<script>
import HeroSection from "./HeroSection.vue";
import BestSellerList from './BestSellerList.vue'

export default {
  name: "LandingPage",
  components: { HeroSection, BestSellerList },
};
</script>

<style>
</style>