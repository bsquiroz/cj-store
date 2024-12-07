<script setup lang="ts">
import Navbar from "@/components/layout/Navbar.vue";
import WhatsAppButton from "@/components/shared/WhatsAppButton.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors">
    <Navbar />
    <main class="pt-16">
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
    </main>
    <WhatsAppButton />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
