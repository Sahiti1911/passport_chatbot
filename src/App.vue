<template>
  <div class="min-h-screen flex flex-col bg-white">
    <div class="sticky top-0 z-50 w-full shadow-md">
      <SiteHeader />
      <SiteNavigation />
    </div>
    <main class="flex-grow">
      <router-view />
    </main>
    <SiteFooter />
    <ChatBot />
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteNavigation from './components/SiteNavigation.vue'
import SiteFooter from './components/SiteFooter.vue'
import ChatBot from './components/ChatBot.vue'

const sessionId = ref('')
const API_BASE = '/api'

onMounted(async () => {
  try {
    const response = await fetch(`${API_BASE}/session-id`)
    const data = await response.json()
    sessionId.value = data.sessionId
  } catch (error) {
    console.error('App: Failed to initialize AI session:', error)
  }
})

provide('chatSessionId', sessionId)
</script>

<style scoped></style>
