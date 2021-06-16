<template>
  <form @submit.prevent="handleLogin" class="form">
    <div class="form-group">
      <label for="emailAdd">Email Address</label>
      <input
        class="f-input"
        type="email"
        name="emailAdd"
        id="emailAdd"
        placeholder="Email"
        required
        v-model="emailAdd"
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        class="f-input"
        type="password"
        name="password"
        id="password"
        v-model="password"
      />
    </div>
    <div class="error" v-show="error != null">{{ error }}</div>
    <div class="form-group">
      <input type="submit" value="Login" class="f-input btn-submit" />
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import userLogin from "../composables/userLogin";

export default {
  name: "CompLogin",
  setup(props, context) {
    const { error, login } = userLogin();
    const emailAdd = ref("");
    const password = ref("");

    const handleLogin = async () => {
      await login(emailAdd.value, password.value);
      if (!error.value) {
        context.emit('login');
      }
    };

    return { emailAdd, password, handleLogin, error };
  },
};
</script>

<style>
</style>