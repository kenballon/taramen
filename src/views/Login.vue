<template>
  <div class="login-view d-grid items-center">
    <CompLogin @login="enterAdmin" />
  </div>
</template>

<script>
import CompLogin from "../components/CompLogin.vue";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  components: { CompLogin },
  setup() {
    const router = useRouter();
    const enterAdmin = () => {
      router.push({ name: "Admin" });
    };

    return { enterAdmin };
  },
};
</script>

<style lang="scss" scoped>
</style>