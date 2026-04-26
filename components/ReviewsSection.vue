<template>
  <section id="reviews" class="section-container py-24 relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
    
    <div class="text-center max-w-3xl mx-auto mb-16 px-4">
      <h2 class="text-primary font-semibold tracking-wide uppercase text-sm mb-2 italic">Real Feedback</h2>
      <h3 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Trusted by our Community</h3>
      <div class="flex items-center justify-center gap-1 mb-4">
        <Icon v-for="i in 5" :key="i" name="heroicons:star-solid" class="w-5 h-5 text-yellow-500" />
      </div>
      <p class="text-text-muted text-lg">
        See what our customers in Cebu are saying about our IT services, laptop repairs, and custom builds.
      </p>
    </div>

    <!-- Reviews Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(review, index) in reviews" :key="index" 
           class="glass-card p-6 flex flex-col justify-between hover:border-primary/40 transition-all duration-300 group">
        <div>
          <div class="flex items-center gap-1 mb-4">
            <Icon v-for="i in 5" :key="i" name="heroicons:star-solid" class="w-3.5 h-3.5 text-yellow-500" />
          </div>
          <p class="text-text-light text-sm italic leading-relaxed mb-6">
            "{{ review.text }}"
          </p>
        </div>
        
        <div class="flex items-center gap-3 pt-4 border-t border-white/5">
          <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm border border-primary/20">
            {{ review.name.charAt(0) }}
          </div>
          <div>
            <h4 class="text-white font-bold text-sm">{{ review.name }}</h4>
            <div class="flex items-center gap-2">
              <span class="text-[10px] text-text-muted">{{ review.date }}</span>
              <span class="w-1 h-1 bg-text-muted/30 rounded-full"></span>
              <span class="text-[10px] text-primary/80 font-medium flex items-center gap-0.5">
                <Icon name="heroicons:check-badge" class="w-3 h-3" />
                Verified Customer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Google Maps Link -->
    <div class="mt-12 text-center">
      <a 
        href="https://maps.app.goo.gl/s3S1zkdBGvw8qr9r7" 
        target="_blank" 
        class="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors group text-sm font-medium"
      >
        <img src="https://www.google.com/images/branding/product/ico/maps15_64dp.ico" class="w-4 h-4 grayscale group-hover:grayscale-0 transition-all" alt="Google Maps" />
        Read all reviews on Google Maps
        <Icon name="heroicons:arrow-top-right-on-square" class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const reviews = [
  {
    name: "John Pegarido",
    text: "I needed my laptop fix urgently, they found a way to have it fix in the same day. Great customer service. Excellent repairs.",
    date: "1 week ago"
  },
  {
    name: "Dot Teves",
    text: "Your service is very good and not expensive. They are very good at their job and will really explain to you the situation of the computer. There is a free sticker!",
    date: "2 weeks ago"
  },
  {
    name: "Victor Pagarao",
    text: "Affordable and worth the price I bought my second hand laptop here and upgraded ssd storage working fine and functional. Thank you.",
    date: "2 weeks ago"
  },
  {
    name: "Russel Jarden",
    text: "Affordable, yet quality service. It only take minutes or so because they now how to fix the issue of your gadget. Will surely recommend PTT-IT Solutions.",
    date: "3 weeks ago"
  },
  {
    name: "Jhonnel Romero",
    text: "Highly recommended for those looking for a secondhand laptop 🔥. Great deals and very approachable staff.",
    date: "2 weeks ago"
  }
]
</script>
