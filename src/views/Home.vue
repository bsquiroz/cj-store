<script setup lang="ts">
import { ref } from "vue";
import type { Console } from "@/types";
import ConsoleCard from "@/components/shared/ConsoleCard.vue";

const featuredConsoles = ref<Console[]>([
  {
    id: 1,
    name: "PlayStation 5",
    sentence: "If you buy a Play 5, you will enjoy the best gaming experience.",
    description:
      "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514828/cj-store/features/feature-play_bldcog.webp",
    brand: "PlayStation",
  },
  {
    id: 2,
    name: "Xbox Series X",
    sentence:
      "If you remember the first Xbox, you will love seeing the latest model.",
    description:
      "The most powerful Xbox ever, featuring true 4K gaming, up to 120 frames per second, and faster load times.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514828/cj-store/features/feature-xbox_qfdzxf.jpg",
    brand: "Xbox",
  },
  {
    id: 3,
    name: "Nintendo Switch OLED",
    sentence:
      "If you were a fan of Mario, you are probably also a fan of the Switch.",
    description:
      "Featuring a vibrant 7-inch OLED screen, enhanced audio, and a wide adjustable stand.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514828/cj-store/features/feature-nintendo_kuiuoq.avif",
    brand: "Nintendo",
  },
  {
    id: 4,
    name: "Steam Deck Oled 1TB",
    sentence:
      "If the answer to everything above is yes, you will find everything here… You should spend your money on this Steam Deck.",
    description:
      "Equipped with a 7-inch touchscreen display, powerful AMD RDNA 2 graphics, and a custom-designed controller layout for a console-like experience on the go.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733514828/cj-store/features/feature-steam_kudqmm.webp",
    brand: "Portable",
  },
]);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <section
      class="bg-[url('https://res.cloudinary.com/dkxs0typu/image/upload/v1733514830/cj-store/principalBanner_k9qcsc.webp')] bg-cover bg-center h-screen bg-fixed mb-8"
    >
      <div
        class="w-full h-full flex flex-col items-center justify-center text-center bg-black/50"
      >
        <div class="flex gap-2">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to CJ Store
          </h1>
          <figure class="w-10 h-10 rounded-full overflow-hidden">
            <img src="/icon.png" alt="" />
          </figure>
        </div>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Your one-stop destination for all gaming consoles and accessories.
          Experience gaming like never before with our wide selection of
          consoles.
        </p>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Featured Consoles
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ConsoleCard
          v-for="console in featuredConsoles"
          :key="console.id"
          v-bind="console"
        />
      </div>
    </section>

    <section class="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 grid gap-2">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        Gaming Through History
      </h2>
      <p class="text-gray-600 dark:text-gray-300">
        From the early days of the Nintendo Entertainment System to today's
        cutting-edge consoles, gaming has evolved dramatically. Each generation
        brings new innovations, better graphics, and more immersive experiences.
        Our store celebrates this rich history while offering the latest in
        gaming technology.
      </p>

      <p class="text-gray-600 dark:text-gray-300 font-bold">
        If nostalgia makes you smile, you can explore our collection of classic
        consoles and relive the golden era of gaming. And if you are looking for
        the next big thing, we will help you discover the most advanced devices.
        Gaming connects generations, and if you share your love for games, you
        might inspire someone else to start their own journey.
      </p>
    </section>
  </div>
</template>
