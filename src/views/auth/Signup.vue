<template>
  <div class="login-view d-grid items-center">
    <CompSignup @signup="enterAdmin" />
  </div>
</template>

<script>
import CompSignup from "@/components/CompSignup.vue";
import { useRouter } from "vue-router";

export default {
  name: "Signup",
  components: { CompSignup },
  setup() {
    const router = useRouter();
    const enterAdmin = () => {
      router.push({ name: "Admin" });
    };

    return { enterAdmin };
  },
};
</script>

<style>
</style>