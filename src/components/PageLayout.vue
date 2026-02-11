<template>
  <div class="min-h-screen">
    <!-- Breadcrumb Navigation -->
    <div class="bg-gray-50 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 py-3 text-sm">
        <router-link to="/" class="text-navy hover:text-accent">Home</router-link>
        <span class="text-grey-text mx-2">/</span>
        <span class="text-grey-text">{{ title }}</span>
      </div>
    </div>

    <!-- Page Header -->
    <div class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold text-navy mb-2">{{ title }}</h1>
        <p v-if="subtitle" class="text-grey-text text-lg">{{ subtitle }}</p>
      </div>
    </div>

    <!-- Page Content -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar -->
        <aside class="lg:col-span-1">
          <nav class="bg-gray-50 rounded-lg p-6 sticky top-20">
            <h3 class="font-bold text-navy mb-4">Navigation</h3>
            <ul class="space-y-2">
              <li v-for="(item, index) in sidebarItems" :key="index">
                <router-link
                  v-if="item.href"
                  :to="item.href"
                  class="block px-3 py-2 rounded text-navy hover:bg-white hover:text-accent transition"
                >
                  {{ item.label }}
                </router-link>
                <span v-else class="block px-3 py-2 font-semibold text-navy border-b border-gray-200 mb-2 pb-2">
                  {{ item.label }}
                </span>
                <ul v-if="item.children" class="pl-4 space-y-1">
                  <li v-for="(child, childIndex) in item.children" :key="childIndex">
                    <router-link
                      :to="child.href || '#'"
                      class="block px-2 py-1 text-sm rounded text-grey-text hover:text-navy hover:bg-white transition"
                    >
                      {{ child.label }}
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </aside>

        <!-- Main Content -->
        <main class="lg:col-span-3">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SidebarItem {
  label: string
  href?: string
  children?: SidebarItem[]
}

defineProps<{
  title: string
  subtitle?: string
  sidebarItems: SidebarItem[]
}>()

defineEmits<{
  navigate: [href: string]
}>()
</script>

<style scoped>
</style>
