<template>
  <header class="bg-white py-0 my-0">
    <!-- Demo Disclaimer Banner -->
    <div class="bg-blue-900 text-white text-[14px] py-2.5 text-center font-bold tracking-tight px-6 leading-normal">
      <i class="fa-solid fa-circle-info mr-2 opacity-90"></i>
      This is not the official website of the Indian Embassy in the Hague in the Netherlands. This is a mockup of the website for demonstrating an AI powered chatbot for answering FAQs. © Ariqt Global Technologies, 2026
    </div>

    <!-- Top Saffron Border -->
    <div class="h-[3px] bg-[#f4811f] w-full"></div>

    <!-- Top Utility Bar -->
    <div class="border-b border-gray-100 py-1 bg-white text-[11px]">
      <div class="max-w-7xl mx-auto flex justify-between items-center text-gray-500 px-6">
        <div class="flex items-center gap-0 font-medium">
          <a href="#sitemap" class="hover:text-[#164a9a]">Sitemap</a>
          <span class="mx-2 text-gray-200">|</span>
          <a href="#contact" class="hover:text-[#164a9a]">Contact</a>
          <span class="mx-2 text-gray-200">|</span>
          <a href="#feedback" class="hover:text-[#164a9a]">Feedback</a>
        </div>
        <div class="flex items-center font-medium">
          <a href="#main" @click="skipToMain" class="hover:text-[#164a9a]">Skip to main content</a>
          <span class="mx-2 text-gray-200">|</span>
          <div class="flex gap-2 items-center">
            <button @click="changeFontSize(-5)" class="hover:text-[#164a9a]" title="Decrease">A-</button>
            <button @click="changeFontSize(0)" class="hover:text-[#164a9a]" title="Reset">A</button>
            <button @click="changeFontSize(5)" class="hover:text-[#164a9a]" title="Increase">A+</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Header -->
    <div class="max-w-7xl mx-auto py-2.5 px-6">
      <div class="flex items-center justify-between">
        <!-- Logo and Title -->
        <div class="flex items-center gap-3">
          <img src="/src/assets/logo.png" alt="Emblem of India" class="h-12 w-auto object-contain" />
          <div class="leading-tight">
            <h1 class="text-[#164a9a] font-bold text-[22px] tracking-tight">Embassy of India</h1>
            <p class="text-[#164a9a] text-[15px] font-medium leading-none">The Hague, The Netherlands</p>
          </div>
        </div>

        <!-- Right Side: Social, Search, What's New -->
        <div class="flex items-center gap-4">
          <!-- Social Media Icons -->
          <div class="flex gap-3.5 items-center">
            <a href="#twitter" class="text-black hover:opacity-80 transition-opacity" title="Twitter">
              <i class="fa-brands fa-x-twitter text-lg"></i>
            </a>
            <a href="#facebook" class="text-[#1877F2] hover:opacity-80 transition-opacity" title="Facebook">
              <i class="fa-brands fa-facebook-f text-lg"></i>
            </a>
            <a href="#youtube" class="text-[#FF0000] hover:opacity-80 transition-opacity" title="YouTube">
              <i class="fa-brands fa-youtube text-lg"></i>
            </a>
            <a href="#instagram" class="text-[#E4405F] hover:opacity-80 transition-opacity" title="Instagram">
              <i class="fa-brands fa-instagram text-lg"></i>
            </a>
          </div>

          <!-- Search Bar -->
          <div class="relative w-64 ml-2">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search"
              class="w-full pl-3 pr-10 py-1.5 border border-gray-200 rounded focus:outline-none focus:border-[#164a9a] text-sm bg-white"
              @keyup.enter="handleSearch"
            />
            <button
              @click="handleSearch"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-[#e63c15] hover:text-[#d13512] transition-colors"
            >
              <i class="fa-solid fa-magnifying-glass text-sm"></i>
            </button>
          </div>

          <!-- What's New Button -->
          <button class="bg-[#e63c15] text-white px-4 py-2 rounded shadow-sm hover:bg-[#d13512] transition-colors flex items-center gap-2 font-bold text-[13px] whitespace-nowrap uppercase">
            <i class="fa-solid fa-bell"></i>
            <span>What's New</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
const fontSize = ref(100)

const handleSearch = () => {
  console.log('Searching for:', searchQuery.value)
}

const changeFontSize = (change: number) => {
  fontSize.value = Math.max(80, Math.min(120, fontSize.value + change))
  document.documentElement.style.fontSize = (16 * fontSize.value / 100) + 'px'
}

const skipToMain = () => {
  const mainContent = document.querySelector('main')
  mainContent?.focus()
}
</script>

<style scoped>
</style>
