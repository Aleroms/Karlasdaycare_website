<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="nav">
    <div class="left">
      <RouterLink to="/" class="nav-link" active-class="active-link"
        ><p>Karla's Children's Daycare</p></RouterLink
      >
    </div>
    <div class="right" :class="{ hide: isMobile && !menuOpen }">
      <ul>
        <li>
          <RouterLink to="/" class="nav-link" active-class="active-link">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="nav-link" active-class="active-link">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/gallery" class="nav-link" active-class="active-link">Gallery</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="nav-link" active-class="active-link">Contact</RouterLink>
        </li>
      </ul>
    </div>
    <!-- Hamburger Menu Icon -->
    <div class="hamburger" v-if="isMobile" @click="toggleMenu">
      <div :class="{ bar: true, open: menuOpen }"></div>
      <div :class="{ bar: true, open: menuOpen }"></div>
      <div :class="{ bar: true, open: menuOpen }"></div>
    </div>
    <!-- Mobile Menu -->
    <div class="mobile-menu" v-if="menuOpen">
      <ul>
        <li @click="toggleMenu">
          <RouterLink to="/home" class="nav-link">Home</RouterLink>
        </li>
        <li @click="toggleMenu">
          <RouterLink to="/about" class="nav-link">About</RouterLink>
        </li>
        <li @click="toggleMenu">
          <RouterLink to="/gallery" class="nav-link">Gallery</RouterLink>
        </li>
        <li @click="toggleMenu">
          <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(window.innerWidth <= 600)
const menuOpen = ref(false)

function updateIsMobile() {
  isMobile.value = window.innerWidth <= 600
  if (!isMobile.value) menuOpen.value = false // Close menu if switching to desktop
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

onMounted(() => {
  window.addEventListener('resize', updateIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem auto;
  padding: 0 2rem;
  position: relative;
  gap: 3rem;
  max-width: 1400px;
}

.left p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.right ul {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
  padding: 0;
}

.right li {
  margin-right: 1rem;
}

.nav-link {
  text-decoration: none;
  color: #007acc;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link.active-link::after {
  content: '';
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #007acc;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  cursor: pointer;
}

.hamburger .bar {
  width: 100%;
  height: 4px;
  background-color: #007acc;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.hamburger .bar.open:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}

.hamburger .bar.open:nth-child(2) {
  opacity: 0;
}

.hamburger .bar.open:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}

.mobile-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 1000;
}

.mobile-menu ul {
  list-style: none;
  margin: 0;
  padding: 1rem;
}

.mobile-menu li {
  margin-bottom: 1rem;
}

.mobile-menu li a {
  text-decoration: none;
  color: #007acc;
}

.mobile-menu li:last-child {
  margin-bottom: 0;
}

@media (max-width: 600px) {
  .right {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-menu {
    width: 100%;
  }
}

@media (min-width: 600px) {
  .nav-link.active-link::after {
    display: block;
  }
}
</style>
