<template>
  <footer class="bg-navy text-grey-light mt-12">
    <!-- Footer Content -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Left Section - Social Icons -->
        <div>
          <h3 class="text-white font-semibold mb-4">Follow Us</h3>
          <div class="flex gap-4">
            <a href="#twitter" class="text-grey-light hover:text-white text-2xl transition">𝕏</a>
            <a href="#facebook" class="text-grey-light hover:text-white text-2xl transition">f</a>
            <a href="#youtube" class="text-grey-light hover:text-white text-2xl transition">▶</a>
            <a href="#instagram" class="text-grey-light hover:text-white text-2xl transition">📷</a>
          </div>
        </div>

        <!-- Middle Section - Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#sitemap" class="text-white hover:text-gray-300 transition">Sitemap</a></li>
            <li><a href="#contact" class="text-white hover:text-gray-300 transition">Contact</a></li>
            <li><a href="#feedback" class="text-white hover:text-gray-300 transition">Feedback</a></li>
          </ul>
        </div>

        <!-- Right Section - Policies -->
        <div>
          <h3 class="text-white font-semibold mb-4">Policies</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#terms" class="text-white hover:text-gray-300 transition">Terms & Conditions</a></li>
            <li><a href="#privacy" class="text-white hover:text-gray-300 transition">Privacy Policy</a></li>
            <li><a href="#copyright" class="text-white hover:text-gray-300 transition">Copyright</a></li>
            <li><a href="#accessibility" class="text-white hover:text-gray-300 transition">Accessibility</a></li>
          </ul>
        </div>
      </div>

      <!-- Partner Logos -->
      <div class="border-t border-grey-light py-8 mb-8">
        <h3 class="text-white font-semibold mb-4">Partner Organizations</h3>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
          <a
            v-for="(partner, index) in otherPartnerLinks"
            :key="index"
            :href="partner.url"
            target="_blank"
            class="bg-white rounded-lg p-2 flex items-center justify-center h-20 hover:opacity-90 transition-opacity"
          >
            <img :src="partner.logo" :alt="partner.name" class="w-full h-full object-contain" />
          </a>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-grey-light pt-8 flex flex-col md:flex-row justify-between items-center mb-4">
        <div class="text-sm mb-4 md:mb-0">
          <p>Copyright © 2026 Ariqt Global Technologies.</p>
          <p>All Rights Reserved | Mockup for Demonstration Purposed</p>
        </div>
        <div class="text-sm text-right">
          <p>Visitors: 680,889</p>
          <p>Last updated: February 09, 2026</p>
        </div>
      </div>
      <!-- Demo Disclaimer Footer -->
      <div class="text-center text-[14px] opacity-80 border-t border-grey-light border-opacity-20 pt-6 px-4 leading-relaxed">
        <p>This is not the official website of the Indian Embassy in the Hague in the Netherlands. This is a mockup of the website for demonstrating an AI powered chatbot for answering FAQs. © Ariqt Global Technologies, 2026</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { otherPartnerLinks } from '../data/partners'
</script>

<style scoped>
</style>
