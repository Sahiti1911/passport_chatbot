<template>
  <PageLayout
    title="Media & News"
    subtitle="Latest news, press releases, and updates from the Embassy"
    :sidebarItems="sidebarItems"
  >
    <!-- Main Content -->
    <div class="space-y-8">
      <!-- Tab Navigation -->
      <div class="border-b border-gray-200 flex gap-6 mb-6">
        <button
          @click="activeTab = 'news'"
          class="px-4 py-3 font-semibold border-b-2 transition"
          :class="{
            'border-accent text-navy': activeTab === 'news',
            'border-transparent text-grey-text hover:text-navy': activeTab !== 'news'
          }"
        >
          News
        </button>
        <button
          @click="activeTab = 'press'"
          class="px-4 py-3 font-semibold border-b-2 transition"
          :class="{
            'border-accent text-navy': activeTab === 'press',
            'border-transparent text-grey-text hover:text-navy': activeTab !== 'press'
          }"
        >
          Press Releases
        </button>
        <button
          @click="activeTab = 'interviews'"
          class="px-4 py-3 font-semibold border-b-2 transition"
          :class="{
            'border-accent text-navy': activeTab === 'interviews',
            'border-transparent text-grey-text hover:text-navy': activeTab !== 'interviews'
          }"
        >
          Interviews
        </button>
        <button
          @click="activeTab = 'speeches'"
          class="px-4 py-3 font-semibold border-b-2 transition"
          :class="{
            'border-accent text-navy': activeTab === 'speeches',
            'border-transparent text-grey-text hover:text-navy': activeTab !== 'speeches'
          }"
        >
          Speeches
        </button>
      </div>

      <!-- News Articles -->
      <div v-if="activeTab === 'news'" class="space-y-4">
        <div
          v-for="article in newsArticles"
          :key="article.title"
          class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
        >
          <h3 class="text-lg font-bold text-navy hover:text-accent mb-2">{{ article.title }}</h3>
          <p class="text-grey-text text-sm mb-3">📅 {{ article.date }}</p>
          <p class="text-grey-text mb-4">{{ article.excerpt }}</p>
          <a href="#" class="text-accent hover:text-accent-orange font-semibold">Read Full Article →</a>
        </div>
      </div>

      <!-- Press Releases -->
      <div v-if="activeTab === 'press'" class="space-y-4">
        <div
          v-for="release in pressReleases"
          :key="release.title"
          class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
        >
          <h3 class="text-lg font-bold text-navy hover:text-accent mb-2">{{ release.title }}</h3>
          <p class="text-grey-text text-sm mb-3">📅 {{ release.date }}</p>
          <p class="text-grey-text mb-4">{{ release.excerpt }}</p>
          <a href="#" class="text-accent hover:text-accent-orange font-semibold">Read Press Release →</a>
        </div>
      </div>

      <!-- Interviews -->
      <div v-if="activeTab === 'interviews'" class="space-y-4">
        <div
          v-for="interview in interviews"
          :key="interview.title"
          class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
        >
          <h3 class="text-lg font-bold text-navy hover:text-accent mb-2">{{ interview.title }}</h3>
          <p class="text-grey-text text-sm mb-3">📅 {{ interview.date }}</p>
          <p class="text-grey-text mb-4">{{ interview.excerpt }}</p>
          <a href="#" class="text-accent hover:text-accent-orange font-semibold">View Interview →</a>
        </div>
      </div>

      <!-- Speeches -->
      <div v-if="activeTab === 'speeches'" class="space-y-4">
        <div
          v-for="speech in speeches"
          :key="speech.title"
          class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
        >
          <h3 class="text-lg font-bold text-navy hover:text-accent mb-2">{{ speech.title }}</h3>
          <p class="text-grey-text text-sm mb-3">📅 {{ speech.date }}</p>
          <p class="text-grey-text mb-4">{{ speech.excerpt }}</p>
          <a href="#" class="text-accent hover:text-accent-orange font-semibold">Read Speech →</a>
        </div>
      </div>

      <!-- Media Accreditation -->
      <section class="bg-navy text-white rounded-lg p-8 mt-8">
        <h2 class="text-2xl font-bold mb-4">Media Accreditation</h2>
        <p class="mb-6">
          Journalists and media professionals can apply for accreditation to cover events and press conferences at the Embassy.
        </p>
        <button class="bg-accent hover:bg-accent-orange text-white font-bold py-2 px-6 rounded-lg transition">
          Apply for Accreditation
        </button>
      </section>

      <!-- Contact -->
      <section class="bg-gray-50 rounded-lg p-8 border border-gray-200">
        <h2 class="text-2xl font-bold text-navy mb-4">Media Inquiries</h2>
        <p class="text-grey-text mb-4">
          For media inquiries, press statements, or to schedule interviews, please contact our media relations office.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p class="font-semibold text-navy mb-2">📧 Email</p>
            <a href="mailto:media@indianembassynetherlands.gov.in" class="text-accent hover:underline">
              media@indianembassynetherlands.gov.in
            </a>
          </div>
          <div>
            <p class="font-semibold text-navy mb-2">☎️ Phone</p>
            <p class="text-grey-text">+31 70 346 9771</p>
          </div>
        </div>
      </section>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../components/PageLayout.vue'
