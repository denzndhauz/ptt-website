<template>
  <div :class="['flex items-center gap-3 group', containerClass]">
    <div class="relative flex-shrink-0">
      <img
        src="/pttlogo.png"
        alt="PTT IT-Solutions Logo"
        :class="['transition-transform duration-300 group-hover:scale-105', logoClass]"
      />
    </div>
    <div v-if="!showIconOnly" class="flex flex-col leading-tight">
      <span class="text-xl font-bold tracking-tighter text-white">
        ptt<span class="text-primary">it</span>solutions
      </span>
      <span class="text-[8px] uppercase tracking-[0.1em] text-text-muted font-bold -mt-0.5">
        Our service speaks for itself.
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  containerClass: {
    type: String,
    default: ''
  },
  logoClass: {
    type: String,
    default: 'w-10 h-10 object-contain'
  },
  showIconOnly: {
    type: Boolean,
    default: false
  }
})
</script>
