<template>
  <section id="about" class="section-container relative">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <!-- Media/Image Side -->
      <div class="relative order-2 lg:order-1">
        <div class="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-xl z-0"></div>
        <div class="relative z-10 glass-card p-2 rounded-2xl overflow-hidden aspect-video lg:aspect-square flex flex-col pl-8 pt-8">
          <div class="w-full bg-background border border-white/10 rounded-tl-xl h-full flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            
            <div class="absolute bottom-6 left-6 right-6">
              <div class="glass-card p-4 flex items-center gap-4 border-l-4 border-l-primary">
                <div class="bg-primary/20 p-3 rounded-lg">
                  <Icon name="heroicons:map-pin" class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h5 class="font-bold text-white">Local Hub</h5>
                  <p class="text-sm text-text-muted">Proudly serving Cebu City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Decorative dots -->
        <div class="absolute -bottom-6 -left-6 z-20 hidden md:block">
          <div class="grid grid-cols-5 gap-2">
            <div v-for="i in 25" :key="i" class="w-1.5 h-1.5 rounded-full bg-white/20"></div>
          </div>
        </div>
      </div>
      
      <!-- Content Side -->
      <div class="order-1 lg:order-2">
        <h2 class="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Why Choose Us</h2>
        <h3 class="heading-md">Cebu's Premier IT & Tech Experts</h3>
        <p class="text-lg text-text-light mb-8 leading-relaxed">
          PTT IT-Solutions has built a strong reputation in the Cebu region by consistently delivering reliable, fast, and transparent technology services. We treat your infrastructure as if it were our own.
        </p>
        
        <div class="space-y-6">
          <div class="flex gap-4">
            <div class="flex-shrink-0 mt-1">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                <Icon name="heroicons:bolt" class="w-5 h-5 text-primary" />
              </div>
            </div>
            <div>
              <h5 class="text-xl font-bold text-white mb-2">Rapid Turnaround</h5>
              <p class="text-text-muted">We understand downtime equals lost productivity. Our agile workflows ensure your devices and networks are back online swiftly.</p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="flex-shrink-0 mt-1">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                <Icon name="heroicons:shield-exclamation" class="w-5 h-5 text-primary" />
              </div>
            </div>
            <div>
              <h5 class="text-xl font-bold text-white mb-2">Uncompromising Reliability</h5>
              <p class="text-text-muted">From the parts we source for custom builds to the cables we run for CCTV, we use only premium, stress-tested components.</p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <div class="flex-shrink-0 mt-1">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                <Icon name="heroicons:user-group" class="w-5 h-5 text-primary" />
              </div>
            </div>
            <div>
              <h5 class="text-xl font-bold text-white mb-2">Deep Local Expertise</h5>
              <p class="text-text-muted">As a locally operated business in Cebu, we provide localized, highly responsive support that giant corporations simply cannot match.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Logic for AboutSection
</script>
