<script setup lang="ts">
import { ref } from "vue";
import type { Console, Game } from "@/types";
import ConsoleCard from "@/components/shared/ConsoleCard.vue";
import HeaderTitle from "@/components/shared/HeaderTitle.vue";
import GameCard from "@/components/shared/GameCard.vue";

const playstationConsoles = ref<Console[]>([
  {
    id: 1,
    name: "PlayStation 5",
    sentence: "If you are a PlayStation fan, you need one of these.",
    description:
      "Next-gen gaming with revolutionary speed, stunning visuals, and innovative features like haptic feedback and adaptive triggers.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514829/cj-store/play-station/play-play5_hubcsy.avif",
    brand: "PlayStation",
  },
  {
    id: 2,
    name: "PlayStation 4",
    sentence:
      "If you can't afford a Play 5, you will be able to afford a Play 4.",
    description:
      "A powerful console delivering 1080p gaming, seamless multiplayer experiences, and immersive storytelling.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514829/cj-store/play-station/play-play4_koxbwl.png",
    brand: "PlayStation",
  },
  {
    id: 3,
    name: "PlayStation 3",
    sentence: "If you like collecting, you collect the Play 3.",
    description:
      "Introduced high-definition gaming with Blu-ray support and became a hub for media and gaming enthusiasts.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514829/cj-store/play-station/play-play3_bh9kyc.png",
    brand: "PlayStation",
  },
  {
    id: 4,
    name: "PlayStation 2",
    sentence: "If you want the best Play console, you will buy the Play 2.",
    description:
      "One of the best-selling consoles of all time, offering a massive library of iconic games and DVD playback.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514829/cj-store/play-station/play-play2_ra43gb.png",
    brand: "PlayStation",
  },
  {
    id: 5,
    name: "PlayStation 1",
    sentence: "If you are nostalgic, you are introduced to the Play 1.",
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
    sentence: "If you remember this game, you are probably in your 30s or 40s.",
    description:
      "Epic RPG with unforgettable characters, turn-based combat, and stunning story.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514828/cj-store/play-station/play-image-ff7_bpejkk.jpg",
    platform: "PS1",
  },
  {
    id: 2,
    title: "GTA: San Andreas",
    sentence: "If you play GTA, you will commit many crimes.",
    description:
      "Open-world action game with crime, exploration, and unforgettable missions.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514829/cj-store/play-station/play-image-gta_ocrtnv.jpg",
    platform: "PS2",
  },
  {
    id: 3,
    title: "The Last of Us",
    sentence: "If you reach the end of this game, you will be shocked.",
    description:
      "Post-apocalyptic survival story with emotional storytelling and intense gameplay.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514829/cj-store/play-station/play-image-thelast_y1pgph.jpg",
    platform: "PS3",
  },
  {
    id: 4,
    title: "God of War (2018)",
    sentence: "If you know who Kratos is, you have good general knowledge.",
    description:
      "Mythology-driven action game featuring Kratos in an epic father-son journey.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514828/cj-store/play-station/play-image-gow_dyr8oh.jpg",
    platform: "PS4",
  },
  {
    id: 5,
    title: "Spider-Man: MM",
    sentence: "If you play this Spider-Man, you will want to play it again.",
    description:
      "Open-world superhero game featuring Spidey, thrilling action, and captivating narrative.",
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
      <h2
        class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center"
      >
        Memorable Games
      </h2>
      <div class="flex gap-4 flex-wrap justify-center">
        <GameCard v-for="game in memorableGames" :key="game.id" v-bind="game" />
      </div>
    </section>
  </div>
</template>
