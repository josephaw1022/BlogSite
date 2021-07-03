<template>
  <h1
    class="
      text-purple-500
      bg-white
      border-white border-2
      md:text-xl
      text-lg
      p-2
      rounded-lg
      shadow-xl
      transform
      hover:shadow-2xl
      duration-200
      hover:scale-105
    "
  >
    {{ text }}
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Button",
  props: {
    text: String,
  },
});
</script>
