<template>
  <div class="submenu-cat">
    <div class="submenu-cat_wrapper d-grid gap-3 container">
      <div class="menu-cat">
        <router-link to="#" class="menu-cat_cards">
          <img
            src="../assets/images/tempura.jpg"
            alt="ramen category"
            width="250"
          />
          <h3>Starter</h3>
        </router-link>
      </div>
      <div class="menu-cat">
        <router-link to="#" class="menu-cat_cards">
          <img
            src="../assets/images/ramen.jpg"
            alt="ramen category"
            width="250"
          />
          <h3>Ramen</h3>
        </router-link>
      </div>
      <div class="menu-cat">
        <router-link to="#" class="menu-cat_cards">
          <img
            src="../assets/images/calimaki.jpg"
            alt="ramen category"
            width="250"
          />
          <h3>Maki & Sushi Roll</h3>
        </router-link>
      </div>
      <div class="menu-cat">
        <router-link to="#" class="menu-cat_cards">
          <img
            src="../assets/images/chickenwings.jpg"
            alt="ramen category"
            width="250"
          />
          <h3>Chicken Wings</h3>
        </router-link>
      </div>
      <div class="menu-cat">
        <router-link to="#" class="menu-cat_cards">
          <img
            src="../assets/images/tempura2.jpg"
            alt="ramen category"
            width="250"
          />
          <h3>Alacarte</h3>
        </router-link>
      </div>
      <div class="menu-cat">
        <router-link to="#" class="menu-cat_cards">
          <img
            src="../assets/images/milktea.jpg"
            alt="ramen category"
            width="250"
          />
          <h3>Drinks</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCatCards",
};
</script>

<style>
</style>