<template>
  <div class="information">
    <h2>Connect with Us</h2>
    <p>
      We’re excited to connect with you and answer any questions about Karla's Children's Daycare.
      Below, you’ll find all the details you need to get started:
    </p>

    <div class="info-section">
      <h3>License Information</h3>
      <p>
        We are a fully licensed daycare, ensuring the highest standards of safety, care, and
        education for your child. Feel free to reach out if you would like to verify our license.
      </p>
    </div>

    <div class="info-section">
      <h3>Payment Options</h3>
      <p>
        We strive to make childcare accessible to every family by offering flexible payment methods
        tailored to your needs. We accept:
      </p>
      <ul>
        <li>Subsidies from programs like Children’s Home Society and Family Support Services</li>
        <li>Payments via check, cash, and Zelle</li>
      </ul>
      <p>
        If you have specific financial requirements, we’re happy to work with you to find a
        solution.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.information {
  max-width: 800px;
  margin: 6rem auto;
  padding: 2rem;
  color: #333;
  font-family: 'Arial', sans-serif;
}

h2 {
  text-align: center;
  color: #444;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #555;
}

.info-section {
  margin-top: 2rem;
}

h3 {
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 0.5rem;
}

ul {
  margin-left: 1.5rem;
  list-style-type: disc;
  color: #555;
}

ul li {
  font-size: 1rem;
  line-height: 1.6;
}

strong {
  color: #000;
  font-weight: bold;
}
</style>
