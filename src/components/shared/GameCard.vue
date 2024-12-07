<script setup lang="ts">
import { Game } from "@/types";

defineProps<Game>();
</script>

<template>
  <article
    class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden sm:max-w-[250px] flex flex-col"
  >
    <div class="relative group">
      <div
        v-if="sentence"
        class="absolute bg-black/80 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center p-2"
      >
        <p class="text-white text-center">
          <strong>{{ sentence }}</strong>
        </p>
      </div>
      <img
        :src="imageUrl"
        :alt="title"
        class="aspect-video object-cover cursor-pointer"
      />
    </div>
    <div class="flex-1 p-4 flex flex-col gap-2 items-start justify-between">
      <div class="relative">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          {{ title }}
        </h3>
      </div>

      <p class="text-gray-600 dark:text-gray-300">
        {{ description }}
      </p>
      <span
        class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-1 rounded text-sm"
      >
        {{ platform }}
      </span>
    </div>
  </article>
</template>
