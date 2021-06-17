<template>
  <header>
    <nav class="container">
      <div class="nav-wrapper d-flex align-center">
        <div class="branding">
          <router-link :to="{ name: 'Home' }">
            <img
              src="../assets/images/menu/Taramen-logo.svg"
              width="85"
              alt="Taramen Logo"
            />
          </router-link>
        </div>

        <div class="menu-primary-navigation-container d-flex gap-9">
          <ul class="ul-nav-links-wrapper d-flex align-center">
            <li>
              <router-link class="nav-links_text" :to="{ name: 'Home' }"
                >Home</router-link
              >
            </li>
            <li class="sub-menu">
              <router-link :to="{ name: 'MenuCat' }" class="nav-links_text"
                >Our Menus</router-link
              >
              <!-- insert Menu category ui component  -->
              <MenuCatCards />
            </li>
            <li>
              <router-link class="nav-links_text" :to="{ name: 'About' }"
                >About Us</router-link
              >
            </li>
            <li v-if="user">
              <router-link class="nav-links_text" :to="{ name: 'Admin' }"
                >Post new dish</router-link
              >
            </li>
          </ul>

          <div class="login-user-wrapper d-flex align-center gap-3" v-if="user">
            <div class="d-flex align-center gap-1">
              <h4>{{ user.displayName }}</h4>
              <img src="../assets/images/menu/login.svg" width="20" alt="" />
            </div>
            <input
              type="button"
              value="Logout"
              @click="handleLogout"
              class="logout-btn"
            />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import userLogout from "../composables/userLogout";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import MenuCatCards from "../components/MenuCatCards.vue";

export default {
  name: "Navigation",
  components: { MenuCatCards },
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
          background: #ffe4e5;
          position: absolute;
          top: 87px;
          right: 0;
          left: 0;
          padding: 2.5rem;
          overflow: hidden;
          justify-content: center;
          flex-flow: wrap;
          z-index: 3;
          opacity: 1;
          transition: display 0.5s ease;
          display: none;          
        }
      }

      .sub-menu {
        &:hover {
          .submenu-cat {
            display: block;
          }
        }
      }
    }

    .nav-wrapper {
      .menu-primary-navigation-container {
        margin-left: auto;
        ul {
          list-style: none;
        }

        .login-user-wrapper {
          h4 {
            font-family: "Manrope";
            font-size: 1.13rem;
            font-weight: 500;
            opacity: 0.8;
            color: #290000;
            transition: color 0.5s ease;
            text-transform: uppercase;
          }
          .logout-btn {
            background-color: transparent;
            font-family: "Manrope";
            font-size: 1.13rem;
            font-weight: 500;
            opacity: 0.8;
            color: #290000;
            transition: color 0.5s ease;

            &:hover {
              color: #ff0000;
            }
          }
        }
      }
    }
  }
}
</style>