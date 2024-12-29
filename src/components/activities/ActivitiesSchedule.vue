<template>
  <div class="activities-accordion">
    <h2>Activities Schedule</h2>

    <div class="accordion">
      <div v-for="(activity, index) in activities" :key="index" class="accordion-item">
        <!-- Accordion Header -->
        <div class="accordion-header" @click="toggleAccordion(index)">
          <h3>{{ activity.title }}</h3>
          <span class="toggle-icon">
            {{ expandedIndex === index ? '-' : '+' }}
          </span>
        </div>

        <!-- Accordion Content -->
        <div class="accordion-content" v-show="expandedIndex === index">
          <div class="activity-image">
            <img :src="activity.image" :alt="activity.title" />
          </div>
          <p>{{ activity.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activities = [
  {
    title: 'Educational Activities 📚✏️🧩',
    description:
      'Children engage in 45-minute blocks of play-based and hands-on learning activities. These are designed to develop essential skills such as critical thinking, socialization, and creativity, preparing them for preschool and kindergarten.',
    image: 'activities/educational.jpg',
  },
  {
    title: 'Nap Time 🛏️🌙😴',
    description:
      'After an exciting morning, children have a daily rest period of 1.5-2 hours. This quiet time ensures they recharge and maintain a healthy balance of activity and rest.',
    image: 'activities/naptime.jpg',
  },
  {
    title: 'Outdoor Activities 🌳☀️🏃‍♀️',
    description:
      'Trips to nearby parks or age-appropriate movie outings (with parental consent) provide children with opportunities to explore, build friendships, and enjoy physical activities in a safe environment.',
    image: 'event/event3.jpg',
  },
  {
    title: 'Birthday Celebrations 🎂🎈🎉',
    description:
      'We make birthdays memorable with personalized celebrations. Each child’s special day is filled with laughter, treats, and fun activities to make them feel loved and appreciated.',
    image: 'birthday/birthday.jpg',
  },
  {
    title: 'Yearly Parent-Child Gathering 👩‍👦🤝👨‍👧',
    description:
      'An annual event where children and parents come together for an afternoon of fun, games, and bonding. This is a wonderful opportunity for parents to connect and build a sense of community within the daycare.',
    image: 'event/event6.jpg',
  },
]

// Reactive state for the currently expanded accordion item
const expandedIndex = ref<null | number>(0)

const toggleAccordion = (index: number) => {
  expandedIndex.value = expandedIndex.value === index ? null : index
}
</script>

<style scoped>
.activities-accordion {
  background-color: #f5f5f5; /* Dark background */
  width: 100%; /* Full-width layout */
  padding: 6rem;
  box-sizing: border-box;
  min-height: 750px;
}

h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.accordion {
  max-width: 800px;
  margin: 0 auto;
}

.accordion-item {
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #a6a2a2;
  cursor: pointer;
  transition: background-color 0.3s;
}

.accordion-header:hover {
  background-color: #847577;
}

.accordion-header h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #fbfbf2;
}

.toggle-icon {
  font-size: 1.5rem;
  color: #fbfbf2;
}

.accordion-content {
  padding: 1rem;
  background-color: #e5e6e4;
  display: flex;
  gap: 1rem;
  flex-direction: row;
}

.activity-image img {
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.accordion-content p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: black;
}

@media (max-width: 768px) {
  .activities-accordion {
    padding: 1rem;
  }
}
@media (max-width: 600px) {
  .accordion-content {
    flex-direction: column;
  }

  .activity-image img {
    width: 250px;
  }
}
</style>
