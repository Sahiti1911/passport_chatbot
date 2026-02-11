<template>
  <div class="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[100] font-sans flex flex-col items-end max-w-[calc(100vw-2rem)]">
    <!-- Chat Window -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-10 opacity-0 scale-95"
      enter-to-class="transform translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100 scale-100"
      leave-to-class="transform translate-y-10 opacity-0 scale-95"
    >
      <div v-if="isOpen" class="mb-4 w-[calc(100vw-2rem)] sm:w-[380px] h-[70vh] sm:h-[550px] max-h-[calc(100vh-120px)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 transition-all duration-300">
        <!-- Header -->
        <div class="bg-gradient-to-r from-[#164a9a] to-[#1e5bb8] p-4 sm:p-5 flex items-center justify-between text-white shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-white/10 shadow-sm">
              <img :src="robotIcon" alt="Assistant" class="w-8 h-8 object-contain " />
            </div>
            <div>
              <h3 class="font-bold text-base leading-tight">Embassy Assistant</h3>
              <div class="flex items-center gap-1.5">
                <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span class="text-[11px] font-medium opacity-80 uppercase tracking-wider">Online</span>
              </div>
            </div>
          </div>
          <button @click="toggleChat" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Messages area -->
        <div ref="chatContainer" class="flex-grow overflow-y-auto p-4 sm:p-5 bg-[#f8f9fa] space-y-4">
          <div v-for="(msg, idx) in messages" :key="idx"
               class="flex flex-col"
               :class="msg.isUser ? 'items-end' : 'items-start'">
            <div :class="[
              'max-w-[85%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed shadow-sm markdown-content',
              msg.isUser ? 'bg-[#164a9a] text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none border border-gray-100',
              msg.isRejection ? 'border-red-200 bg-red-50/30' : ''
            ]">
              <i v-if="msg.isRejection" class="fa-solid fa-circle-exclamation text-red-400 mr-2 text-[10px]"></i>
              <div v-if="!msg.isUser" v-html="renderMarkdown(msg.text)"></div>
              <div v-else>{{ msg.text }}</div>
            </div>
            <span class="text-[10px] text-gray-400 mt-1 font-medium">{{ msg.time }}</span>
          </div>

          <!-- Typing Indicator -->
          <div v-if="isLoading" class="flex flex-col items-start animate-fade-in">
            <div class="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
              <span class="w-1.5 h-1.5 bg-[#164a9a] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span class="w-1.5 h-1.5 bg-[#164a9a] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span class="w-1.5 h-1.5 bg-[#164a9a] rounded-full animate-bounce"></span>
            </div>
          </div>
        </div>

        <!-- Input area -->
        <div class="p-3 sm:p-4 bg-white border-t border-gray-100">
          <form @submit.prevent="sendMessage" class="flex items-center gap-2 bg-gray-50 p-2 rounded-xl border border-gray-200 focus-within:border-[#164a9a] transition-all">
            <input
              v-model="message"
              type="text"
              placeholder="Type your message here..."
              class="flex-grow bg-transparent border-none focus:ring-0 text-[14px] px-2 py-1 outline-none text-gray-700"
              :disabled="isLoading"
            />
            <button
              type="submit"
              class="w-10 h-10 bg-[#164a9a] text-white rounded-lg flex items-center justify-center hover:bg-[#1e5bb8] transition-colors shadow-md disabled:opacity-50"
              :disabled="!message.trim() || isLoading"
            >
              <i class="fa-solid fa-paper-plane text-sm"></i>
            </button>
          </form>
          <p class="text-[9px] text-center text-gray-400 mt-3 uppercase tracking-tighter font-bold">Powered by Ariqt Global Technologies</p>
        </div>
      </div>
    </Transition>

    <!-- Floating Toggle Button -->
    <button
      @click="toggleChat"
      class="w-16 h-16 rounded-full bg-gradient-to-tr from-[#164a9a] to-[#1e5bb8] text-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 relative group"
    >
      <div class="absolute -top-1 -right-1 w-4 h-4 bg-[#e63c15] rounded-full border-2 border-white" v-if="!isOpen"></div>
      <i :class="isOpen ? 'fa-solid fa-chevron-down text-xl' : 'fa-solid fa-message text-2xl group-hover:rotate-12 transition-transform'"></i>

      <!-- Tooltip -->
      <div v-if="!isOpen" class="absolute right-20 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg hidden sm:block">
        Chat with us!
        <div class="absolute right-[-4px] top-1/2 -translate-y-1/2 border-l-4 border-l-gray-900 border-y-4 border-y-transparent"></div>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, inject, watch, type Ref } from 'vue'
import { marked } from 'marked'
import robotIcon from '@/assets/robot_18355220-Photoroom-Photoroom.svg'

const isOpen = ref(false)
const message = ref('')
const chatContainer = ref<HTMLElement | null>(null)
const sessionId = inject<Ref<string>>('chatSessionId', ref(''))
const isLoading = ref(false)

interface Message {
  text: string
  isUser: boolean
  time: string
  isRejection?: boolean
}

const messages = ref<Message[]>([
  {
    text: "Namaste! I am your AI assistant for the Embassy of India. How can I help you today?",
    isUser: false,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
])

const API_BASE = '/api'

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => {
      scrollToBottom()
    })
  }
}

const sendMessage = async () => {
  if (!message.value.trim() || isLoading.value) return

  const userText = message.value
  message.value = ''

  // User message
  messages.value.push({
    text: userText,
    isUser: true,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  })

  isLoading.value = true

  try {
    if (!sessionId?.value) {
      throw new Error('AI Session not initialized. Please refresh the page.')
    }

    const response = await fetch(`${API_BASE}/conversation-message`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: sessionId.value,
        userMessage: userText
      })
    })

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`)
    }

    const data = await response.json()

    messages.value.push({
      text: data.botResponse,
      isUser: false,
      isRejection: data.isRejection,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    })
  } catch (error) {
    console.error('ChatBot: API Error -', error)
    messages.value.push({
      text: "I'm having trouble connecting to the server. Please check your connection or refresh the page.",
      isUser: false,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    })
  } finally {
    isLoading.value = false
  }
}

const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTo({
      top: chatContainer.value.scrollHeight,
      behavior: 'smooth'
    })
  }
}

const renderMarkdown = (text: string) => {
  return marked.parse(text)
}

watch([messages, isLoading], () => {
  nextTick(() => {
    scrollToBottom()
  })
}, { deep: true })
</script>

<style scoped>
.chat-container::-webkit-scrollbar {
  width: 4px;
}
.chat-container::-webkit-scrollbar-track {
  background: transparent;
}
.chat-container::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}

.markdown-content :deep(p) {
  margin-bottom: 0.5rem;
}
.markdown-content :deep(p:last-child) {
  margin-bottom: 0;
}
.markdown-content :deep(ul), .markdown-content :deep(ol) {
  margin-bottom: 0.5rem;
  padding-left: 1.25rem;
}
.markdown-content :deep(ul) {
  list-style-type: disc;
}
.markdown-content :deep(ol) {
  list-style-type: decimal;
}
.markdown-content :deep(li) {
  margin-bottom: 0.25rem;
}
.markdown-content :deep(strong) {
  font-weight: 700;
}
.markdown-content :deep(a) {
  color: #164a9a;
  text-decoration: underline;
}
</style>
