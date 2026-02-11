<template>
  <PageLayout
    title="Visa Services"
    subtitle="Complete information about Indian visas for travelers to India"
    :sidebarItems="sidebarItems"
  >
    <!-- Main Content -->
    <div class="space-y-8">
      <!-- Introduction -->
      <section>
        <h2 class="text-2xl font-bold text-navy mb-4">Indian Visa Information</h2>
        <p class="text-grey-text leading-relaxed mb-4">
          The Embassy of India issues various types of visas to nationals of the Netherlands and other countries. This section provides comprehensive information about visa types, application procedures, and requirements.
        </p>
        <div class="bg-accent bg-opacity-10 border-l-4 border-accent p-4 rounded">
          <p class="text-navy font-semibold">
            Most visa applications can now be submitted online through our e-Visa portal for faster processing.
          </p>
        </div>
      </section>

      <!-- Visa Types Grid -->
      <section>
        <h2 class="text-2xl font-bold text-navy mb-6">Types of Visas</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="visa in visaTypes"
            :key="visa.name"
            class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 class="text-lg font-bold text-navy mb-2">{{ visa.name }}</h3>
            <p class="text-grey-text mb-3">{{ visa.description }}</p>
            <div class="space-y-1 text-sm">
              <p class="text-navy"><strong>Validity:</strong> {{ visa.validity }}</p>
              <p class="text-navy"><strong>Duration:</strong> {{ visa.duration }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Application Process -->
      <section class="bg-gray-50 rounded-lg p-8 border border-gray-200">
        <h2 class="text-2xl font-bold text-navy mb-6">Application Process</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold">
              1
            </div>
            <div>
              <h3 class="font-bold text-navy mb-2">Fill Application Form</h3>
              <p class="text-grey-text">Complete the online visa application form with all required information.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold">
              2
            </div>
            <div>
              <h3 class="font-bold text-navy mb-2">Gather Documents</h3>
              <p class="text-grey-text">Prepare all required documents as per visa type requirements.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold">
              3
            </div>
            <div>
              <h3 class="font-bold text-navy mb-2">Book Appointment</h3>
              <p class="text-grey-text">Schedule an appointment for document submission and biometric collection.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold">
              4
            </div>
            <div>
              <h3 class="font-bold text-navy mb-2">Submit Documents</h3>
              <p class="text-grey-text">Submit your application and documents at the Embassy on scheduled date.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold">
              5
            </div>
            <div>
              <h3 class="font-bold text-navy mb-2">Track & Collect Visa</h3>
              <p class="text-grey-text">Track your application status and collect your visa when ready.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Required Documents -->
      <section>
        <h2 class="text-2xl font-bold text-navy mb-6">General Requirements</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h3 class="font-bold text-navy mb-4">For All Applicants</h3>
            <ul class="space-y-2 text-grey-text">
              <li class="flex items-start gap-2">
                <span class="text-accent mt-1">✓</span>
                <span>Valid passport (6 months validity)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-accent mt-1">✓</span>
                <span>Completed visa application form</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-accent mt-1">✓</span>
                <span>Passport-size photograph</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-accent mt-1">✓</span>
                <span>Travel itinerary</span>
              </li>
            </ul>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-6">
            <h3 class="font-bold text-navy mb-4">Additional Documents</h3>
            <ul class="space-y-2 text-grey-text">
              <li class="flex items-start gap-2">
                <span class="text-accent mt-1">✓</span>
                <span>Proof of financial means</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-accent mt-1">✓</span>
                <span>Employment letter (if applicable)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-accent mt-1">✓</span>
                <span>Hotel booking confirmation</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-accent mt-1">✓</span>
                <span>Travel insurance (recommended)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Fee Information -->
      <section class="bg-blue-50 rounded-lg p-8 border border-blue-200">
        <h2 class="text-2xl font-bold text-navy mb-4">Visa Fees</h2>
        <p class="text-grey-text mb-6">
          Visa fees vary depending on the type of visa and processing time. Please note that fees are subject to change.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-white rounded-lg p-4 border border-blue-header">
            <h3 class="font-bold text-navy mb-2">Standard Processing</h3>
            <p class="text-2xl font-bold text-accent">€60</p>
            <p class="text-grey-text text-sm mt-2">5-7 working days</p>
          </div>
          <div class="bg-white rounded-lg p-4 border border-blue-header">
            <h3 class="font-bold text-navy mb-2">Expedited Processing</h3>
            <p class="text-2xl font-bold text-accent">€90</p>
            <p class="text-grey-text text-sm mt-2">2-3 working days</p>
          </div>
          <div class="bg-white rounded-lg p-4 border border-blue-header">
            <h3 class="font-bold text-navy mb-2">Rush Processing</h3>
            <p class="text-2xl font-bold text-accent">€120</p>
            <p class="text-grey-text text-sm mt-2">1 working day</p>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <div class="bg-navy text-white rounded-lg p-8 text-center">
        <h2 class="text-2xl font-bold mb-4">Ready to Apply?</h2>
        <p class="mb-6">Book an appointment at the Embassy for your visa application.</p>
        <button class="bg-accent hover:bg-accent-orange text-white font-bold py-3 px-8 rounded-lg transition">
          Book Appointment
        </button>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../components/PageLayout.vue'

const sidebarItems = [
  { label: 'Visa Types' },
  { label: 'Tourist Visa', href: '#' },
  { label: 'Business Visa', href: '#' },
  { label: 'Employment Visa', href: '#' },
  { label: 'Student Visa', href: '#' },
  { label: 'Medical Visa', href: '#' },
  { label: 'Transit Visa', href: '#' },
  { label: 'Application Process' },
  { label: 'How to Apply', href: '#' },
  { label: 'Required Documents', href: '#' },
  { label: 'Processing Time', href: '#' },
  { label: 'Fees', href: '#' },
  { label: 'Special Services' },
  { label: 'E-Visa', href: '#' },
  { label: 'Expedited Processing', href: '#' },
  { label: 'Book Appointment', href: '#' }
]

interface VisaType {
  name: string
  duration: string
  validity: string
  description: string
}

const visaTypes: VisaType[] = [
  {
    name: 'Tourist Visa',
    duration: '6 months',
    validity: 'Multiple entries',
    description: 'For individuals traveling to India for tourism, sightseeing, visiting family and friends.'
  },
  {
    name: 'Business Visa',
    duration: '1 year',
    validity: 'Multiple entries',
    description: 'For business professionals conducting business activities in India.'
  },
  {
    name: 'Employment Visa',
    duration: '3 years',
    validity: 'Multiple entries',
    description: 'For foreign nationals employed by Indian companies or organizations.'
  },
  {
    name: 'Student Visa',
    duration: 'Duration of course',
    validity: 'As per approval',
    description: 'For students pursuing education in recognized institutions in India.'
  },
  {
    name: 'Medical Visa',
    duration: '60 days',
    validity: 'Single entry',
    description: 'For individuals seeking medical treatment in India.'
  },
  {
    name: 'Transit Visa',
    duration: '15 days',
    validity: 'Single entry',
    description: 'For travelers transiting through India.'
  }
]
</script>

<style scoped>
</style>
