<script setup lang="ts">
import Navbar from "@/components/layout/Navbar.vue";
import WhatsAppButton from "@/components/shared/WhatsAppButton.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors">
    <Navbar />
    <main class="pt-16">
      <router-view />
    </main>
    <WhatsAppButton />
  </div>
</template>
