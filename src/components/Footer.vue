<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import IconGroup from './icons/IconGroup.vue'
import Copyright from './Copyright.vue'

const iconList = ['facebook', 'instagram', 'whatsapp']
</script>

<template>
  <footer class="footer">
    <!-- Top Section -->
    <div class="top">
      <p>Karla's Children's Daycare</p>
    </div>
    <!-- Bottom Section -->
    <div class="bot">
      <div class="f-item">
        <h4>Contact</h4>
        <hr />
        <IconGroup :icon-names="iconList" />
      </div>
      <div class="f-item">
        <h4>Schedule</h4>
        <hr />
        <p>Monday - Friday</p>
        <p>7:00 AM - 6:00 PM</p>
      </div>
      <div class="f-item">
        <h4>Address</h4>
        <hr />
        <p>Lake Forest, CA</p>
      </div>
    </div>
  </footer>
  <Copyright />
</template>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 2rem 4rem;
}

.top {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.bot {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.f-item {
  text-align: center;
}

.f-item h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.f-item hr {
  border: none;
  height: 1px;
  background-color: #555;
  margin: 0.5rem 0;
}

.f-item p {
  margin: 0.2rem 0;
}

/* Responsive Styling */
@media (min-width: 600px) {
  .top {
    text-align: left;
    font-size: 30px;
  }
  .bot {
    flex-direction: row;
    gap: 6rem;

    h4 {
      margin-bottom: 0;
    }
  }

  .f-item {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-self: start;
  }
}
</style>
