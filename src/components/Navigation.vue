<template>
  <header>
    <nav class="container">
      <div class="nav-wrapper d-flex align-center justify-between">
        <div class="branding">
          <router-link :to="{ name: 'Home' }">
            <img
              src="../assets/images/menu/Taramen-logo.svg"
              width="85"
              alt="Taramen Logo"
            />
          </router-link>
        </div>

        <div class="menu-primary-navigation-container">
          <ul class="ul-nav-links-wrapper d-flex align-center">
            <li>
              <router-link class="nav-links_text" :to="{ name: 'Home' }"
                >Home</router-link
              >
            </li>
            <li class="sub-menu">
              <router-link :to="{ name: 'Menus' }" class="nav-links_text"
                >Our Menus</router-link
              >
              <div class="submenu-cat">
                <div class="d-grid grid-col-auto-fit-250 gap-3 container">
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
            </li>
            <li>
              <router-link class="nav-links_text" :to="{ name: 'About' }"
                >About Us</router-link
              >
            </li>
          </ul>
        </div>

        <div v-if="user">
          <div>User: {{ user.displayName }}</div>
          <div>email: {{ user.email }}</div>
        </div>

        <div v-if="user">
          <input type="button" value="Logout" @click="handleLogout" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import userLogout from "../composables/userLogout";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";

export default {
  name: "Navigation",
  setup() {
    const router = useRouter();
    const { logout, error } = userLogout();
    const { user } = getUser();

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        console.log("User logged out.");
        router.push({ name: "Login" });
      }
    };

    return { handleLogout, error, user };
  },
};
</script>

<style lang="scss" scoped>
header {
  nav {
    @supports (padding-block: 10px) {
      padding-block: 10px;
    }
    padding-top: 10px;
    padding-bottom: 10px;

    .ul-nav-links-wrapper {
      li {
        .nav-links_text {
          position: relative;
          padding: 20px;
          font-family: "Manrope";
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 1.13rem;
          text-decoration: none;
          font-weight: 500;
          opacity: 0.8;
          color: #290000;
          transition: color 0.5s ease;

          &::after {
            content: "";
            right: 20px;
            height: 3px;
            position: absolute;
            bottom: 0;
            left: 20px;
            background-color: #ff0000;
            transition: all 0.3s ease;
            width: 0;
          }

          &:hover {
            color: #ff0000;
            &::after {
              width: calc(100% - 40px);
              opacity: 1;
            }
          }
        }
        .submenu-cat {
          position: absolute;
          top: 87px;
          right: 0;
          left: 0;
          padding: 2.5rem;
          overflow: hidden;
          justify-content: center;
          flex-flow: wrap;
          background: #ffe4e5;
          border-top: 1px solid #ff0000;
          z-index: 3;
          visibility: hidden;
          opacity: 1;
          transition: visibilty 0.5s ease;

          .menu-cat {
            cursor: pointer;
            background-color: #fff;
            box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
            .menu-cat_cards {
              text-decoration: none;
              color: #290000;
              transition: color 0.5s ease;
              img {
                width: 100%;
                height: 204px;
                object-fit: cover;
                object-position: center;
              }
              h3 {
                font-family: "Inter";
                font-size: 1.25rem;
                font-weight: 600;
                letter-spacing: 1px;
                text-transform: uppercase;
                padding: 15px;
                opacity: 0.8;          
              }
              &:hover {
                color: #ff0000;
                img{
                  opacity: 0.7;
                }
              }
            }
          }
        }
      }

      .sub-menu {
        &:hover {
          .submenu-cat {
            visibility: visible;
          }
        }
      }
    }

    .nav-wrapper {
      .menu-primary-navigation-container {
        ul {
          list-style: none;
        }
      }
    }
  }
}
</style>