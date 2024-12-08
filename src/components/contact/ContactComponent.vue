<template>
  <div class="contact-container">
    <div class="contact">
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quae ducimus, corporis
        amet, perferendis eligendi eaque explicabo quia ipsam iure rerum eum, placeat tempore
        cupiditate earum pariatur impedit. Hic quasi aspernatur vitae necessitatibus deleniti. Ad,
        expedita! Molestiae itaque accusantium eligendi vitae facilis illo ducimus beatae
        dignissimos debitis ex deserunt accusamus dolorum enim officiis, culpa pariatur atque magni.
        Debitis ut laborum quis. Iusto rem quis fugiat, cum dolorem corrupti unde porro totam
        ratione, optio inventore natus aperiam exercitationem quos quae reprehenderit veniam.
        Aspernatur quisquam, obcaecati cumque ipsum qui nobis ea, provident blanditiis eaque
        consequatur ipsa aperiam incidunt! Culpa amet corporis facere!
      </p>
    </div>
    <div class="contact-info">
      <ContactInformation flex-direction="column" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactInformation from './ContactInformation.vue'
</script>

<style scoped lang="scss">
.item {
}
.contact-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
}
.contact {
  padding: 3rem 1.6rem;
  line-height: 1.6rem;
  background-color: #444;
  color: white;

  h2 {
    font-size: 40px;
    margin-bottom: 1rem;
  }
}
.contact-info {
  width: 100%;
  margin-bottom: 3rem;
}
@media (min-width: 600px) {
  .contact-container {
    flex-direction: row;
    align-items: start;
    justify-content: start;
  }
  .contact-info {
    width: clamp(300px, 40%, 800px);
    padding: 2rem 0;
  }
  .contact p {
    max-width: 70ch; /* Limits the width to approximately 50 characters */
  }
  .contact {
    padding: clamp(1rem, 5%, 3rem);

  }
}
</style>
