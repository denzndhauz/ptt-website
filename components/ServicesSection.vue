<template>
  <section id="services" class="relative bg-background-lighter section-container rounded-3xl mx-auto my-12 border border-white/5 max-w-[95%] lg:max-w-7xl">
    <div class="text-center max-w-3xl mx-auto mb-16 px-4">
      <h2 class="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Our Capabilities</h2>
      <h3 class="heading-md">Comprehensive IT Services</h3>
      <p class="text-text-muted text-lg mt-4">
        From advanced PC diagnostics to enterprise security, we provide end-to-end technological solutions tailored to your unique requirements.
      </p>
    </div>

    <div class="flex flex-wrap justify-center gap-8 px-4">
      <!-- Service 1 -->
      <div class="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(185,28,28,0.1)] hover:border-primary/50 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] max-w-md">
        <div class="w-14 h-14 bg-background border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
          <Icon name="heroicons:computer-desktop" class="w-8 h-8 text-primary" />
        </div>
        <h4 class="text-xl font-bold mb-3 text-white">PC & Laptop Services</h4>
        <p class="text-text-muted leading-relaxed mb-6">
          Professional repair, deep troubleshooting, hardware upgrades, and custom high-end PC builds tailored for gaming or productivity.
        </p>
        <ul class="space-y-2 text-sm text-text-light mb-6">
          <li class="flex items-center gap-2"><Icon name="heroicons:check-circle" class="text-primary w-4 h-4" /> Hardware optimization</li>
          <li class="flex items-center gap-2"><Icon name="heroicons:check-circle" class="text-primary w-4 h-4" /> Motherboard repair</li>
          <li class="flex items-center gap-2"><Icon name="heroicons:check-circle" class="text-primary w-4 h-4" /> Custom liquid cooling</li>
        </ul>
      </div>

      <!-- Service 2 -->
      <div class="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(185,28,28,0.1)] hover:border-primary/50 relative overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] max-w-md">
        <div class="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/40 transition-all"></div>
        <div class="w-14 h-14 bg-background border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors relative z-10">
          <Icon name="heroicons:video-camera" class="w-8 h-8 text-primary" />
        </div>
        <h4 class="text-xl font-bold mb-3 text-white relative z-10">CCTV & Security</h4>
        <p class="text-text-muted leading-relaxed mb-6 relative z-10">
          State-of-the-art surveillance installations, remote monitoring setup, and proactive maintenance for commercial and residential properties.
        </p>
        <ul class="space-y-2 text-sm text-text-light mb-6 relative z-10">
          <li class="flex items-center gap-2"><Icon name="heroicons:check-circle" class="text-primary w-4 h-4" /> IP Camera setups</li>
          <li class="flex items-center gap-2"><Icon name="heroicons:check-circle" class="text-primary w-4 h-4" /> Remote viewing config</li>
          <li class="flex items-center gap-2"><Icon name="heroicons:check-circle" class="text-primary w-4 h-4" /> DVR/NVR restoration</li>
        </ul>
      </div>

      <!-- Service 3 -->
      <div class="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(185,28,28,0.1)] hover:border-primary/50 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] max-w-md">
        <div class="w-14 h-14 bg-background border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
          <Icon name="heroicons:server-stack" class="w-8 h-8 text-primary" />
        </div>
        <h4 class="text-xl font-bold mb-3 text-white">SME IT Support</h4>
        <p class="text-text-muted leading-relaxed mb-6">
          Robust network infrastructure deployment, ongoing technical support, and critical preventive maintenance for your enterprise.
        </p>
        <ul class="space-y-2 text-sm text-text-light mb-6">
          <li class="flex items-center gap-2"><Icon name="heroicons:check-circle" class="text-primary w-4 h-4" /> Network structuring</li>
          <li class="flex items-center gap-2"><Icon name="heroicons:check-circle" class="text-primary w-4 h-4" /> Server maintenance</li>
          <li class="flex items-center gap-2"><Icon name="heroicons:check-circle" class="text-primary w-4 h-4" /> Data recovery & backup</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Logic for ServicesSection
</script>
