<template>
  <PageLayout
    title="Consular Services"
    subtitle="Wide range of consular services for Indian citizens and visa applicants"
    :sidebarItems="sidebarItems"
  >
    <!-- Main Content -->
    <div class="space-y-8">
      <!-- Introduction -->
      <section>
        <h2 class="text-2xl font-bold text-navy mb-4">Our Services</h2>
        <p class="text-grey-text leading-relaxed mb-4">
          The Embassy of India provides comprehensive consular services to Indian citizens and foreign nationals. Our services include passport issuance, visa processing, certificate attestation, and many other official services.
        </p>
        <div class="bg-navy bg-opacity-10 border-l-4 border-navy p-4 rounded">
          <p class="text-navy font-semibold">
            For all consular services, please book an appointment online through our appointment portal.
          </p>
        </div>
      </section>

      <!-- Services Grid -->
      <section>
        <h2 class="text-2xl font-bold text-navy mb-6">Services Available</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="service in services"
            :key="service.title"
            class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 class="text-lg font-bold text-navy mb-3">{{ service.title }}</h3>
            <p class="text-grey-text mb-4">{{ service.description }}</p>
            <div class="space-y-2 text-sm border-t border-gray-200 pt-4">
              <p class="text-navy"><strong>Fee:</strong> {{ service.fees }}</p>
              <p class="text-navy"><strong>Processing Time:</strong> {{ service.processing_time }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- How to Apply -->
      <section class="bg-gray-50 rounded-lg p-8 border border-gray-200">
        <h2 class="text-2xl font-bold text-navy mb-6">How to Apply</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold">
                1
              </div>
            </div>
            <div>
              <h3 class="font-bold text-navy mb-2">Check Requirements</h3>
              <p class="text-grey-text">Review the document checklist for your specific service on our website.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold">
                2
              </div>
            </div>
            <div>
              <h3 class="font-bold text-navy mb-2">Prepare Documents</h3>
              <p class="text-grey-text">Gather all required documents in the specified format and size.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold">
                3
              </div>
            </div>
            <div>
              <h3 class="font-bold text-navy mb-2">Book Appointment</h3>
              <p class="text-grey-text">Schedule your appointment through our online appointment booking system.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold">
                4
              </div>
            </div>
            <div>
              <h3 class="font-bold text-navy mb-2">Submit Application</h3>
              <p class="text-grey-text">Appear on the scheduled date with all documents and complete the application process.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold">
                5
              </div>
            </div>
            <div>
              <h3 class="font-bold text-navy mb-2">Track Status</h3>
              <p class="text-grey-text">Monitor your application status and collect your documents when ready.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQs -->
      <section>
        <h2 class="text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <details class="bg-white border border-gray-200 rounded-lg p-4 group cursor-pointer">
            <summary class="font-semibold text-navy flex justify-between items-center">
              How long does it take to get a passport?
              <span class="transition group-open:rotate-180">⋮</span>
            </summary>
            <p class="text-grey-text mt-3">Standard processing takes 7-10 days. Expedited processing is available for urgent cases.</p>
          </details>
          <details class="bg-white border border-gray-200 rounded-lg p-4 group cursor-pointer">
            <summary class="font-semibold text-navy flex justify-between items-center">
              Can I apply for multiple services in one appointment?
              <span class="transition group-open:rotate-180">⋮</span>
            </summary>
            <p class="text-grey-text mt-3">Yes, you can apply for multiple services in a single appointment. However, please ensure you have all required documents for each service.</p>
          </details>
          <details class="bg-white border border-gray-200 rounded-lg p-4 group cursor-pointer">
            <summary class="font-semibold text-navy flex justify-between items-center">
              What is the payment method for consular services?
              <span class="transition group-open:rotate-180">⋮</span>
            </summary>
            <p class="text-grey-text mt-3">Payment can be made through various methods including bank transfer, credit card, and cash during your appointment.</p>
          </details>
        </div>
      </section>

      <!-- Contact -->
      <section class="bg-blue-50 rounded-lg p-8 border border-blue-200">
        <h2 class="text-2xl font-bold text-navy mb-4">Need More Information?</h2>
        <p class="text-grey-text mb-4">
          For detailed information about specific consular services, document requirements, or to book an appointment, please contact us.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="#" class="bg-navy text-white font-semibold py-3 px-6 rounded-lg hover:bg-navy-dark transition text-center">
            Book Appointment
          </a>
          <a href="/contact" class="bg-accent text-white font-semibold py-3 px-6 rounded-lg hover:bg-accent-orange transition text-center">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../components/PageLayout.vue'

const sidebarItems = [
  { label: 'Services' },
  { label: 'Passport Services', href: '#' },
  { label: 'Visa Services', href: '/visa-services' },
  { label: 'OCI Card', href: '#' },
  { label: 'Certificates' },
  { label: 'Birth Certificate', href: '#' },
  { label: 'Death Certificate', href: '#' },
  { label: 'Marriage Certificate', href: '#' },
  { label: 'Divorce Certificate', href: '#' },
  { label: 'Driving License Authentication', href: '#' },
  { label: 'Other Services' },
  { label: 'Attestation', href: '#' },
  { label: 'Police Clearance Certificate', href: '#' },
  { label: 'Emergency Certificate', href: '#' },
  { label: 'International Driving Permit', href: '#' }
]

interface Service {
  title: string
  description: string
  fees: string
  processing_time: string
}

const services: Service[] = [
  {
    title: 'Passport Issuance',
    description: 'New passport or renewal of existing passport for Indian citizens.',
    fees: '€70 - €100',
    processing_time: '7-10 days'
  },
  {
    title: 'Visa Services',
    description: 'Various types of visas for travel to India including tourist, business, and employment visas.',
    fees: '€60 - €120',
    processing_time: '5-7 days'
  },
  {
    title: 'OCI Card',
    description: 'Overseas Citizen of India card for persons of Indian origin or ancestry.',
    fees: '€80',
    processing_time: '2-3 weeks'
  },
  {
    title: 'Certificate Services',
    description: 'Birth, death, marriage, and divorce certificate attestation and issuance.',
    fees: '€30 - €50',
    processing_time: '3-5 days'
  },
  {
    title: 'Document Attestation',
    description: 'Attestation of documents for use in India including educational and professional documents.',
    fees: '€25 - €75',
    processing_time: '2-3 days'
  },
  {
    title: 'Police Clearance Certificate',
    description: 'Official certificate confirming clean criminal record, issued by Indian authorities.',
    fees: '€60',
    processing_time: '10-15 days'
  }
]
</script>

<style scoped>
</style>
