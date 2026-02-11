<template>
  <PageLayout
    title="Contact Us"
    subtitle="Get in touch with the Embassy of India"
    :sidebarItems="sidebarItems"
  >
    <!-- Main Content -->
    <div class="space-y-8">
      <!-- Contact Information -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Address -->
        <div class="bg-white border border-gray-200 rounded-lg p-6">
          <h3 class="text-xl font-bold text-navy mb-4">📍 Office Address</h3>
          <p class="text-grey-text leading-relaxed">
            Embassy of India<br>
            Balistraat 53<br>
            2585 XN The Hague<br>
            The Netherlands
          </p>
          <p class="text-grey-text text-sm mt-4">
            <strong>Jurisdiction:</strong> Netherlands, Curacao, Aruba, Sint Maarten
          </p>
        </div>

        <!-- Phone & Email -->
        <div class="bg-white border border-gray-200 rounded-lg p-6">
          <h3 class="text-xl font-bold text-navy mb-4">☎️ Contact Information</h3>
          <div class="space-y-3 text-grey-text">
            <p>
              <strong>Main Office:</strong><br>
              +31 70 346 9771
            </p>
            <p>
              <strong>Consular Services:</strong><br>
              +31 70 346 9722
            </p>
            <p>
              <strong>Email:</strong><br>
              <a href="mailto:info@indianembassynetherlands.gov.in" class="text-accent hover:underline">
                info@indianembassynetherlands.gov.in
              </a>
            </p>
          </div>
        </div>
      </section>

      <!-- Working Hours -->
      <section class="bg-blue-50 rounded-lg p-8 border border-blue-200">
        <h2 class="text-2xl font-bold text-navy mb-6">Working Hours</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 class="font-bold text-navy mb-3">General Office</h3>
            <p class="text-grey-text">
              Monday - Friday<br>
              9:00 AM - 5:30 PM<br>
              <br>
              <strong>Lunch Break:</strong><br>
              1:00 PM - 2:00 PM
            </p>
          </div>
          <div>
            <h3 class="font-bold text-navy mb-3">Consular Services</h3>
            <p class="text-grey-text">
              Monday - Friday<br>
              9:30 AM - 1:00 PM<br>
              <br>
              (Appointment Only)
            </p>
          </div>
          <div>
            <h3 class="font-bold text-navy mb-3">Closed</h3>
            <p class="text-grey-text">
              Saturdays<br>
              Sundays<br>
              Indian & Dutch Public Holidays
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Form -->
      <section class="bg-white border border-gray-200 rounded-lg p-8">
        <h2 class="text-2xl font-bold text-navy mb-6">Send us a Message</h2>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-navy font-semibold mb-2">Name *</label>
              <input
                v-model="formData.name"
                type="text"
                required
                placeholder="Your Name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-navy"
              />
            </div>
            <div>
              <label class="block text-navy font-semibold mb-2">Email *</label>
              <input
                v-model="formData.email"
                type="email"
                required
                placeholder="your@email.com"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-navy"
              />
            </div>
          </div>

          <div>
            <label class="block text-navy font-semibold mb-2">Phone</label>
            <input
              v-model="formData.phone"
              type="tel"
              placeholder="+31 ..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-navy"
            />
          </div>

          <div>
            <label class="block text-navy font-semibold mb-2">Subject *</label>
            <input
              v-model="formData.subject"
              type="text"
              required
              placeholder="Your Subject"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-navy"
            />
          </div>

          <div>
            <label class="block text-navy font-semibold mb-2">Message *</label>
            <textarea
              v-model="formData.message"
              required
              placeholder="Your Message"
              rows="6"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-navy"
            ></textarea>
          </div>

          <div class="flex gap-3">
            <button
              type="submit"
              class="flex-1 bg-navy text-white font-bold py-3 rounded-lg hover:bg-navy-dark transition"
            >
              Send Message
            </button>
            <button
              type="reset"
              class="flex-1 bg-gray-200 text-grey-text font-bold py-3 rounded-lg hover:bg-gray-300 transition"
            >
              Clear
            </button>
          </div>
        </form>
      </section>

      <!-- Map Section -->
      <section>
        <h2 class="text-2xl font-bold text-navy mb-6">Location</h2>
        <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center border border-gray-300">
          <div class="text-center">
            <p class="text-grey-text text-lg">📍 Map View</p>
            <p class="text-grey-text text-sm mt-2">Balistraat 53, 2585 XN The Hague</p>
          </div>
        </div>
      </section>

      <!-- Additional Services -->
      <section class="bg-gray-50 rounded-lg p-8 border border-gray-200">
        <h2 class="text-2xl font-bold text-navy mb-6">Helplines & Additional Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-bold text-navy mb-3">🚨 Emergency Assistance</h3>
            <p class="text-grey-text mb-3">
              For emergency assistance to Indian nationals:
            </p>
            <p class="text-navy font-semibold">+31 70 346 9771 (24/7)</p>
          </div>
          <div>
            <h3 class="font-bold text-navy mb-3">📝 Appointment Booking</h3>
            <p class="text-grey-text mb-3">
              To book an appointment for consular services:
            </p>
            <a href="#" class="text-accent hover:text-accent-orange font-semibold">Book Appointment</a>
          </div>
          <div>
            <h3 class="font-bold text-navy mb-3">📧 Feedback & Complaints</h3>
            <p class="text-grey-text mb-3">
              Send your feedback or lodge complaints:
            </p>
            <a href="#" class="text-accent hover:text-accent-orange font-semibold">File Complaint</a>
          </div>
          <div>
            <h3 class="font-bold text-navy mb-3">🌐 MADAD Portal</h3>
            <p class="text-grey-text mb-3">
              Register as an Indian national in Netherlands:
            </p>
            <a href="#" class="text-accent hover:text-accent-orange font-semibold">Register with MADAD</a>
          </div>
        </div>
      </section>

      <!-- FAQs -->
      <section>
        <h2 class="text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div class="space-y-3">
          <details class="bg-white border border-gray-200 rounded-lg p-4 group cursor-pointer">
            <summary class="font-semibold text-navy flex justify-between items-center">
              Can I visit the Embassy without an appointment?
              <span class="transition group-open:rotate-180">⋮</span>
            </summary>
            <p class="text-grey-text mt-3">For consular services, an appointment is mandatory. General inquiries can be handled over phone or email.</p>
          </details>
          <details class="bg-white border border-gray-200 rounded-lg p-4 group cursor-pointer">
            <summary class="font-semibold text-navy flex justify-between items-center">
              What are the accepted payment methods?
              <span class="transition group-open:rotate-180">⋮</span>
            </summary>
            <p class="text-grey-text mt-3">We accept bank transfers, credit cards, and cash payments. Payment details will be provided with your appointment.</p>
          </details>
          <details class="bg-white border border-gray-200 rounded-lg p-4 group cursor-pointer">
            <summary class="font-semibold text-navy flex justify-between items-center">
              How can I register as an Indian national?
              <span class="transition group-open:rotate-180">⋮</span>
            </summary>
            <p class="text-grey-text mt-3">You can register through the MADAD portal online or visit the Embassy with required documents during working hours.</p>
          </details>
        </div>
      </section>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageLayout from '../components/PageLayout.vue'

const sidebarItems = [
  { label: 'Contact Information' },
  { label: 'General Inquiries', href: '#' },
  { label: 'Consular Services', href: '#' },
  { label: 'Media Inquiries', href: '#' },
  { label: 'Find Us' },
  { label: 'Location Map', href: '#' },
  { label: 'Directions', href: '#' },
  { label: 'Public Transport', href: '#' },
  { label: 'Services' },
  { label: 'Book Appointment', href: '#' },
  { label: 'Send Feedback', href: '#' }
]

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  // Reset form
  formData.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
  alert('Thank you for your message. We will get back to you soon.')
}
</script>

<style scoped>
</style>
