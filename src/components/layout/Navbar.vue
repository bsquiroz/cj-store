<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";

const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <nav class="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link
            to="/"
            class="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2"
          >
            CJ Store
            <figure class="w-6 h-6 rounded-full overflow-hidden">
              <img src="/icon.png" alt="icon cj store" />
            </figure>
          </router-link>
        </div>
        <div class="flex items-center space-x-4">
          <router-link
            v-for="link in [
              'PlayStation',
              'Xbox',
              'Nintendo',
              'Portables',
              'Maintenance',
            ]"
            :key="link"
            :to="'/' + link.toLowerCase()"
            class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            active-class="text-green-500 dark:text-green-400"
          >
            {{ link }}
          </router-link>
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <SunIcon v-if="isDark" class="h-5 w-5 text-gray-300" />
            <MoonIcon v-else class="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