import { ref } from 'vue'

const activeTab = ref('news')

const sidebarItems = [
  { label: 'Media Center' },
  { label: 'News', href: '#' },
  { label: 'Press Releases', href: '#' },
  { label: 'Interviews', href: '#' },
  { label: 'Speeches', href: '#' },
  { label: 'Guidelines' },
  { label: 'Media Guidelines', href: '#' },
  { label: 'Press Accreditation', href: '#' },
  { label: 'Journalist Visa', href: '#' },
  { label: 'Photo Gallery', href: '#' },
  { label: 'Video Library', href: '#' }
]

const newsArticles = [
  {
    title: 'Department of Science and Technology Strengthens India-Netherlands Cooperation in Green Hydrogen Research',
    date: 'Feb 09, 2026',
    excerpt: 'The Embassy welcomes the joint initiative to promote green hydrogen research and development.'
  },
  {
    title: 'Visit of H.E. Mr. David van Weel, Minister of Foreign Affairs',
    date: 'Dec 19, 2025',
    excerpt: 'Minister van Weel visited the Embassy to discuss bilateral relations and economic cooperation.'
  },
  {
    title: 'India-Netherlands Economic Cooperation Agreement Signed',
    date: 'Dec 15, 2025',
    excerpt: 'New agreement aims to enhance trade and investment between the two countries.'
  },
  {
    title: 'Cultural Programme at India House',
    date: 'Dec 10, 2025',
    excerpt: 'A spectacular evening celebrating Indian culture and traditions.'
  }
]

const pressReleases = [
  {
    title: 'DST Strengthens India-Netherlands Cooperation in Green Hydrogen',
    date: 'Feb 09, 2026',
    excerpt: 'Joint research initiative launches to advance green hydrogen technology.'
  },
  {
    title: 'Joint Statement on Bilateral Relations',
    date: 'Dec 20, 2025',
    excerpt: 'India and Netherlands reaffirm commitment to strengthening ties.'
  },
  {
    title: 'Embassy Issues Guidelines for Visa Processing',
    date: 'Dec 18, 2025',
    excerpt: 'New streamlined procedures to expedite visa processing.'
  },
  {
    title: 'India Day Celebration Announcement',
    date: 'Dec 15, 2025',
    excerpt: 'Save the date for the grand India Day celebrations in 2026.'
  }
]

const interviews = [
  {
    title: 'Ambassador Kumar Tuhin on India-Netherlands Relations',
    date: 'Jan 15, 2026',
    excerpt: 'Exclusive interview with H.E. Ambassador on bilateral cooperation.'
  },
  {
    title: 'Commercial Officer Discusses Trade Opportunities',
    date: 'Dec 20, 2025',
    excerpt: 'Insights into India-Netherlands trade and investment opportunities.'
  }
]

const speeches = [
  {
    title: 'Speech at Republic Day Ceremony',
    date: 'Jan 26, 2026',
    excerpt: 'Ambassador\'s speech celebrating India\'s 77th Republic Day.'
  },
  {
    title: 'Address at Business Forum',
    date: 'Jan 10, 2026',
    excerpt: 'Discussion on economic cooperation and business opportunities.'
  }
]
</script>

<style scoped>
</style>
