<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Navbar",

  data() {
    return {
      showDropDown: false,
    };
  },

  methods: {
    toggleDropDown: function (): void {
      this.showDropDown = !this.showDropDown;
      this.$store.dispatch({ type: "mobileMenuChange" });
    },
  },
});
</script>


<template>
  <nav>
    <!-- NonMobile Approach -->
    <div
      class="
        hidden
        sticky
        top-100
        h-26
        min-w-full
        md:flex
        justify-evenly
        bg-full
        transform
        scale-75items-center
        gap-1
      "
      id="nav"
      style="background-color: #333"
    >
      <router-link to="/" class="">Home</router-link>
      <span class="text-white"> | </span>
      <router-link to="/bio">Bio</router-link>
      <span class="text-white"> | </span>
      <router-link to="/blog">Blog</router-link>
    </div>

    <!-- Mobile Friendly Approach   -->
    <div
      class="
        flex
        sticky
        top-100
        h-26
        min-w-full
        md:hidden
        justify-between
        bg-full
        transform
        scale-75items-center
        gap-1
      "
      id="nav"
      style="background-color: #333"
    >
      <router-link to="/" class="text-white">Blog Site</router-link>
      <transition name="bounce">
        <div>
          <button
            class="text-purple-500 transform"
            @click="toggleDropDown()"
            v-show="$store.getters.showBodyValue == true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="{2}"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <button
            class="text-purple-500 transform rotate-90"
            @click="toggleDropDown()"
            v-show="$store.getters.showBodyValue == false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="{2}"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </transition>
    </div>

    <!-- Mobile Dropdown -->
    <transition name="slide-left" appear>
      <section v-show="showDropDown">
        <div
          class="
            min-h-screen
            flex flex-col
            justify-evenly
            items-center
            gap-4
            duration-200
            background-animation
          "
        >
          <router-link
            to="/"
            class="text-black bg-white w-48 p-2 rounded-md shadow-lg"
            @click="toggleDropDown()"
            >Home</router-link
          >
          <router-link
            to="/bio"
            class="text-black bg-white w-48 p-2 rounded-md shadow-lg"
            @click="toggleDropDown()"
            >Bio</router-link
          >
          <router-link
            to="/blog"
            class="text-black bg-white w-48 p-2 rounded-md shadow-lg"
            @click="toggleDropDown()"
            >Blog</router-link
          >
        </div>
      </section>
    </transition>
  </nav>
</template>



<style lang="scss">
#nav {
  position: sticky !important;
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #8b5cf6;
    }
  }
}

.bounce-enter-active {
  animation: 360ms bounce-in;
  opacity: 0.5;
}
.bounce-leave-active {
  animation: 500ms bounce-in reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    background-color: transparent;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    background-color: #333 !important;
  }
}

@keyframes backgroundAnimation {
  from {
    background-color: transparent;
  }
  to {
    background-color: #333;
  }
}

.background-animation {
  animation: backgroundAnimation 700ms ease;
  background-color: #333;
}
</style>