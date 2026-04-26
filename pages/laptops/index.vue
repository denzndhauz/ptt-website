<template>
  <div class="min-h-screen pt-32 pb-20">
    <div class="section-container">
      <div class="mb-12">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-6">
          <Icon name="heroicons:arrow-left" class="w-4 h-4" />
          Back to Home
        </NuxtLink>
        <h1 class="text-4xl lg:text-5xl font-bold text-white mb-4">Available Units</h1>
        <p class="text-text-muted text-lg max-w-2xl">
          Browse our curated selection of high-quality refurbished and second-hand laptops. All units are strictly tested and ready for their new owners.
        </p>
      </div>

      <!-- Filters/Search (Placeholder) -->
      <div class="flex flex-wrap gap-4 mb-12">
        <button class="px-6 py-2 rounded-full bg-primary text-white font-medium border border-primary">All Units</button>
        <button class="px-6 py-2 rounded-full bg-white/5 text-text-muted font-medium border border-white/10 hover:border-white/20 transition-all">Gaming</button>
        <button class="px-6 py-2 rounded-full bg-white/5 text-text-muted font-medium border border-white/10 hover:border-white/20 transition-all">Productivity</button>
        <button class="px-6 py-2 rounded-full bg-white/5 text-text-muted font-medium border border-white/10 hover:border-white/20 transition-all">Budget-Friendly</button>
      </div>

      <!-- Laptop Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 3" :key="i" class="glass-card group overflow-hidden border border-white/10 rounded-2xl hover:border-primary/50 transition-all duration-500">
          <div class="relative aspect-video overflow-hidden">
            <img 
              :src="`https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80`" 
              alt="Laptop" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div class="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-xs font-bold text-white shadow-xl">
              AVAILABLE
            </div>
          </div>
          <div class="p-6 space-y-4">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-bold text-white">Dell Latitude 7490</h3>
              <span class="text-primary font-bold text-xl">₱18,500</span>
            </div>
            <p class="text-text-muted text-sm line-clamp-2">
              Intel Core i7-8650U | 16GB RAM | 256GB SSD | 14" FHD IPS Display. Excellent condition, best for professionals.
            </p>
            <div class="grid grid-cols-2 gap-2 py-4 border-y border-white/5">
              <span class="text-[10px] text-text-muted uppercase tracking-widest font-bold">Grade A+</span>
              <span class="text-[10px] text-text-muted uppercase tracking-widest font-bold text-right italic">3 Months Warranty</span>
            </div>
            <button @click="inquire(i)" class="w-full py-3 rounded-lg bg-white/5 text-white font-bold hover:bg-primary transition-all border border-white/10 hover:border-primary">
              Inquire Now
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State / More units coming soon -->
      <div class="mt-16 p-12 text-center rounded-3xl border-2 border-dashed border-white/5 bg-white/2">
        <Icon name="heroicons:sparkles" class="w-12 h-12 text-primary/40 mx-auto mb-4" />
        <h4 class="text-xl font-bold text-white mb-2">More units arriving weekly!</h4>
        <p class="text-text-muted">Don't see what you're looking for? Message us for specific requests.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const inquire = (id: number) => {
  // Logic to redirect to Facebook or Whatsapp
  window.open('https://www.facebook.com/pttitsolutionscebu', '_blank')
}

useHead({
  title: 'Available Laptops - PTT IT-Solutions Cebu',
  meta: [
    { name: 'description', content: 'Explore our latest inventory of high-quality, tested second-hand laptops in Cebu.' }
  ]
})
</script>
