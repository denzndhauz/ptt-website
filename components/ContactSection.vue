<template>
  <section id="contact" class="section-container relative z-10">
    <div class="glass-card overflow-hidden border border-white/10 shadow-2xl">
      <div class="grid grid-cols-1 lg:grid-cols-5">
        
        <!-- Contact Info Side -->
        <div class="lg:col-span-2 bg-gradient-to-br from-background-card to-background p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5 relative overflow-hidden">
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h3 class="text-3xl font-bold text-white mb-2">Get in Touch</h3>
              <p class="text-text-muted mb-12">
                Need immediate assistance or looking for a quote? Reach out to us today.
              </p>
              
              <div class="space-y-8">
                <div class="flex items-start gap-4">
                  <div class="mt-1 bg-primary/20 p-3 rounded-lg border border-primary/30">
                    <Icon name="heroicons:phone" class="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 class="text-sm text-text-muted uppercase tracking-wider mb-1">Phone</h5>
                    <p class="text-xl font-medium text-white hover:text-primary transition-colors cursor-pointer">0991 622 5605</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="mt-1 bg-primary/20 p-3 rounded-lg border border-primary/30">
                    <Icon name="heroicons:envelope" class="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 class="text-sm text-text-muted uppercase tracking-wider mb-1">Email</h5>
                    <p class="text-lg font-medium text-white hover:text-primary transition-colors cursor-pointer">support@ptt-solutions.com</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="mt-1 bg-primary/20 p-3 rounded-lg border border-primary/30">
                    <Icon name="heroicons:map-pin" class="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 class="text-sm text-text-muted uppercase tracking-wider mb-1">Location</h5>
                    <p class="text-lg font-medium text-white">Cebu City, Philippines<br />Available for on-site visits.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mt-12 pt-8 border-t border-white/10">
              <h5 class="text-sm text-text-muted uppercase tracking-wider mb-4">Follow Us</h5>
              <div class="flex gap-4">
                <a href="#" class="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                  <Icon name="heroicons:globe-alt" class="w-5 h-5 text-white" />
                </a>
                <a href="#" class="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                  <Icon name="heroicons:share" class="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Form Side -->
        <div class="lg:col-span-3 p-10 lg:p-12 bg-background-card/50">
          <h3 class="text-2xl font-bold text-white mb-6">Send a Message</h3>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label for="name" class="block text-sm font-medium text-text-light">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" class="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required />
              </div>
              <div class="space-y-2">
                <label for="email" class="block text-sm font-medium text-text-light">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" class="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required />
              </div>
            </div>
            
            <div class="space-y-2">
              <label for="service" class="block text-sm font-medium text-text-light">Service Inquiry</label>
              <select id="service" class="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none">
                <option value="" disabled selected>Select a service</option>
                <option value="pc-repair">PC/Laptop Repair & Troubleshooting</option>
                <option value="custom-build">Custom PC Build</option>
                <option value="cctv">CCTV & Security Installation</option>
                <option value="sme-support">SME IT Support / Networking</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>
            
            <div class="space-y-2">
              <label for="message" class="block text-sm font-medium text-text-light">Message</label>
              <textarea id="message" rows="5" placeholder="How can we help you?" class="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" required></textarea>
            </div>
            
            <button type="submit" class="btn-primary w-full py-4 text-lg">
              Send Message
            </button>
            <p class="text-xs text-text-muted text-center mt-4">
              We typically reply within 2-4 hours during business days.
            </p>
          </form>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const submitForm = () => {
  // Logic to handle form submission later
  alert('Thank you for contacting PTT IT-Solutions. This form will be connected to a backend soon.')
}
</script>
