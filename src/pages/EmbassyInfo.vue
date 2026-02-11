<template>
  <PageLayout
    title="Embassy"
    subtitle="Learn about the Embassy of India, The Hague"
    :sidebarItems="sidebarItems"
  >
    <!-- Main Content -->
    <div class="space-y-8">
      <!-- Welcome Section -->
      <section>
        <h2 class="text-2xl font-bold text-navy mb-4">Welcome to the Embassy of India</h2>
        <p class="text-grey-text leading-relaxed mb-4">
          The Embassy of India in The Hague is the official diplomatic mission of the Republic of India to the Kingdom of the Netherlands. The Embassy serves the interests of the Indian State and community in the Netherlands, Curacao, Aruba, and Sint Maarten.
        </p>
        <p class="text-grey-text leading-relaxed mb-4">
          The Embassy provides a wide range of consular services to Indian citizens, including passport issuance, visa processing, and civil registration. We also promote cultural and economic relations between India and the Netherlands.
        </p>
      </section>

      <!-- Ambassador Section -->
      <section class="bg-gray-50 rounded-lg p-8 border border-gray-200">
        <h2 class="text-2xl font-bold text-navy mb-4">Ambassador</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg p-6 text-center border border-gray-200">
            <div class="bg-grey-text text-white rounded-lg h-40 flex items-center justify-center mb-4">
              👤
            </div>
            <h3 class="text-navy font-bold mb-2">H.E. Mr. KUMAR TUHIN</h3>
            <p class="text-grey-text text-sm">Ambassador of India</p>
          </div>
          <div class="md:col-span-2">
            <p class="text-grey-text leading-relaxed mb-4">
              H.E. Mr. Kumar Tuhin is a senior diplomat with extensive experience in international relations and consular affairs. He has served in various capacities across different diplomatic missions and brings a wealth of experience to his current position.
            </p>
            <h4 class="font-semibold text-navy mb-2">Key Responsibilities:</h4>
            <ul class="list-disc list-inside text-grey-text space-y-1">
              <li>Representing India in bilateral relations</li>
              <li>Overseeing consular services</li>
              <li>Promoting cultural and economic cooperation</li>
              <li>Addressing public inquiries and complaints</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Contact Information -->
      <section>
        <h2 class="text-2xl font-bold text-navy mb-4">Contact Information</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h3 class="font-bold text-navy mb-3">📍 Address</h3>
            <p class="text-grey-text">
              Embassy of India<br>
              Balistraat 53<br>
              2585 XN The Hague<br>
              The Netherlands
            </p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h3 class="font-bold text-navy mb-3">☎️ Phone & Email</h3>
            <p class="text-grey-text">
              General Inquiries: +31 70 346 9771<br>
              Consular Services: +31 70 346 9722<br>
              Email: <a href="mailto:info@indianembassynetherlands.gov.in" class="text-accent hover:underline">info@indianembassynetherlands.gov.in</a>
            </p>
          </div>
        </div>
      </section>

      <!-- Working Hours -->
      <section class="bg-blue-50 rounded-lg p-8 border border-blue-200">
        <h2 class="text-2xl font-bold text-navy mb-4">Working Hours</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-bold text-navy mb-3">General Office</h3>
            <p class="text-grey-text">
              Monday - Friday: 9:00 AM - 5:30 PM<br>
              Saturday - Sunday: Closed<br>
              <br>
              <strong>Lunch Break:</strong> 1:00 PM - 2:00 PM
            </p>
          </div>
          <div>
            <h3 class="font-bold text-navy mb-3">Consular Services</h3>
            <p class="text-grey-text">
              Monday - Friday: 9:30 AM - 1:00 PM<br>
              Saturday - Sunday: Closed<br>
              <br>
              (For appointment bookings only)
            </p>
          </div>
        </div>
      </section>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../components/PageLayout.vue'

const sidebarItems = [
  { label: 'About Embassy' },
  { label: 'Ambassador\'s Profile', href: '#' },
  { label: 'Embassy Officials', href: '#' },
  { label: 'Former Ambassadors', href: '#' },
  { label: 'Location & Hours' },
  { label: 'Location Guide', href: '#' },
  { label: 'Working Hours', href: '#' },
  { label: 'Office Address', href: '#' },
  { label: 'Additional Information' },
  { label: 'Right to Information', href: '#' },
  { label: 'Vacancies', href: '#' },
  { label: 'Holidays', href: '#' }
]
</script>

<style scoped>
</style>
