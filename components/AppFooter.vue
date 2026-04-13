<template>
  <footer class="bg-background border-t border-white/5 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/5 pb-12">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-2 mb-6">
            <Icon name="heroicons:cpu-chip" class="w-8 h-8 text-primary" />
            <span class="text-xl font-bold tracking-tight text-white">PTT <span class="text-primary">IT-Solutions</span></span>
          </div>
          <p class="text-text-muted text-sm leading-relaxed max-w-sm mb-6">
            Expert IT, network, and security services in Cebu. We deliver premium technical solutions tailored for individuals and businesses, prioritizing reliability and fast support.
          </p>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-6">Services</h4>
          <ul class="space-y-3 text-sm text-text-muted">
            <li><a href="#services" class="hover:text-primary transition-colors">PC/Laptop Repair</a></li>
            <li><a href="#services" class="hover:text-primary transition-colors">Custom Builds</a></li>
            <li><a href="#services" class="hover:text-primary transition-colors">CCTV Installations</a></li>
            <li><a href="#services" class="hover:text-primary transition-colors">SME IT Support</a></li>
            <li><a href="#services" class="hover:text-primary transition-colors">Network Infrastructure</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-6">Company</h4>
          <ul class="space-y-3 text-sm text-text-muted">
            <li><a href="#about" class="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#contact" class="hover:text-primary transition-colors">Contact</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
        <p>&copy; {{ new Date().getFullYear() }} PTT IT-Solutions Cebu. All rights reserved.</p>
        <p>Built for performance and reliability.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer logic
</script>
