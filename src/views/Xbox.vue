<script setup lang="ts">
import { ref } from "vue";
import type { Console, Game } from "@/types";
import ConsoleCard from "@/components/shared/ConsoleCard.vue";
import HeaderTitle from "@/components/shared/HeaderTitle.vue";
import GameCard from "@/components/shared/GameCard.vue";

const xboxConsoles = ref<Console[]>([
  {
    id: 1,
    name: "Xbox Series X|S",
    sentence:
      "If you want the best Xbox experience, you will choose the Series X or S.",
    description:
      "Next-gen consoles offering powerful performance with ultra-fast load times, stunning 4K visuals, and support for ray tracing and up to 120 FPS. Perfect for the ultimate gaming experience.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733679241/cj-store/xbox/fxbvokys4c13zkfl3osr.png",
    brand: "Xbox",
  },
  {
    id: 2,
    name: "Xbox One",
    sentence:
      "If you are looking for a reliable console, you can count on the Xbox One",
    description:
      "A versatile console with 1080p gaming capabilities, backward compatibility, and seamless integration with streaming services and multiplayer gaming.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733679241/cj-store/xbox/vmmirqidwtwxduioygih.png",
    brand: "Xbox",
  },
  {
    id: 3,
    name: "Xbox 360",
    sentence:
      "If you love retro gaming, you will enjoy playing on the Xbox 360.",
    description:
      "A legendary console with an extensive library of classic games, revolutionary Xbox Live services, and innovative features like Kinect for motion gaming.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733679241/cj-store/xbox/s6vwdjqeyvg9ujbadqdy.png",
    brand: "Xbox",
  },
  {
    id: 4,
    name: "Xbox Original",
    sentence: "If you are nostalgic, you can still play on the original Xbox.",
    description:
      "The groundbreaking console that introduced the Xbox brand, offering exclusive titles, the first version of Xbox Live, and solid hardware for its time.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733679241/cj-store/xbox/pkwftggibcbdfa2fr1zn.png",
    brand: "Xbox",
  },
]);

const memorableGames = ref<Game[]>([
  {
    id: 1,
    title: "Game Pass",
    sentence:
      "If you want access to hundreds of games, you should try Xbox Game Pass.",
    description:
      "A subscription service offering a vast library of high-quality games for console, PC, and cloud, including new releases on day one from Xbox Game Studios and others.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733679242/cj-store/xbox/yv3nswso3lonnbqi2bbi.png",
  },
  {
    id: 2,
    title: "Xbox Play Anywhere",
    sentence:
      "If you want to play your games anywhere, you will love Xbox Play Anywhere.",
    description:
      "A service that allows you to buy a game once and play it on Xbox consoles, Windows PCs, tablets, mobile phones, TVs, and portable consoles with Windows, with progress and achievements synced seamlessly",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733679241/cj-store/xbox/iafzavktowwa9e8wzlnd.png",
  },
  {
    id: 3,
    title: "Backward Compatibility",
    sentence:
      "If you enjoy playing classic games, you can count on Backward Compatibility.",
    description:
      "A feature that enables you to play hundreds of Xbox 360 and original Xbox games on modern Xbox consoles, often with enhanced visuals and performance",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733679242/cj-store/xbox/mxhosgkmsjwior4tglhi.png",
  },
  {
    id: 4,
    title: "Xbox Cloud Gaming",
    sentence:
      "If you want to play without downloading, you will enjoy Xbox Cloud Gaming.",
    description:
      " service that lets you stream and play games directly from the cloud on devices like smartphones, tablets, and PCs, with no need for installations.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733679241/cj-store/xbox/weoal7vyj5uyiecvprgn.png",
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
          v-bind="console"
        />
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Services
      </h2>
      <div class="flex gap-4 flex-wrap justify-center">
        <GameCard
          v-for="service in memorableGames"
          :key="service.id"
          v-bind="service"
        />
      </div>
    </section>
  </div>
</template>
