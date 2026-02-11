<template>
  <div class="min-h-screen">
    <!-- Breadcrumb Navigation -->
    <div class="bg-gray-50 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 py-3 text-sm">
        <router-link to="/" class="text-navy hover:text-accent">Home</router-link>
        <span class="text-grey-text mx-2">/</span>
        <span class="text-grey-text">Page</span>
      </div>
    </div>

    <!-- Page Content -->
    <div class="max-w-2xl mx-auto px-4 py-16 text-center">
      <div class="bg-gray-50 rounded-lg p-12 border border-gray-200">
        <h1 class="text-4xl font-bold text-navy mb-4">Page Coming Soon</h1>
        <p class="text-grey-text text-lg mb-8">
          This page is currently being developed. Please check back soon or navigate to one of our available sections.
        </p>

        <div class="space-y-4">
          <p class="text-grey-text">
            In the meantime, you can explore:
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <router-link to="/" class="bg-navy text-white py-2 px-4 rounded-lg hover:bg-navy-dark transition font-semibold">
              Home
            </router-link>
            <router-link to="/embassy" class="bg-navy text-white py-2 px-4 rounded-lg hover:bg-navy-dark transition font-semibold">
              Embassy
            </router-link>
            <router-link to="/visa-services" class="bg-navy text-white py-2 px-4 rounded-lg hover:bg-navy-dark transition font-semibold">
              Visas
            </router-link>
            <router-link to="/consular-services" class="bg-navy text-white py-2 px-4 rounded-lg hover:bg-navy-dark transition font-semibold">
              Services
            </router-link>
            <router-link to="/media" class="bg-navy text-white py-2 px-4 rounded-lg hover:bg-navy-dark transition font-semibold">
              Media
            </router-link>
            <router-link to="/contact" class="bg-navy text-white py-2 px-4 rounded-lg hover:bg-navy-dark transition font-semibold">
              Contact
            </router-link>
          </div>
        </div>

        <p class="text-grey-text text-sm mt-8">
          If you believe this should not be a placeholder page, please <router-link to="/contact" class="text-accent hover:underline">contact us</router-link> or provide feedback.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
