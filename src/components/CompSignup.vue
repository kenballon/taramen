<template>
  <form @submit.prevent="handleSignUp" class="form">
    <div class="form-group">
      <label for="displayName">Display Name</label>
      <input
        type="text"
        name="displayName"
        id="displayName"
        placeholder="Display Name"
        required
        v-model="displayName"
        class="f-input"
      />
    </div>
    <div class="form-group">
      <label for="emailAdd">Email Address</label>
      <input
        type="email"
        name="emailAdd"
        id="emailAdd"
        placeholder="john.doe@example.com"
        required
        v-model="emailAdd"
        class="f-input"
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        v-model="password"
        class="f-input"
      />
      <div class="error" v-show="error != null">{{error}}</div>
    </div>
    <div class="form-group">
      <input type="submit" value="Sign Up" class="f-input btn-submit" />
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import userSignup from "../composables/userSignup";

export default {
  name: "CompSignup",
  setup(props, context) {
    const { error, signup, isPending } = userSignup();
    const displayName = ref("");
    const emailAdd = ref("");
    const password = ref("");

    const handleSignUp = async () => {
      await signup(emailAdd.value, password.value, displayName.value);
      if (!error.value) {
        context.emit('signup');
      } 
      
      displayName.value = '';
      emailAdd.value = '';
      password.value = '';
    };   

    return { displayName, emailAdd, password, handleSignUp, error, isPending };
  },
};
</script>

<style>
</style>