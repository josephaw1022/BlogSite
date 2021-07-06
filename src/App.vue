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
@import url("./animations/transitions.scss");
.diagonal-split-background {
  background-color: #776aa8;
  background-image: -webkit-linear-gradient(
    30deg,
    #847ecf 50%,
    #3534a0 50%
  );
}
</style>

<template>
  <main
    class="min-h-full overflow-x-hidden diagonal-split-background"
  >
    <Navbar />
    <router-view
      v-slot="{ Component, route }"
      v-show="$store.getters.showBodyValue"
    >
      <transition :name="route.meta.transition">
        <component :is="Component" :key="$route.path"> </component>
      </transition>
    </router-view>
  </main>
</template>
