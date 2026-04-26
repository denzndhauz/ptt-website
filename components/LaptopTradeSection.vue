<template>
  <section id="laptop-trade" class="section-container relative overflow-hidden py-24">
    <!-- Background Accents -->
    <div class="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
    <div class="absolute bottom-0 left-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

    <div class="glass-card p-8 lg:p-16 relative border border-white/10 overflow-hidden rounded-3xl shadow-2xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <!-- Left: Content -->
        <div class="space-y-8">
          <div>
            <h2 class="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Marketplace</h2>
            <h3 class="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Premium 2nd Hand <br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-400 font-extrabold italic">Laptop Buy, Sell & Swap</span>
            </h3>
            <p class="text-text-muted text-lg mt-6 leading-relaxed">
              Looking to upgrade? We offer fair trade-in values for your current device. Whether you want to swap for a higher-end unit or cash out on your old tech, we've got you covered.
            </p>
          </div>

          <!-- Feature Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
              <Icon name="heroicons:arrows-right-left" class="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 class="text-white font-bold text-lg mb-2">Easy Swap</h4>
              <p class="text-text-muted text-sm">Flexible trade-ins. Add cash for an upgrade or get the excess back if your unit is valued higher.</p>
            </div>
            
            <div class="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
              <Icon name="heroicons:currency-dollar" class="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 class="text-white font-bold text-lg mb-2">Instant Cash</h4>
              <p class="text-text-muted text-sm">Turn your unused gadgets into immediate funds. We offer competitive market rates for quality used laptops.</p>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <NuxtLink to="/laptops" class="btn-primary flex items-center justify-center gap-2 group">
              Browse Available Units
              <Icon name="heroicons:shopping-bag" class="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </NuxtLink>
            <button @click="scrollToContact" class="px-6 py-4 rounded-xl font-bold bg-white/5 text-white hover:bg-white/10 transition-all border border-white/10 text-center">
              Value My Laptop
            </button>
          </div>
        </div>

        <!-- Right: Visual Representation -->
        <div class="relative group">
          <div class="absolute inset-0 bg-primary/20 rounded-full blur-[60px] group-hover:bg-primary/30 transition-all duration-700"></div>
          <div class="relative glass-card border border-white/10 p-4 rounded-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Premium Refurbished Laptops" 
              class="rounded-xl object-cover w-full h-[400px]"
            />
            <div class="absolute -bottom-6 -left-6 bg-background-card p-6 rounded-2xl border border-primary/20 shadow-2xl animate-bounce-slow">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name="heroicons:sparkles" class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p class="text-white font-bold">Refurbished & Tested</p>
                  <p class="text-text-muted text-xs">Full quality check guaranteed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToContact = () => {
  const el = document.getElementById('contact')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.animate-bounce-slow {
  animation: bounce-slow 4s infinite ease-in-out;
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
</style>
