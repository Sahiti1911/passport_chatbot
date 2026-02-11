<template>
  <div class="w-full bg-white">
    <!-- Hero Slider -->
    <div class="bg-[#164a9a] relative overflow-hidden h-[240px] md:h-[340px] lg:h-[450px]">
      <div class="max-w-7xl mx-auto h-full relative">
        <!-- Hero Background Container (Dark Wings) -->
        <div class="absolute inset-0 bg-[#0a234e]"></div>

        <div class="relative h-full overflow-hidden">
            <div
              v-for="(slide, index) in heroSlides"
              :key="index"
              class="absolute inset-0 transition-opacity duration-1000"
              :class="{ 'opacity-100 z-10': index === currentSlide, 'opacity-0 z-0': index !== currentSlide }"
            >
            <!-- Slide Background Image -->
            <div
              class="w-full h-full bg-cover bg-center bg-no-repeat relative"
              :style="{ backgroundImage: `url(${slide.image})` }"
            >
                <!-- Subtle Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#0a234e]/90 via-transparent to-transparent"></div>

                <!-- Slide Content -->
                <div class="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div
                    class="max-w-4xl transform transition-all duration-700"
                    :class="index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
                  >
                    <h2 class="text-white text-xl md:text-2xl font-bold leading-tight mb-2 drop-shadow-lg">
                      {{ slide.title }}
                    </h2>
                    <div class="flex items-center gap-2 text-white/80 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm bg-black/10 px-2 py-1 rounded">
                      <i class="fa-regular fa-calendar-days"></i>
                      <span>{{ slide.date }}</span>
                    </div>
                  </div>

                  <!-- Navigation Controls (Bottom Right) -->
                  <div class="flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/20 shrink-0 mb-2">
                    <button @click="prevSlide" class="text-white hover:text-[#f4811f] transition scale-110">
                      <i class="fa-solid fa-chevron-left text-sm"></i>
                    </button>

                    <div class="flex items-center gap-2 px-2">
                      <span class="text-white font-bold text-sm tracking-widest min-w-[35px] text-center">
                        {{ currentSlide + 1 }} / {{ heroSlides.length }}
                      </span>
                    </div>

                    <button @click="toggleAutoPlay" class="text-white hover:text-[#f4811f] transition scale-100 flex items-center justify-center w-6 h-6">
                      <i v-if="timer" class="fa-solid fa-pause text-[10px]"></i>
                      <i v-else class="fa-solid fa-play text-[10px]"></i>
                    </button>

                    <button @click="nextSlide" class="text-white hover:text-[#f4811f] transition scale-110">
                      <i class="fa-solid fa-chevron-right text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination Dots (Bottom Center) -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              <button
                v-for="(_, i) in heroSlides"
                :key="i"
                @click="currentSlide = i"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="i === currentSlide ? 'bg-[#f4811f] w-6' : 'bg-white/40 hover:bg-white/60'"
              ></button>
            </div>
        </div>
      </div>
    </div>

    <!-- Updates Ticker -->
    <div class="bg-white border-b border-gray-200 py-2 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 flex items-center gap-4">
        <div class="flex items-center gap-2 font-bold whitespace-nowrap min-w-fit">
          <span class="text-[13px] uppercase font-bold text-gray-800 tracking-tight">Updates</span>
          <button
            @click="toggleTicker"
            class="w-5 h-5 flex items-center justify-center border border-gray-300 rounded text-[9px] text-gray-600 hover:bg-[#164a9a] hover:text-white transition-all shadow-sm"
          >
            <i class="fa-solid fa-pause"></i>
          </button>
          <span class="text-red-600 text-xl leading-none">•</span>
        </div>
        <div class="flex-grow overflow-hidden relative">
          <div class="animate-marquee whitespace-nowrap py-1">
            <span v-for="(update, index) in updates" :key="index" class="inline-block mr-16 text-[#164a9a] text-[14px] font-bold hover:text-[#e63c15] transition-colors cursor-pointer">
              {{ update }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="max-w-7xl mx-auto px-6 py-6">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content (Left - 2 columns) -->
        <div class="lg:col-span-2">
          <!-- Tabbed Content -->
          <div class="bg-white border-b border-gray-100 mb-6">
            <!-- Tab Navigation -->
            <div class="flex border-b border-gray-100 gap-8 overflow-x-auto no-scrollbar">
              <button
                v-for="tab in ['news', 'press', 'tenders', 'advisories', 'x']"
                :key="tab"
                @click="activeTab = tab"
                class="pb-3 font-bold text-[15px] transition-all relative whitespace-nowrap"
                :class="{
                  'text-[#e63c15]': activeTab === tab,
                  'text-gray-500 hover:text-[#164a9a]': activeTab !== tab
                }"
              >
                {{ tab === 'news' ? "What's New" : tab === 'press' ? 'Press Releases' : tab === 'tenders' ? 'Tenders' : tab === 'advisories' ? 'Public Advisories' : 'X Updates' }}
                <div v-if="activeTab === tab" class="absolute bottom-0 left-0 right-0 h-1 bg-[#e63c15] rounded-t"></div>
              </button>
            </div>

          <!-- Tab Content -->
          <div class="py-4">
            <!-- What's New Tab -->
            <div v-if="activeTab === 'news'" class="space-y-5">
              <a v-for="(item, index) in newsItems" :key="index" href="#" class="group block border-b border-gray-100 pb-4 last:border-0">
                <h4 class="text-[#164a9a] font-bold text-[15px] group-hover:text-[#e63c15] transition-colors leading-[1.4] mb-2 uppercase">{{ item.title }}</h4>
                <div class="flex items-center gap-2 text-gray-500 text-xs font-semibold">
                  <i class="fa-regular fa-calendar text-[12px] text-[#e63c15]"></i>
                  <span>{{ item.date }}</span>
                </div>
              </a>
            </div>

            <!-- Press Releases Tab -->
            <div v-if="activeTab === 'press'" class="space-y-5">
              <a v-for="(item, index) in pressReleases" :key="index" href="#" class="group block border-b border-gray-100 pb-4 last:border-0">
                <h4 class="text-[#164a9a] font-bold text-[15px] group-hover:text-[#e63c15] transition-colors leading-[1.4] mb-2 uppercase">{{ item.title }}</h4>
                <div class="flex items-center gap-2 text-gray-500 text-xs font-semibold">
                  <i class="fa-regular fa-calendar text-[12px] text-[#e63c15]"></i>
                  <span>{{ item.date }}</span>
                </div>
              </a>
            </div>

            <!-- Tenders Tab -->
            <div v-if="activeTab === 'tenders'" class="space-y-5">
              <a v-for="(item, index) in tenders" :key="index" href="#" class="group block border-b border-gray-100 pb-4 last:border-0">
                <h4 class="text-[#164a9a] font-bold text-[15px] group-hover:text-[#e63c15] transition-colors leading-[1.4] mb-2 uppercase">{{ item.title }}</h4>
                <div class="flex items-center gap-2 text-gray-500 text-xs font-semibold">
                  <i class="fa-regular fa-calendar text-[12px] text-[#e63c15]"></i>
                  <span>{{ item.date }}</span>
                </div>
              </a>
            </div>

            <!-- Advisories Tab -->
            <div v-if="activeTab === 'advisories'" class="space-y-5">
              <a v-for="(item, index) in advisories" :key="index" href="#" class="group block border-b border-gray-100 pb-4 last:border-0">
                <h4 class="text-[#164a9a] font-bold text-[15px] group-hover:text-[#e63c15] transition-colors leading-[1.4] mb-2 uppercase">{{ item.title }}</h4>
                <div class="flex items-center gap-2 text-gray-500 text-xs font-semibold">
                  <i class="fa-regular fa-calendar text-[12px] text-[#e63c15]"></i>
                  <span>{{ item.date }}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar (Right - 1 column) -->
      <aside class="lg:col-span-1">
          <!-- Ambassador Profile -->
          <div class="bg-[#eef8ff] border border-blue-100 rounded-lg p-6 shadow-sm">
            <div class="flex items-start gap-4">
              <div class="w-24 h-24 rounded-lg overflow-hidden border-2 border-white shadow-md bg-white shrink-0">
                <img :src="ambassadorImg" alt="Ambassador" class="w-full h-full object-cover" />
              </div>
              <div>
                <h3 class="text-[#164a9a] font-bold text-[17px] mb-1 leading-tight">Ambassador</h3>
                <p class="text-[#164a9a] text-[13px] font-semibold opacity-80 mb-2">H.E. Mr. KUMAR TUHIN</p>
                <a href="#" class="inline-flex items-center gap-1 text-[#164a9a] hover:text-[#e63c15] font-bold text-[12px] transition-colors">
                  View Profile <i class="fa-solid fa-chevron-right text-[8px]"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Quick Actions Grid -->
          <div class="grid grid-cols-1 gap-3 mt-6">
            <a href="#" class="flex items-center justify-between p-4 bg-[#164a9a] text-white rounded-lg hover:bg-[#0d346b] transition-all shadow-md group">
              <span class="font-bold text-[13px]">Emergency Contact After Office Hours</span>
              <i class="fa-solid fa-phone text-xs group-hover:rotate-12 transition-transform"></i>
            </a>
            <a href="#" class="flex items-center justify-between p-4 bg-[#164a9a] text-white rounded-lg hover:bg-[#0d346b] transition-all shadow-md group">
              <span class="font-bold text-[13px]">Book Online Appointment</span>
              <i class="fa-solid fa-calendar-check text-xs group-hover:scale-110 transition-transform"></i>
            </a>
            <a href="#" class="flex items-center justify-between p-4 bg-[#164a9a] text-white rounded-lg hover:bg-[#0d346b] transition-all shadow-md group">
              <span class="font-bold text-[13px]">Registration of Indian Students</span>
              <i class="fa-solid fa-graduation-cap text-xs group-hover:scale-110 transition-transform"></i>
            </a>
            <a href="#" class="flex items-center justify-between px-4 py-5 bg-gradient-to-r from-orange-600 via-white to-green-600 text-gray-800 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <span class="font-bold text-[15px] drop-shadow-sm">Public Advisory</span>
              <img src="/src/assets/logo.png" alt="India" class="h-8 w-auto object-contain" />
            </a>
          </div>
        </aside>
      </div>
    </div>

    <!-- Performance Smart Board -->
    <div class="bg-[#ebebeb] py-10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col lg:flex-row bg-white rounded-lg shadow-xl overflow-hidden min-h-[320px] relative border border-gray-200">
          <!-- Left Sidebar Section -->
          <div class="lg:w-[30%] bg-[#164a9a] p-8 flex flex-col justify-between relative overflow-hidden group">
            <!-- Diagonal accent -->
            <div class="absolute top-0 right-0 w-32 h-full bg-white/5 skew-x-[-20deg] translate-x-16 group-hover:translate-x-12 transition-transform duration-700"></div>

            <div class="relative z-10">
              <div class="mb-6 flex items-center gap-3">
                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <i class="fa-solid fa-chart-line text-white text-xl"></i>
                </div>
                <h2 class="text-white text-2xl font-bold leading-tight">Performance<br/>Smart Board</h2>
              </div>
              <a href="#" class="inline-flex items-center gap-2 text-white/90 hover:text-white font-bold text-[15px] border-b border-white/30 pb-1 group/link transition-all">
                View Dashboard
                <i class="fa-solid fa-chevron-right text-[10px] group-hover/link:translate-x-1 transition-transform"></i>
              </a>
            </div>

            <div class="relative z-10 flex items-center gap-3">
              <button class="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white/10 transition">
                <i class="fa-solid fa-pause text-[10px]"></i>
              </button>
            </div>
          </div>

          <!-- KPI Cards Section -->
          <div class="lg:w-[70%] p-2 bg-[#f8f9fa] relative flex items-center">
            <!-- Navigation Arrows -->
            <button class="absolute left-2 z-10 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center text-gray-400 hover:text-[#164a9a] transition">
              <i class="fa-solid fa-chevron-left text-xs"></i>
            </button>
            <button class="absolute right-2 z-10 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center text-gray-400 hover:text-[#164a9a] transition">
              <i class="fa-solid fa-chevron-right text-xs"></i>
            </button>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-0.5 w-full h-full">
              <div v-for="(kpi, index) in kpiData.slice(0, 3)" :key="index" class="bg-white p-6 flex flex-col items-center justify-center text-center group hover:bg-white transition-all duration-300 border-r border-gray-100 last:border-r-0">
                <div class="mb-5 h-14 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
                  <i v-if="index === 0" class="fa-solid fa-laptop-code text-4xl text-[#164a9a]"></i>
                  <i v-if="index === 1" class="fa-regular fa-id-card text-4xl text-[#164a9a]"></i>
                  <i v-if="index === 2" class="fa-solid fa-file-signature text-4xl text-[#164a9a]"></i>
                </div>
                <div class="text-[#164a9a] text-3xl font-extrabold mb-1 tracking-tight">{{ kpi.value }}</div>
                <p class="text-gray-800 text-[13px] font-bold leading-tight mb-4 uppercase tracking-tighter">{{ kpi.label }}</p>

                <div class="mt-auto pt-4 border-t border-gray-100 w-full">
                  <p class="text-[11px] text-gray-500 font-bold mb-0.5">{{ kpi.period }}</p>
                  <p class="text-[11px] text-[#e63c15] font-bold">{{ kpi.subText }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Events & Gallery Section -->
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex justify-between items-center mb-10">
          <div class="flex items-center gap-4">
            <div class="h-8 w-1.5 bg-[#e63c15] rounded-full"></div>
            <h2 class="text-3xl font-bold text-gray-900 tracking-tight">Events / Photo Gallery</h2>
          </div>
          <div class="flex items-center gap-6">
            <a href="#" class="text-gray-500 hover:text-[#164a9a] font-bold text-sm uppercase tracking-wider transition-colors">View All</a>
            <div class="flex gap-2">
              <button @click="prevGallery" class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#164a9a] hover:text-[#164a9a] transition shadow-sm">
                <i class="fa-solid fa-chevron-left text-xs"></i>
              </button>
              <button @click="nextGallery" class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#164a9a] hover:text-[#164a9a] transition shadow-sm">
                <i class="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div v-for="(event, idx) in galleryEvents.slice(currentGalleryIndex, currentGalleryIndex + 2)" :key="idx"
               class="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer flex flex-col h-full animate-fadeIn">
            <div class="relative overflow-hidden aspect-[16/10] shrink-0">
              <img :src="event.image" :alt="event.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
              <div class="absolute bottom-4 left-4">
                <div class="flex items-center gap-2 text-white text-[11px] font-bold uppercase tracking-widest bg-[#e63c15] px-2.5 py-1 rounded-md shadow-lg">
                  <i class="fa-regular fa-calendar-days"></i>
                  <span>{{ event.date }}</span>
                </div>
              </div>
            </div>
            <div class="p-6 flex flex-col flex-grow bg-white">
              <h3 class="text-gray-900 font-bold text-[17px] leading-[1.5] mb-4 group-hover:text-[#164a9a] transition-colors line-clamp-3">
                {{ event.title }}
              </h3>
              <div class="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                <span class="text-[#164a9a] text-[12px] font-extrabold uppercase tracking-wider flex items-center gap-2">
                  View Gallery
                  <i class="fa-solid fa-arrow-right-long group-hover:translate-x-1 transition-transform"></i>
                </span>
                <div class="flex items-center gap-1">
                  <i class="fa-solid fa-camera text-gray-300 text-sm"></i>
                  <span class="text-gray-400 text-[10px] font-bold">12 Photos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Partner Logos (Important Resources) -->
    <div class="bg-white border-t border-gray-100 py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          <a
            v-for="(partner, index) in partnerLinks"
            :key="index"
            :href="partner.url"
            target="_blank"
            class="h-24 border border-gray-100 rounded-lg flex items-center justify-center overflow-hidden hover:shadow-xl transition-all bg-white group hover:grayscale"
          >
            <img :src="partner.logo" :alt="partner.name" class="w-full h-full object-fill" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ppcImg from '../assets/pariksha-pe-charcha.png'
import receptionImg from '../assets/Reception.png'
import externalAffairImg from '../assets/External_affair.png'
import seventySeventhImg from '../assets/77th.png'
import culturalImg from '../assets/cultural.png'
import ambassadorImg from '../assets/1730530360_Mr.Kumar-Tuhin.jpg'

const activeTab = ref('news')
const currentSlide = ref(0)
const currentGalleryIndex = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const heroSlides = [
  {
    title: 'H.E. Narendra Modi, Prime Minister of India met H.E. Dick Schoof, Prime Minister of the Netherlands on the sidelines of the G20 Summit in Johannesburg',
    date: 'November 27, 2025',
    image: receptionImg
  },
  {
    title: 'Reception to mark the 77th Republic Day of India, celebrating the nation\'s democratic values, achievements, and the strengthening of the India - Netherlands partnership',
    date: 'January 26, 2026',
    image: seventySeventhImg
  },
  {
    title: 'Hon\'ble External Affairs Minister Dr. S. Jaishankar met with the Prime Minister of the Netherlands, H.E. Dick Schoof, Minister of Foreign Affairs H. E. Caspar Veldkamp and Defence Minister H.E. Ruben Brekelmans',
    date: 'May 20, 2025',
    image: externalAffairImg
  },
  {
    title: '9th edition of Pariksha Pe Charcha, programme of Hon\'ble Prime Minister with students, teachers and parents in January 2026',
    date: 'December 10, 2025',
    image: ppcImg
  },
  {
    title: 'Cultural Performance during the Celebration of the 77th Republic Day of India',
    date: 'January 26, 2026',
    image: culturalImg
  }
]

const updates = [
  'KNOW INDIA PROGRAMME (KIP) - 86th EDITION AND VIKSIT BHARAT YOUNG LEADERS DIALOGUE (VBYLD)',
  'Scholarship for studying Hindi in India for the Academic Session 2025-26',
  'SPDC Programme for the academic year 2025-26 for the Children of NRIs/PIOs/OCIs',
  'Celebration of 77th Republic Day of India- 26th January 2026'
]

const newsItems = [
  { title: 'Department of Science and Technology (DST) Strengthens India-Netherlands Cooperation in Green Hydrogen Research', date: 'Feb 09, 2026' },
  { title: 'Celebration of 77th Republic Day of India - 26th January 2026', date: 'Jan 23, 2026' },
  { title: 'SPDC Programme for the academic year 2025-26 for the Children of NRIs/PIOs/OCIs', date: 'Dec 30, 2025' },
  { title: 'Visit of H.E. Mr. David van Weel, Minister of Foreign Affairs of the Kingdom of the Netherlands', date: 'Dec 19, 2025' }
]

const pressReleases = [
  { title: 'Press Release - Viksit Bharat Run 2025', date: 'Sep 28, 2025' },
  { title: 'Joint Statement on the Visit of Prime Minister Dick Schoof to India', date: 'Jun 20, 2025' },
  { title: 'Update on Mission Policies for OCI Applications', date: 'May 15, 2025' }
]

const tenders = [
  { title: 'E-NOTICE: Annulment of Tender for outsourcing of Consular, Passport, Visa (CPV) services', date: 'Jul 16, 2025' },
  { title: 'Notice Inviting Tender for Annual Maintenance Contract of IT Hardware', date: 'May 10, 2025' }
]

const advisories = [
  { title: 'Advisory for Indian students seeking admission/studying in the Netherlands', date: 'Dec 10, 2025' },
  { title: 'Advisory on Satelite Phones', date: 'Oct 15, 2025' },
  { title: 'Advisory on Trade Dispute', date: 'Sep 01, 2025' }
]

const kpiData = [
  { label: 'e-Migrate Portal', value: '45,63,743', period: '2014 - 2024', subText: '[ Till Nov 2024 ]' },
  { label: 'SPDC Scholarships Awarded', value: '1,157', period: 'Apr 2014 - 2024', subText: '[ Till Nov 2024 ]' },
  { label: 'Documents Authenticated', value: '1,23,49,398', period: '2014 - 2024', subText: '[ Till Nov 2024 ]' },
  { label: 'Know India Programme (KIP) Participants', value: '1,952', period: '2014 - 2024', subText: '[ Till Nov 2024 ]' }
]

const galleryEvents = [
  { title: "Hon'ble External Affairs Minister Dr. S. Jaishankar's visit to the Netherlands", date: 'May 19, 2025', image: externalAffairImg },
  { title: 'Cultural Performance during the Celebration of the 77th Republic Day of India', date: 'January 26, 2026', image: culturalImg },
  { title: 'H.E. Narendra Modi met H.E. Dick Schoof on the sidelines of G20', date: 'November 27, 2025', image: receptionImg },
  { title: '77th Republic Day Celebration at India House, Wassenaar', date: 'January 26, 2026', image: seventySeventhImg }
]

import { partnerLinks } from '../data/partners'

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + heroSlides.length) % heroSlides.length
}

const nextGallery = () => {
  if (currentGalleryIndex.value < galleryEvents.length - 2) {
    currentGalleryIndex.value += 2
  } else {
    currentGalleryIndex.value = 0
  }
}

const prevGallery = () => {
  if (currentGalleryIndex.value >= 2) {
    currentGalleryIndex.value -= 2
  } else {
    currentGalleryIndex.value = Math.max(0, galleryEvents.length - 2)
  }
}

const startAutoPlay = () => {
  timer = setInterval(nextSlide, 5000)
}

const stopAutoPlay = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

const toggleAutoPlay = () => {
  if (timer) {
    stopAutoPlay()
  } else {
    startAutoPlay()
  }
}

const toggleTicker = () => {
  // Logic to pause/resume ticker if needed, for now just a toggle placeholder
  console.log('Ticker toggle clicked')
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

:deep(.line-clamp-2) {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

:deep(.line-clamp-3) {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
