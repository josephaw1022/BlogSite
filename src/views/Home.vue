<script lang="ts">
import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src
import { defineComponent } from "@vue/composition-api";
import Button from "../components/Button.vue";
export default defineComponent({
  components: {
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
      <div
        class="
          min-h-screen
          flex flex-col
          gap-5
          justify-center
          items-center
          bg-transparent
        "
      >
        <h1 class="text-white text-2xl lg:text-4xl">
          Whiteaker's Blog
        </h1>
        <div
          class="
            gap-8
            sm:gap-4
            flex flex-wrap flex-row
            justify-evenly
          "
        >
          <a
            href="https://joe-whiteaker-linktree.herokuapp.com/"
            target="_blank"
          >
            <Button text="Link tree" />
          </a>

          <Button text="Contact Me" />

          <a
            href="https://joseph-whiteaker.netlify.app/"
            target="_blank"
          >
            <Button text="Portfolio Site"></Button>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
