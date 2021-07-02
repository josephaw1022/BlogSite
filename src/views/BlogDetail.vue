<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import axios from "axios";
export default defineComponent({
  data() {
    return {
      value: {
        title: "",
        content: "",
        date: new Date(),
        active: true,
      },
      id: String(this.$route.params.id),
      url: "https://joe-whiteaker-drf-blog.herokuapp.com/api/article/",
    };
  },
  async mounted() {
    await this.id;
    axios
      .get(this.url + this.id)
      .then((value) => value.data)
      .then((value) => (this.value = value))
      .catch((error) => console.log(error));
  },
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@200&display=swap");
.blog-detail {
  font-family: "Work Sans", sans-serif;
}
</style>

<template>
  <div
    class="
      blog-detail
      min-h-screen
      text-4xl
      flex flex-col
      justify-start
      items-center
      bg-white
      gap-10
    "
  >
    <div class="my-10">
      <h1
        class="text-black text-md sm:text-md md:text-2xl lg:text-4xl"
      >
        {{ value.title }}
      </h1>
      <h6 class="text-black text-xs sm:text-md md:text-lg">
        {{ value.date.toString() }}
      </h6>
      <br />
    </div>

    <div class="w-32 md:w-48 lg:w-80 h-auto">
      <p class="text-black text-sm sm:text-md break-word">
        {{ value.content }}
      </p>
    </div>
  </div>
</template>
