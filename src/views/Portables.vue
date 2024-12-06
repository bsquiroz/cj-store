<script setup lang="ts">
import { ref } from "vue";
import type { Console } from "@/types";
import ConsoleCard from "@/components/shared/ConsoleCard.vue";
import HeaderTitle from "@/components/shared/HeaderTitle.vue";

const portableConsoles = ref<Console[]>([
  {
    id: 1,
    name: "Steam Deck",
    description:
      "The most powerful gaming handheld, bringing your Steam library on the go.",
    imageUrl: "/images/steam-deck.jpg",
    brand: "Portable",
  },
  {
    id: 2,
    name: "ASUS ROG Ally",
    description: "Windows-powered gaming handheld with AMD processor.",
    imageUrl: "/images/rog-ally.jpg",
    brand: "Portable",
  },
  {
    id: 3,
    name: "Legion Go",
    description:
      "Powerful portable Windows gaming with detachable controllers.",
    imageUrl: "/images/legion-go.jpg",
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
          :console="console"
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
