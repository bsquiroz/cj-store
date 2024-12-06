<script setup lang="ts">
import { ref } from "vue";
import type { Console, Game } from "@/types";
import ConsoleCard from "@/components/shared/ConsoleCard.vue";
import HeaderTitle from "@/components/shared/HeaderTitle.vue";

const nintendoConsoles = ref<Console[]>([
  {
    id: 1,
    name: "Nintendo Switch OLED",
    description:
      "Enhanced gaming experience with a vibrant 7-inch OLED screen.",
    imageUrl: "/images/switch-oled.jpg",
    brand: "Nintendo",
  },
  {
    id: 2,
    name: "Nintendo Switch",
    description: "The hybrid console that lets you play anywhere.",
    imageUrl: "/images/switch.jpg",
    brand: "Nintendo",
  },
]);

const memorableGames = ref<Game[]>([
  {
    id: 1,
    title: "The Legend of Zelda: Tears of the Kingdom",
    description: "Embark on an epic adventure in the kingdom of Hyrule.",
    imageUrl: "/images/zelda.jpg",
    platform: "Nintendo Switch",
  },
  {
    id: 2,
    title: "Super Mario Odyssey",
    description: "Join Mario on a globe-trotting 3D adventure.",
    imageUrl: "/images/mario.jpg",
    platform: "Nintendo Switch",
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
        <ConsoleCard
          v-for="console in nintendoConsoles"
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
              class="mt-2 inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 px-2 py-1 rounded text-sm"
            >
              {{ game.platform }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
