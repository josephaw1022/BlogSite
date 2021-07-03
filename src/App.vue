<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  components: {
    Navbar,
  },
});
</script>

<style lang="scss">
@import url("./style/style.scss");
</style>

<template>
  <main
    class="
      min-h-full
      overflow-x-hidden
      bg-gradient-to-tl
      from-gray-400
      via-gray-500
      to-gray-700
    "
  >
    <Navbar />
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component" :key="$route.path"> </component>
      </transition>
    </router-view>
  </main>
</template>
