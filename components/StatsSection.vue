<template>
  <section class="relative py-20 overflow-hidden">
    <!-- Background Gradient Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        
        <!-- Stat Item 1 -->
        <div class="text-center group">
          <div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-xl">
            <Icon name="heroicons:document-check" class="w-8 h-8 text-primary shadow-primary/50 shadow-sm" />
          </div>
          <h4 class="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            500<span class="text-primary">+</span>
          </h4>
          <p class="text-sm md:text-base text-text-muted uppercase tracking-[0.2em] font-bold">Work Orders</p>
          <p class="text-[10px] text-text-muted/60 mt-1 italic">Successfully Delivered</p>
        </div>

        <!-- Stat Item 2 -->
        <div class="text-center group">
          <div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-xl">
            <Icon name="heroicons:clipboard-document-list" class="w-8 h-8 text-primary shadow-primary/50 shadow-sm" />
          </div>
          <h4 class="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            1.2k<span class="text-primary">+</span>
          </h4>
          <p class="text-sm md:text-base text-text-muted uppercase tracking-[0.2em] font-bold">Service Reports</p>
          <p class="text-[10px] text-text-muted/60 mt-1 italic">Detailed Technical Audits</p>
        </div>

        <!-- Stat Item 3 -->
        <div class="text-center group">
          <div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-xl">
            <Icon name="heroicons:user-group" class="w-8 h-8 text-primary shadow-primary/50 shadow-sm" />
          </div>
          <h4 class="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            450<span class="text-primary">+</span>
          </h4>
          <p class="text-sm md:text-base text-text-muted uppercase tracking-[0.2em] font-bold">Happy Clients</p>
          <p class="text-[10px] text-text-muted/60 mt-1 italic">Trusted in Cebu City</p>
        </div>

        <!-- Stat Item 4 -->
        <div class="text-center group">
          <div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-xl">
            <Icon name="heroicons:shield-check" class="w-8 h-8 text-primary shadow-primary/50 shadow-sm" />
          </div>
          <h4 class="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
            99<span class="text-primary">.9</span><span class="text-2xl text-primary">%</span>
          </h4>
          <p class="text-sm md:text-base text-text-muted uppercase tracking-[0.2em] font-bold">Success Rate</p>
          <p class="text-[10px] text-text-muted/60 mt-1 italic">Proven Reliability</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Stats logic (can add auto-count animation later)
</script>
