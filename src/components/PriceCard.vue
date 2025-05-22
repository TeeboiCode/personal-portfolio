<template>
  <div :class="['card-custom h-100', highlight ? 'border border-warning' : '']">
    <div class="section-title mb-2">{{ plan }}</div>
    <div class="fw-bold mb-2" style="font-size: 2rem">{{ price }}</div>
    <ul class="list-unstyled mb-3">
      <li v-for="(feature, i) in features" :key="i" class="mb-1">
        <i class="bi bi-check-circle text-accent me-2"></i>{{ feature }}
      </li>
    </ul>
    <button class="btn btn-accent btn-sm w-100">ORDER NOW</button>
  </div>
</template>

<script setup>
defineProps({
  plan: String,
  price: String,
  features: Array,
  highlight: Boolean,
});
</script>
