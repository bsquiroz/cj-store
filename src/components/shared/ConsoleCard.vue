<script setup lang="ts">
import type { Console } from "@/types";

defineProps<Console>();
</script>

<template>
  <div
    class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
  >
    <img :src="imageUrl" :alt="name" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        {{ name }}
      </h3>
      <p class="mt-2 text-gray-600 dark:text-gray-300">{{ description }}</p>
    </div>
  </div>
</template>
