<script lang="ts">
import { defineComponent } from "@vue/composition-api";

interface DataModel {
  name: string;
}

export default defineComponent({
  props: {
    msg: String,
  },

  data() {
    return {
      state: {
        name: "Joe",
      } as DataModel,
    };
  },
});
</script>

<template>
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
        <span class="text-purple-600"> Welcome to</span> the Whit Blog
      </h1>
    </div>
  </div>
</template>
