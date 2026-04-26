<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/5 transition-all duration-300" :class="{ 'py-2 shadow-lg': scrolled, 'py-4': !scrolled }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center cursor-pointer" @click="scrollTo('top')">
          <AppLogo />
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <button @click="scrollTo('services')" class="text-text-light hover:text-white transition-colors text-sm font-medium">Services</button>
          <button @click="scrollTo('about')" class="text-text-light hover:text-white transition-colors text-sm font-medium">About</button>
          <NuxtLink to="/laptops" class="text-text-light hover:text-white transition-colors text-sm font-medium">Laptops</NuxtLink>
          <button @click="scrollTo('contact')" class="text-text-light hover:text-white transition-colors text-sm font-medium">Contact</button>
        </nav>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <button @click="scrollTo('contact')" class="btn-primary py-2 px-4 text-sm">
            Get a Quote
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-400 hover:text-white focus:outline-none">
            <Icon :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-background-card border-b border-white/5">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <button @click="scrollTo('services', true)" class="block px-3 py-2 rounded-md text-base font-medium text-text-light hover:text-white hover:bg-white/5 w-full text-left">Services</button>
        <button @click="scrollTo('about', true)" class="block px-3 py-2 rounded-md text-base font-medium text-text-light hover:text-white hover:bg-white/5 w-full text-left">About</button>
        <button @click="scrollTo('contact', true)" class="block px-3 py-2 rounded-md text-base font-medium text-text-light hover:text-white hover:bg-white/5 w-full text-left">Contact</button>
        <div class="pt-2 px-3">
          <button @click="scrollTo('contact', true)" class="btn-primary w-full py-2">Get a Quote</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

const scrollTo = (id: string, isMobile = false) => {
  if (isMobile) {
    mobileMenuOpen.value = false
  }
  
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  
  const element = document.getElementById(id)
  if (element) {
    const offset = 80 // Header height offset
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
