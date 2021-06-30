<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Navbar",
});
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #8b5cf6;
    }
  }
}
</style>

<template>
  <div
    class="
      h-26
      min-w-full
      flex
      justify-evenly
      bg-full
      transform
      scale-75items-center
      gap-1
    "
    id="nav"
    style="background-color: #333"
  >
    <router-link to="/" class="">Home</router-link>
    <span class="text-white"> | </span>
    <router-link to="/bio">Bio</router-link>
    <span class="text-white"> | </span>
    <router-link to="/blog">Blog</router-link>
  </div>
</template>
