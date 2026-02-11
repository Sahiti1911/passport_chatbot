<template>
  <nav class="bg-[#164a9a] text-white sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Mobile Menu Button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden block py-3 text-white"
      >
        <span class="block w-6 h-0.5 bg-white mb-1"></span>
        <span class="block w-6 h-0.5 bg-white mb-1"></span>
        <span class="block w-6 h-0.5 bg-white"></span>
      </button>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex flex-nowrap items-center menu-list">
        <li v-for="(item, index) in menuItems" :key="index" class="relative group">
            <router-link
            v-if="item.href && !item.children"
            :to="item.href"
            class="block px-3 py-3 hover:bg-[#0d346b] transition-colors font-bold text-[13px] whitespace-nowrap text-white"
          >
            {{ item.label }}
          </router-link>
          <button
            v-else
            class="px-3.5 py-3 hover:bg-[#0d346b] transition-colors font-bold text-[13px] whitespace-nowrap flex items-center gap-1 cursor-pointer text-white"
            @click="toggleDropdown(index)"
          >
            {{ item.label }}
            <i v-if="item.children" class="fa-solid fa-chevron-down text-[8px] opacity-60 group-hover:rotate-180 transition-transform duration-300"></i>
          </button>

          <!-- Dropdown Menu -->
          <div
            v-if="item.children"
            class="absolute left-0 mt-0 w-52 bg-white text-[#164a9a] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t-2 border-[#f4811f] rounded-b-sm"
          >
            <router-link
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
              :to="child.href || '#'"
              class="block px-4 py-3 hover:bg-gray-50 text-navy font-medium text-xs border-b border-gray-100 last:border-b-0 hover:text-[#164a9a] transition-colors"
            >
              {{ child.label }}
            </router-link>
          </div>
        </li>
      </ul>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden pb-4">
        <ul class="space-y-2">
          <li v-for="(item, index) in menuItems" :key="index">
            <button
              v-if="item.children"
              @click="toggleDropdown(index)"
              class="w-full text-left px-4 py-2 hover:bg-navy-light transition flex justify-between items-center"
            >
              {{ item.label }}
              <span class="text-sm">{{ isOpen(index) ? '▼' : '▶' }}</span>
            </button>
            <router-link
              v-else-if="item.href"
              :to="item.href"
              class="block px-4 py-2 hover:bg-navy-light transition"
            >
              {{ item.label }}
            </router-link>

            <!-- Mobile Dropdown -->
            <div v-if="item.children && isOpen(index)" class="bg-navy-light pl-4 space-y-1">
              <router-link
                v-for="(child, childIndex) in item.children"
                :key="childIndex"
                :to="child.href || '#'"
                class="block px-3 py-2 text-sm hover:bg-navy transition rounded"
              >
                {{ child.label }}
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

interface SubMenuItem {
  label: string
  href?: string
  children?: SubMenuItem[]
}

interface MenuItem {
  label: string
  href?: string
  children?: SubMenuItem[]
}

const menuItems: MenuItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Embassy',
    children: [
      { label: 'Ambassador\'s Profile', href: '#' },
      { label: 'Embassy Officials', href: '#' },
      { label: 'Former Ambassadors', href: '#' },
      { label: 'Location Guide', href: '#' },
      { label: 'Working Hours', href: '#' },
      { label: 'Right to Information', href: '#' },
      { label: 'Vacancies', href: '#' },
      { label: 'List of Holidays 2026', href: '#' }
    ]
  },
  {
    label: 'Bilateral Relations',
    children: [
      { label: 'India-Netherlands Relations', href: '#' },
      { label: 'India-Curacao Relations', href: '#' },
      { label: 'India-Aruba Relations', href: '#' },
      { label: 'India-Sint Maarten Relations', href: '#' },
      { label: 'Indian Community in Netherlands', href: '#' },
      { label: 'State Visits', href: '#' }
    ]
  },
  {
    label: 'Consular',
    children: [
      { label: 'Indian Visa Services', href: '/visa-services' },
      { label: 'Book Online Appointment', href: '#' },
      { label: 'OCI Card', href: '#' },
      { label: 'Visa Types', href: '#' },
      { label: 'Passport Services', href: '#' },
      { label: 'Attestation', href: '#' },
      { label: 'Birth & Death Certificates', href: '#' },
      { label: 'Emergency Certificate', href: '#' },
      { label: 'Forms & Documents', href: '/consular-services' }
    ]
  },
  {
    label: 'Economic & Commerce',
    children: [
      { label: 'Bilateral Trade', href: '#' },
      { label: 'Investment Opportunities', href: '#' },
      { label: 'Doing Business in India', href: '#' },
      { label: 'Trade Statistics', href: '#' }
    ]
  },
  { label: 'Culture', href: '#' },
  {
    label: 'Media',
    children: [
      { label: 'News', href: '/media' },
      { label: 'Press Releases', href: '#' },
      { label: 'Interviews', href: '#' },
      { label: 'Speeches', href: '#' }
    ]
  },
  {
    label: 'Tenders',
    children: [
      { label: 'Embassy Tenders', href: '#' },
      { label: 'Commerce Tenders', href: '#' }
    ]
  },
  { label: 'Education', href: '#' },
  { label: 'Events', href: '#' },
  { label: 'Contact', href: '/contact' }
]

const openDropdowns = ref<number[]>([])

const toggleDropdown = (index: number) => {
  const position = openDropdowns.value.indexOf(index)
  if (position > -1) {
    openDropdowns.value.splice(position, 1)
  } else {
    openDropdowns.value.push(index)
  }
}

const isOpen = (index: number) => openDropdowns.value.includes(index)

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.menu-list li:hover > div {
  opacity: 1;
  visibility: visible;
}
</style>
