<template>
  <section
    class="
      min-h-screen
      bg-transparent
      flex flex-col
      justify-center
      items-center
    "
  >
    <div
      class="
        bg-white
        h-56
        w-56
        md:w-64
        lg:w-80
        border-white border-8
        rounded-2xl
        shadow-xl
      "
    >
      <h1 class="text-black-400 text-xl py-2">Sign up or Login?</h1>
      <div
        class="
          flex flex-col
          md:flex-row
          gap-2
          justify-evenly
          items-center
          h-full
        "
      >
        <button
          class="
            text-black-400
            bg-yellow-400
            border-yellow-400 border-4
            rounded-lg
            p-1
            shadow-lg
            transform
            hover:scale-105 hover:shadow-xl hover:text-3xl
            mx-2
            my-2
          "
        >
          Login
        </button>
        <button
          class="
            text-black-400
            bg-yellow-400
            border-yellow-400 border-4
            rounded-lg
            p-1
            shadow-lg
            active:border-0
            transform
            hover:scale-105 hover:shadow-xl
            mx-2
            my-3
            hover:text-3xl
          "
        >
          Signup
        </button>
      </div>
    </div>
  </section>
</template>
