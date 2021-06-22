<template>
  <section class="best-seller-wrapper">
    <div class="container">
      <div class="main-dish-menu-wrapper">
        <h1>Our Best Sellers</h1>
        <h4>Most customers Go-To orders.</h4>
      </div>

      <!-- show error when there's no data  -->
      <div class="error" v-if="error">Could not fetch the data...</div>

      <div
        class="cards-item-wrapper d-grid align-center gap-9"
        v-if="documents"
      >
        <div
          class="best-seller-card"
          v-for="doc in documents.slice(0, 6)"
          :key="doc.id"
        >
          <div class="test" v-if="doc.selectedCat == 'Best Seller'">
            <div class="img-container">
              <img :src="doc.coverImgURL" width="250" :alt="doc.dishName" />
            </div>
            <router-link to="#" class="best-seller-link">
              <div class="menu-dets-price d-flex align-center gap-2">
                <h3 :title="doc.dishName">{{ doc.dishName }}</h3>
                <h4>Php {{ doc.price }}.00</h4>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import getCollection from "../composables/getCollection";

export default {
  name: "BestSellerList",
  setup() {    
    const { error, documents } = getCollection("taramen_db_col");

    return { error, documents };
  },
};
</script>

<style lang="scss" scoped>
.best-seller-wrapper {
  padding: 5rem 0 6rem 0;
  .main-dish-menu-wrapper {
    h1 {
      font-size: 5rem;
      font-weight: 900;
      opacity: 0.8;
      padding-top: 32px;
      line-height: 1.2em;
    }
    h4 {
      font-size: 2.5rem;
      font-family: inter;
      font-weight: 300;
      opacity: 0.8;
      padding-bottom: 56px;
    }
  }

  .cards-item-wrapper {
    grid-template-columns: repeat(3, 1fr);
  }

  .best-seller-card {
    .img-container {
      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: center;
      }
    }
    .best-seller-link {
      text-decoration: none;
      &:hover {
        h3 {
          color: #fe0002;
        }
      }
      h3 {
        font-size: 1.75rem;
        width: 16ch;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      h4 {
        font-size: 1rem;
        margin-left: auto;
        padding: 10px;
        background-color: #fe0002;
        color: #fff;
      }
    }
  }
}
</style>