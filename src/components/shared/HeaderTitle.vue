<script setup lang="ts">
import type { HeaderTitle, IconTypeHeader } from "@/types";

defineProps<HeaderTitle>();

const nameIcon: Record<IconTypeHeader, string> = {
  playStation: "/icons/playstation.png",
  maintenance: "/icons/maintenance.png",
  nintendo: "/icons/nintendo.png",
  portableConsoles: "/icons/portableConsoles.png",
  xbox: "/icons/xbox.png",
};
</script>

<template>
  <header class="flex items-center gap-4 mb-5">
    <h2 class="text-4xl font-bold text-gray-900 dark:text-white tracking-wide">
      {{ title }}
    </h2>
    <figure class="w-10">
      <img :src="nameIcon[icon]" :alt="icon" />
    </figure>
  </header>
</template>
