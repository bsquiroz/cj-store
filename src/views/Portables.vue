<script setup lang="ts">
import { ref } from "vue";
import type { Console } from "@/types";
import ConsoleCard from "@/components/shared/ConsoleCard.vue";
import HeaderTitle from "@/components/shared/HeaderTitle.vue";

const portableConsoles = ref<Console[]>([
  {
    id: 1,
    name: "Steam Deck",
    sentence:
      "If you want a powerful handheld gaming experience, you will enjoy the Steam Deck.",
    description:
      "A portable gaming console that lets you play PC games on the go with full access to your Steam library, featuring powerful hardware and customizable controls.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733679971/cj-store/portables-consoles/portables-image-steam-deck_h8vd4n.png",
    brand: "Portable",
  },
  {
    id: 2,
    name: "ASUS ROG Ally",
    sentence:
      "If you want top-tier performance in a handheld device, you should try the ASUS ROG Ally.",
    description:
      "A high-performance gaming console designed for portable PC gaming, offering impressive hardware, a 120Hz display, and compatibility with Windows games and Xbox Game Pass.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733679971/cj-store/portables-consoles/portables-images-ara_naxkqq.png",
    brand: "Portable",
  },
  {
    id: 3,
    name: "Odin Pro",
    sentence:
      "If you love retro gaming and modern Android games, you will enjoy the Odin Pro.",
    description:
      "A versatile handheld console that runs on Android, perfect for retro emulation and playing modern mobile games, with an ergonomic design and powerful performance.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733679971/cj-store/portables-consoles/portables-image-odin_p89riz.png",
    brand: "Portable",
  },
  {
    id: 4,
    name: "Legion Go",
    sentence:
      "If you want a cutting-edge portable gaming device, you can rely on Legion Go.",
    description:
      "A portable Windows gaming console featuring detachable controllers, a high-resolution display, and support for AAA PC games, making it a versatile option for gaming anywhere.",
    imageUrl:
      "https://res.cloudinary.com/dkxs0typu/image/upload/v1733679971/cj-store/portables-consoles/portables-image-legion_e3kuie.png",
    brand: "Portable",
  },
]);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <HeaderTitle title="Portable Gaming PCs" icon="portableConsoles" />

    <section>
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        Available Handhelds
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ConsoleCard
          v-for="console in portableConsoles"
          :key="console.id"
          v-bind="console"
        />
      </div>
    </section>

    <section class="mt-12 bg-gray-100 dark:bg-gray-700 rounded-lg p-8">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Why Choose a Portable Gaming PC?
      </h2>
      <ul class="space-y-4 text-gray-600 dark:text-gray-300">
        <li>• Access your entire PC game library on the go</li>
        <li>• Powerful hardware capable of running modern games</li>
        <li>• Versatility of Windows or SteamOS</li>
        <li>• Perfect for both gaming and productivity</li>
      </ul>
    </section>
  </div>
</template>
