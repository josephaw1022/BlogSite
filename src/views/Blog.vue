<script lang="ts">
import axios from "axios";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Blog",

  methods: {
    scrollTop: function () {
      window.scrollTo(0, 0);
    },
  },

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
      .then((data) => (this.apiData = data.reverse()))
      .catch((error) => console.log(error));
  },
});
</script>

<template>
  <div v-if="apiData.length > 1">
    <section
      class="
        min-h-screen
        grid
        md:grid-cols-2
        grid-cols-1 grid-flow-row
        transform
        gap-2
        justify-center
        items-center
        overflow-y-visible
      "
    >
      <div v-for="article in apiData" :key="article.id">
        <router-link
          :to="{ name: 'BlogDetail', params: { id: article.id } }"
          class="
            transform
            gap-2
            justify-center
            flex
            self-center
            items-center
            mx-5
            h-48
            my-5
          "
        >
          <div
            class="
              h-24
              w-72
              rounded-lg
              p-2
              transform
              lg:text-xl
              flex flex-col flex-wrap
              justify-center
              items-center
              hover:scale-105
              duration-300
              bg-white
              shadow-xl
              hover:shadow-2xl
              text-black
              border-white
              my-3
            "
          >
            <h1>{{ article.title }}</h1>
            <h6>{{ article.date }}</h6>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

