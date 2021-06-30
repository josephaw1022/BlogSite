<script lang="ts">
import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src
import { defineComponent } from "@vue/composition-api";
import Button from "../components/Button.vue";
export default defineComponent({
  components: {
    HelloWorld,
    Button,
  },
});
</script>

<style lang="scss" scoped>
.customWidth {
  width: 70vw;
}
</style>

<template>
  <div class="justify-evenly flex flex-col items-center">
    <section class="div">
      <HelloWorld
        data-aos="zoom-in-up"
        msg="Welcome to Your Vue.js + TypeScript App"
      />
    </section>
    <div
      class="
        customWidth
        min-h-screen
        flex flex-col
        items-center
        justify-evenly
        gap-2
      "
    >
      <h1
        data-aos="zoom-in"
        class="text-white rounded-lg p-1 text-4xl lg:text-6xl my-4"
      >
        My Links
      </h1>
      <div
        class="gap-8 sm:gap-4 flex flex-wrap flex-row justify-evenly"
      >
        <a
          href="https://joe-whiteaker-linktree.herokuapp.com/"
          target="_blank"
        >
          <Button text="Link tree" data-aos="fade-left" />
        </a>

        <Button text="Contact Me" data-aos="zoom-in" />

        <a
          href="https://joseph-whiteaker.netlify.app/"
          target="_blank"
        >
          <Button
            text="Portfolio Site"
            data-aos="fade-right"
          ></Button>
        </a>
      </div>
    </div>
  </div>
</template>
