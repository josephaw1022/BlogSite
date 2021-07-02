<script lang="ts">
import axios from "axios";
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "Blog",

  data() {
    return {
      apiData: [],
    };
  },

  async mounted() {
    axios
      .get(
        "https://joe-whiteaker-drf-blog.herokuapp.com/api/article/"
      )
      .then((data) => data.data)
      .then((data) => (this.apiData = data))
      .catch((error) => console.log(error));
  },
});
</script>

<template>
  <div v-if="apiData.length > 0">
    <section
      class="
        min-h-screen
        grid grid-cols-2
        gap-2
        justify-items-center
        items-center
      "
      v-for="article in apiData"
      :key="article.id"
    >
      <router-link
        :to="{ name: 'BlogDetail', params: { id: article.id } }"
      >
        <div
          class="
            h-48
            rounded-lg
            p-2
            transform
            lg:text-2xl
            flex flex-col
            gap-2
            justify-center
            items-center
            hover:scale-105
            duration-300
            bg-gradient-to-tr
            from-red-500
            via-blue-500
            to-yellow-500
            text-white
          "
        >
          <h1>{{ article.title }}</h1>
          <h6>{{ article.date }}</h6>
        </div>
      </router-link>
    </section>
  </div>
</template>

