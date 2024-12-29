<template>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <p>
      Have questions or want to learn more? Please send an email to
      <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>
    </p>
    <!-- <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          :class="{ invalid: errors.name }"
          placeholder="Your Name"
        />
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          :class="{ invalid: errors.email }"
          placeholder="Your Email"
        />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="formData.message"
          :class="{ invalid: errors.message }"
          placeholder="Your Message"
        ></textarea>
        <span v-if="errors.message" class="error">{{ errors.message }}</span>
      </div>

      <button type="submit" class="submit-button">Send Message</button>
    </form> -->
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const contactEmail = 'osito92630@gmail.com'

// Define the structure of the form data
interface FormData {
  name: string
  email: string
  message: string
}

// Form state
const formData = reactive<FormData>({
  name: '',
  email: '',
  message: '',
})

// Validation errors
const errors = reactive<Partial<FormData>>({})

// Form submission handler
const handleSubmit = () => {
  // Clear previous errors
  Object.keys(errors).forEach((key) => {
    ;(errors as any)[key] = ''
  })

  // Validate form fields
  if (!formData.name) errors.name = 'Name is required.'
  if (!formData.email) {
    errors.email = 'Email is required.'
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Invalid email address.'
  }
  if (!formData.message) errors.message = 'Message is required.'

  // Submit form if there are no errors
  if (!Object.values(errors).some((error) => error)) {
    console.log('Form submitted:', formData)
    alert('Your message has been sent successfully!')
    resetForm()
  }
}

// Utility function to validate email
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Reset form fields
const resetForm = () => {
  formData.name = ''
  formData.email = ''
  formData.message = ''
}
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 6rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
}

p {
  text-align: center;
  color: #555;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #007bff;
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.invalid {
  border-color: #dc3545;
}

.error {
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 0.8rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
