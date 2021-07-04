<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import axios from "axios";
import router from "../routes/index";
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
      url: "https://all-sites-api-22.herokuapp.com/api/article/",
      contentFormatted: [],
    };
  },
  async mounted() {
    axios
      .get(this.url + this.id)
      .then((data) => data.data)
      .then((data) => (this.apiData = data))
      .then((data) => (this.value = data))
      .then(
        (data) =>
          (this.contentFormatted = data.content
            .split("\\r")
            .filter((eachValue: string) => {
              if (eachValue != "\\n\\n\r") {
                return eachValue;
              }
            }))
      )
      .then((data) => (this.contentFormattedt = data))
      .then(() =>
        console.log("contentFormatted, ", this.contentFormatted)
      )
      .catch((error) => console.log(error));
  },
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@200&display=swap");
.blog-detail {
  font-family: "Work Sans", sans-serif;
}

@keyframes fadeInAnimation {
  from {
    transform: scale(0);
  }
  to {
    tranform: scale(1);
  }
}

.fadeIn {
  animation: fadeInAnimation 400ms ease;
}
</style>

<template>
  <div
    class="
      h-24
      flex
      justify-between
      items-center
      bg-white
      px-10
      min-h-full
    "
  >
    <router-link class="text-black" to="/blog">Back</router-link>
  </div>
  <div
    class="
      blog-detail
      min-h-screen
      text-4xl
      flex flex-col
      justify-start
      items-center
      bg-white
      gap-5
    "
  >
    <div class="my-10 fadeIn">
      <h1
        v-show="value.title != undefined"
        class="text-black text-md sm:text-md md:text-2xl lg:text-4xl"
      >
        {{ value.title }}
      </h1>
      <h6 class="text-black text-xs sm:text-md md:text-lg">
        {{ value.date.toString() }}
      </h6>
      <br />
    </div>

    <div
      class="tranform md:w-92 h-auto fadeIn mx-5 px-5"
      v-for="paragraphs in contentFormatted"
      :key="paragraphs[0]"
    >
      <p
        class="
          text-black text-sm
          sm:text-lg
          break-word
          text-left
          my-3
        "
      >
        {{ "    " + paragraphs.replace("\\r", "").toString() }}
      </p>
    </div>
  </div>
</template>
