<script setup lang="ts">
import { ref } from "vue";
import type { Console, Game } from "@/types";
import ConsoleCard from "@/components/shared/ConsoleCard.vue";
import HeaderTitle from "@/components/shared/HeaderTitle.vue";

const xboxConsoles = ref<Console[]>([
  {
    id: 1,
    name: "Xbox Series X",
    description:
      "The most powerful Xbox ever, featuring true 4K gaming and up to 120 FPS.",
    imageUrl: "/images/xbox-series-x.jpg",
    brand: "Xbox",
  },
  {
    id: 2,
    name: "Xbox Series S",
    description: "Next-gen performance in the smallest Xbox ever.",
    imageUrl: "/images/xbox-series-s.jpg",
    brand: "Xbox",
  },
]);

const memorableGames = ref<Game[]>([
  {
    id: 1,
    title: "Halo Infinite",
    description: "The next chapter in the legendary Halo franchise.",
    imageUrl: "/images/halo.jpg",
    platform: "Xbox Series X|S",
  },
  {
    id: 2,
    title: "Forza Horizon 5",
    description: "Experience the vibrant open world of Mexico.",
    imageUrl: "/images/forza.jpg",
    platform: "Xbox Series X|S",
  },
]);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <HeaderTitle title="Xbox" icon="xbox" />

    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Available Consoles
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ConsoleCard
          v-for="console in xboxConsoles"
          :key="console.id"
          :console="console"
        />
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Memorable Games
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="game in memorableGames"
          :key="game.id"
          class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
        >
          <img
            :src="game.imageUrl"
            :alt="game.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ game.title }}
            </h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              {{ game.description }}
            </p>
            <span
              class="mt-2 inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-2 py-1 rounded text-sm"
            >
              {{ game.platform }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
