<script setup lang="ts">
import { ref } from "vue";
import type { Console, Game } from "@/types";
import ConsoleCard from "@/components/shared/ConsoleCard.vue";
import HeaderTitle from "@/components/shared/HeaderTitle.vue";

const playstationConsoles = ref<Console[]>([
  {
    id: 1,
    name: "PlayStation 5",
    description:
      "Next-gen gaming with revolutionary speed, stunning visuals, and innovative features like haptic feedback and adaptive triggers.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514829/cj-store/play-station/play-play5_hubcsy.avif",
    brand: "PlayStation",
  },
  {
    id: 2,
    name: "PlayStation 4",
    description:
      "A powerful console delivering 1080p gaming, seamless multiplayer experiences, and immersive storytelling.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514829/cj-store/play-station/play-play4_koxbwl.png",
    brand: "PlayStation",
  },
  {
    id: 3,
    name: "PlayStation 3",
    description:
      "Introduced high-definition gaming with Blu-ray support and became a hub for media and gaming enthusiasts.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514829/cj-store/play-station/play-play3_bh9kyc.png",
    brand: "PlayStation",
  },
  {
    id: 4,
    name: "PlayStation 2",
    description:
      "One of the best-selling consoles of all time, offering a massive library of iconic games and DVD playback.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514829/cj-store/play-station/play-play2_ra43gb.png",
    brand: "PlayStation",
  },
  {
    id: 5,
    name: "PlayStation 1",
    description:
      "The original PlayStation that revolutionized gaming with 3D graphics and launched iconic franchises.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514829/cj-store/play-station/play-play1_ygbhwh.png",
    brand: "PlayStation",
  },
]);

const memorableGames = ref<Game[]>([
  {
    id: 1,
    title: "Final Fantasy VII",
    description: "Uno de los RPG más influyentes de todos los tiempos.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514828/cj-store/play-station/play-image-ff7_bpejkk.jpg",
    platform: "PS1",
  },
  {
    id: 2,
    title: "Grand Theft Auto: San Andreas",
    description: "Un juego de mundo abierto que revolucionó el género..",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514829/cj-store/play-station/play-image-gta_ocrtnv.jpg",
    platform: "PS2",
  },
  {
    id: 3,
    title: "The Last of Us",
    description: "Un juego de mundo abierto que revolucionó el género..",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514829/cj-store/play-station/play-image-thelast_y1pgph.jpg",
    platform: "PS3",
  },
  {
    id: 4,
    title: "God of War (2018)",
    description: "Un juego de mundo abierto que revolucionó el género..",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514828/cj-store/play-station/play-image-gow_dyr8oh.jpg",
    platform: "PS4",
  },
  {
    id: 5,
    title: "Spider-Man: Miles Morales",
    description:
      "Un juego de acción de superhéroes con un mundo abierto vibrante y una historia cautivadora.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514828/cj-store/play-station/play-image-spider_mr4knf.jpg",
    platform: "PS5",
  },
]);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <HeaderTitle title="Play Station" icon="playStation" />

    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Available Consoles
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ConsoleCard
          v-for="console in playstationConsoles"
          :key="console.id"
          v-bind="console"
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
              class="mt-2 inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-1 rounded text-sm"
            >
              {{ game.platform }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
