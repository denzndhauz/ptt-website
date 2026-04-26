<template>
  <div class="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 pointer-events-none">
    
    <!-- Chat Window -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform scale-95 opacity-0 translate-y-4"
      enter-to-class="transform scale-100 opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform scale-100 opacity-100 translate-y-0"
      leave-to-class="transform scale-95 opacity-0 translate-y-4"
    >
      <div v-if="isOpen" class="w-[350px] bg-background-card rounded-2xl shadow-2xl border border-white/10 overflow-hidden pointer-events-auto">
        <!-- Header -->
        <div class="bg-primary p-4 flex items-center justify-between shadow-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/10 overflow-hidden">
              <img src="/pttlogo.png" alt="PTT" class="w-full h-full object-contain" />
            </div>
            <div>
              <h4 class="text-white font-bold leading-tight">PTT IT-Solutions</h4>
              <p class="text-white/70 text-[10px] flex items-center gap-1">
                <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                Typically replies in minutes
              </p>
            </div>
          </div>
          <button @click="isOpen = false" class="text-white/80 hover:text-white transition-colors">
            <Icon name="heroicons:x-mark" class="w-6 h-6" />
          </button>
        </div>

        <!-- Chat Body (Mock) -->
        <div class="p-6 space-y-4 min-h-[150px] bg-gradient-to-b from-background-card to-background">
          <div class="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 max-w-[85%]">
            <p class="text-sm text-text-light">
              Hello! 👋 How can we help you today with your tech needs?
            </p>
          </div>
          <div class="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 max-w-[85%]">
            <p class="text-sm text-text-light">
              Are you looking for laptop repairs, custom builds, or CCTV installations?
            </p>
          </div>
        </div>

        <!-- Footer / CTA -->
        <div class="p-4 bg-background-lighter border-t border-white/5">
          <a 
            href="https://m.me/pttitsolutionscebu" 
            target="_blank" 
            class="flex items-center justify-center gap-2 w-full py-3 bg-[#0084FF] hover:bg-[#0074E0] text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 group"
          >
            <Icon name="fa6-brands:facebook-messenger" class="w-5 h-5 group-hover:scale-110 transition-transform" />
            Continue in Messenger
          </a>
          <p class="text-[10px] text-text-muted text-center mt-3 uppercase tracking-widest font-bold">
            Powered by Messenger
          </p>
        </div>
      </div>
    </Transition>

    <!-- Toggle Button -->
    <button 
      @click="isOpen = !isOpen"
      class="w-14 h-14 rounded-full bg-primary hover:bg-primary-hover shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-4 border-background pointer-events-auto group relative"
    >
      <div v-if="!isOpen" class="relative">
        <Icon name="heroicons:chat-bubble-left-right" class="w-7 h-7 text-white" />
        <span class="absolute -top-1 -right-1 flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
        </span>
      </div>
      <Icon v-else name="heroicons:chevron-down" class="w-7 h-7 text-white animate-bounce-short" />
      
      <!-- Tooltip -->
      <div v-if="!isOpen" class="absolute right-full mr-4 bg-white px-3 py-1.5 rounded-lg text-black text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none">
        Need help?
        <div class="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
      </div>
    </button>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
.animate-bounce-short {
  animation: bounce-short 2s infinite ease-in-out;
}

@keyframes bounce-short {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
</style>
