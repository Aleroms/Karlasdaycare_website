<template>
  <div class="about-me-container">
    <div class="image-wrapper">
      <img src="/about/karla.jpg" alt="profile picture" />
    </div>
    <article class="about-text">
      <h2>About Me</h2>
      <p>{{ text }}</p>
    </article>
  </div>
  <article class="about-body">
    <p v-for="(paragraph, idx) in body" :key="idx">{{ paragraph }}</p>
  </article>
</template>

<script setup lang="ts">
const text =
  'With 30 years of experience in the daycare and childcare industry, I am deeply committed to creating nurturing, safe, and enriching environments for children to grow, learn, and thrive. My expertise spans early childhood development, individualized care, and fostering positive relationships with both children and their families. I am passionate about supporting each child’s unique potential through hands-on learning, play-based activities, and a warm, attentive approach.'
const body = [
  'Throughout my career, I have worked in diverse daycare settings, from small family-run centers to larger educational organizations, consistently prioritizing children’s well-being and development.',
  'I graduated from Mira Costa College with a license & certfication in Assistant Teaching, December 2024. I also hold a CPR and First Aid certification, and I stay updated with the latest research in childhood development and early education best practices.',
  'In my role as a caregiver and early childhood educator, I focus on building strong partnerships with parents to ensure that each child receives the best possible care. I understand how important it is for parents to feel confident and at ease knowing that their child is in capable hands. Whether it’s guiding toddlers through their first steps in socialization or supporting preschoolers as they develop critical thinking skills, I am dedicated to nurturing every child’s emotional, cognitive, and physical development.',
  'I believe that play is a child’s natural way of learning, and I integrate this philosophy into everything I do. My approach combines structure and flexibility, ensuring that children are engaged in activities that foster creativity, curiosity, and problem-solving while promoting healthy emotional growth. By building a foundation of trust, respect, and fun, I aim to instill in each child a lifelong love of learning.',
  'Every day in childcare is an opportunity to make a lasting, positive impact, and I am thrilled to be part of each child’s journey. I look forward to continuing to grow professionally and to partnering with families to provide the highest quality care and development for their little ones.',
]
</script>

<style scoped>
/* General container styling */
.about-me-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 16px;
}

/* Image styling */
.image-wrapper img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* About text styling */
.about-text {
  max-width: 600px;
  padding-right: 16px;
}

.about-text h2 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.about-text p {
  font-size: 1rem;
  line-height: 1.5;
}

/* Body text styling */
.about-body {
  max-width: 800px;
  padding: 0 16px;
  margin: 0 auto;
}

.about-body p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 16px;
}
.about-me-container{
  margin-top: 8rem;
}

/* Responsive design */
@media (min-width: 768px) {
  .about-body {
    margin: 3rem auto;
  }
  .about-me-container {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 32px;
  }

  .image-wrapper img {
    max-width: 250px;
  }

  .about-text {
    text-align: left;
    padding: 0;
  }

  .about-text h2 {
    font-size: 2rem;
  }

  .about-text p {
    font-size: 1.125rem;
  }

  .about-body p {
    font-size: 1.125rem;
    margin-top: 2rem;
  }
}

@media (min-width: 1024px) {
  .about-me-container {
    gap: 64px;
  }

  .about-text h2 {
    font-size: 2.5rem;
  }

  .about-text p,
  .about-body p {
    font-size: 1.25rem;
  }
}
</style>
