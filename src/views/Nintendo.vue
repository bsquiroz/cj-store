<script setup lang="ts">
import { ref } from "vue";
import type { Console } from "@/types";
import ConsoleCard from "@/components/shared/ConsoleCard.vue";
import HeaderTitle from "@/components/shared/HeaderTitle.vue";

const nintendoConsoles = ref<Console[]>([
  {
    id: 1,
    name: "Nintendo Switch",
    description:
      "If you want to play wherever and whenever you want, the Nintendo Switch is your best option",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733764157/cj-store/nintendo/nintendo-image-switch_ms5ce8.png",
    brand: "Nintendo",
  },
  {
    id: 2,
    name: "Nintendo Wii",
    description:
      "If you're looking for a fun way to play with family and friends, the Nintendo Wii is the perfect console for you",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733764157/cj-store/nintendo/nintendo-image-wii_gmqpoy.png",
    brand: "Nintendo",
  },
  {
    id: 3,
    name: "Nintendo 64",
    description:
      "If you want to relive the golden age of video games, the Nintendo 64 will take you back",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733764157/cj-store/nintendo/nintende-image-64_gt4hh7.png",
    brand: "Nintendo",
  },
  {
    id: 4,
    name: "Gameboy",
    description:
      "If you buy a Game Boy, you'll have portable fun you can take anywhere and classics that never go out of style, all in the palm of your hand.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733764157/cj-store/nintendo/nintendo-image-gameboy_vcoftp.png",
    brand: "Nintendo",
  },
]);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <HeaderTitle title="Nintendo" icon="nintendo" />

    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Available Consoles
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ConsoleCard v-for="console in nintendoConsoles" v-bind="console" />
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Memorable Games
      </h2>
      <p class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Coming soon...
      </p>
    </section>
  </div>
</template>
