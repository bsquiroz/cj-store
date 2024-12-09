<script setup lang="ts">
import { ref } from "vue";
import type { MaintenanceService } from "@/types";
import HeaderTitle from "@/components/shared/HeaderTitle.vue";

const services = ref<MaintenanceService[]>([
  {
    id: 1,
    title: "Console Cleaning",
    description:
      "Deep cleaning of your console to remove dust and maintain optimal performance.",
    type: "preventive",
  },
  {
    id: 2,
    title: "Thermal Paste Replacement",
    description:
      "Replace thermal compound to ensure proper cooling and prevent overheating.",
    type: "preventive",
  },
  {
    id: 3,
    title: "Hardware Repair",
    description:
      "Fix hardware issues including HDMI ports, power supplies, and disc drives.",
    type: "corrective",
  },
  {
    id: 4,
    title: "Controller Repair",
    description:
      "Fix stick drift, button issues, and other controller problems.",
    type: "corrective",
  },
]);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <HeaderTitle title="Maintenance" icon="maintenance" />

    <p
      class="text-2xl font-semibold text-gray-900 dark:text-white my-6 text-center"
    >
      <strong>If you care about your console, we'll take even more care</strong>
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <section>
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Preventive Maintenance
        </h2>
        <div class="space-y-4">
          <div
            v-for="service in services.filter((s) => s.type === 'preventive')"
            :key="service.id"
            class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ service.title }}
            </h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              {{ service.description }}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Corrective Maintenance
        </h2>
        <div class="space-y-4">
          <div
            v-for="service in services.filter((s) => s.type === 'corrective')"
            :key="service.id"
            class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ service.title }}
            </h3>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              {{ service.description }}
            </p>
          </div>
        </div>
      </section>
    </div>

    <section class="mt-12 bg-gray-100 dark:bg-gray-700 rounded-lg p-8">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Why Choose Our Service?
      </h2>
      <ul class="space-y-4 text-gray-600 dark:text-gray-300">
        <li>• Expert technicians with years of experience</li>
        <li>• Genuine replacement parts</li>
        <li>• Quick turnaround time</li>
        <li>• Warranty on all repairs</li>
      </ul>
    </section>
  </div>
</template>
