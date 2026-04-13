<template>
  <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
    <!-- Background Decor -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]"></div>
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center gap-12">
      <div class="flex-1">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for Support in Cebu
        </div>
        
        <h1 class="heading-lg">
          Expert IT & Security <br class="hidden lg:block" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">Solutions in Cebu</span>
        </h1>
        
        <p class="mt-4 text-xl text-text-light max-w-2xl mb-8 leading-relaxed">
          Your trusted partner for reliable PC/Laptop repair, custom high-performance builds, and enterprise-grade CCTV installations tailored for your business and home.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <button @click="scrollToContact" class="btn-primary group">
            Get a Free Quote
            <Icon name="heroicons:arrow-right" class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button @click="scrollToServices" class="btn-secondary">
            Explore Services
          </button>
        </div>
        
        <!-- Trust indicators -->
        <div class="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-2xl">
          <div class="flex flex-col">
            <span class="text-3xl font-bold text-white">5+</span>
            <span class="text-sm text-text-muted mt-1">Years Experience</span>
          </div>
          <div class="flex flex-col">
            <span class="text-3xl font-bold text-white">100%</span>
            <span class="text-sm text-text-muted mt-1">Satisfaction</span>
          </div>
          <div class="flex flex-col">
            <span class="text-3xl font-bold text-white">24/7</span>
            <span class="text-sm text-text-muted mt-1">Support Available</span>
          </div>
        </div>
      </div>
      
      <!-- Abstract Illustration/Image Area -->
      <div class="flex-1 hidden lg:block relative">
        <div class="relative w-full aspect-square max-w-md mx-auto">
          <!-- Glassmorphic floating cards -->
          <div class="absolute top-10 right-0 glass-card p-4 rounded-xl shadow-2xl animate-[bounce_4s_infinite] z-20 w-48 border border-white/10">
            <div class="flex items-center gap-3 mb-2">
              <div class="bg-primary/20 p-2 rounded-lg">
                <Icon name="heroicons:shield-check" class="text-primary w-6 h-6" />
              </div>
              <span class="font-medium text-sm">System Secure</span>
            </div>
            <div class="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div class="bg-green-500 w-full h-full rounded-full"></div>
            </div>
          </div>
          
          <div class="absolute bottom-20 -left-10 glass-card p-4 rounded-xl shadow-2xl animate-[bounce_5s_infinite_0.5s] z-20 w-56 border border-white/10">
            <div class="flex items-center gap-3">
              <div class="bg-blue-500/20 p-2 rounded-lg">
                <Icon name="heroicons:wrench-screwdriver" class="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <p class="font-medium text-sm">Optimization Complete</p>
                <p class="text-xs text-text-muted">Speed up by 300%</p>
              </div>
            </div>
          </div>
          
          <!-- Central Abstract tech representation -->
          <div class="absolute inset-0 bg-gradient-to-br from-background-lighter to-background-card rounded-full border border-white/5 flex items-center justify-center p-8 shadow-2xl z-10">
            <div class="w-full h-full rounded-full border-2 border-dashed border-white/10 animate-[spin_60s_linear_infinite] absolute"></div>
            <div class="w-3/4 h-3/4 rounded-full border border-primary/30 animate-[spin_40s_linear_infinite_reverse] absolute"></div>
            <img src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="PC Motherboard" class="rounded-full object-cover w-full h-full opacity-60 mix-blend-luminosity border-4 border-background-card" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
const scrollToServices = () => {
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
