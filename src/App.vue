<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Navbar from "./components/Navbar.vue";
import AOS from "aos";

export default defineComponent({
  created() {
    AOS.init();
  },
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
      from-purple-500
      via-black
      to-green-500
    "
  >
    <Navbar />
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition" mode="out-in">
        <component :is="Component" :key="$route.path"> </component>
      </transition>
    </router-view>
  </main>
</template>
