<script setup lang="ts">
const phoneNumber = "+1234567890"; // Replace with actual phone number
</script>

<template>
  <a
    :href="phoneNumber"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-50"
  >
    <figure class="w-10">
      <img src="/icons/social.png" alt="social" />
    </figure>
  </a>
</template>
