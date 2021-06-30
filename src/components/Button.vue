<template>
  <div
    class="
      flex-col flex
      bg-gradient-to-r
      rounded-lg
      shadow-lg
      p-1
      gap-1
      lg:scale-150
    "
  >
    <h1
      class="
        text-purple-500
        bg-white
        border-white border-2
        md:text-xl
        text-lg
        p-2
        rounded-sm
      "
    >
      {{ text }}
    </h1>
  </div>
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
