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
          flex
          justify-center
          items-center
          bg-transparent
        "
      >
        <div
          class="
            flex-col flex
            bg-gradient-to-r
            rounded-lg
            shadow-lg
            p-2
            gap-2
            mx-2
          "
        >
          <h1
            class="
              text-purple-500
              bg-white
              border-white border-2
              md:text-4xl
              text-lg
              p-2
              rounded-sm
            "
          >
            <span class="text-purple-600"> Welcome to</span> the Whit
            Blog
          </h1>
        </div>
      </div>
    </section>
    <div
      class="
        customWidth
        h-72
        min-h-full
        flex flex-col
        items-center
        justify-start
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
