<template>
  <div class="meals-info">
    <h2>Nutritious Meals for Your Little Ones</h2>
    <p>
      At Karla's Children's Daycare, we believe that healthy, freshly prepared meals are essential
      for your child’s growth, development, and happiness. That’s why every meal we serve is crafted
      with care, love, and attention to nutrition. We’re proud to create a family atmosphere around
      the table where children enjoy:
    </p>

    <ul>
      <li>
        <strong>Freshly Prepared Meals:</strong> Our meals are made fresh every single day using
        high-quality ingredients. We never use frozen foods, ensuring your child gets the best in
        taste and nutrition.
      </li>
      <li>
        <strong>Balanced Nutrition:</strong> Each meal is thoughtfully designed to provide the
        nutrients growing children need. From colorful fruits and vegetables to whole grains and
        lean proteins, we focus on delivering a well-rounded diet.
      </li>
      <li>
        <strong>A Family-Style Approach:</strong> We serve meals in a warm, family-style setting,
        encouraging children to build social skills, share, and develop a positive relationship with
        food.
      </li>
      <li>
        <strong>Allergies and Preferences:</strong> We take food allergies and dietary preferences
        seriously. Please let us know your child’s needs, and we’ll ensure their meals are safe and
        suitable.
      </li>
    </ul>

    <p>
      Mealtime at Karla's Children's Daycare is more than just eating—it’s an opportunity to nurture
      the body, mind, and heart in a joyful, caring environment. From breakfast to lunch, every bite
      is filled with love and dedication to your child’s well-being.
    </p>
  </div>
</template>

<script setup lang="ts">
// This component is static and does not require props or reactive state.
</script>

<style scoped>
.meals-info {
  background-color: #333; /* Dark background for contrast */
  color: #fff; /* White text for readability */
  text-align: center; /* Center align text */
  padding: 2rem;
  border-radius: 8px; /* Rounded corners */
  max-width: 800px; /* Center content with a reasonable width */
  margin: 2rem auto; /* Center the component */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
}

h2 {
  font-size: 2.5rem;
  color: #f1c40f; /* Highlighted yellow for the title */
  margin-bottom: 1.5rem;
}

p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

ul li {
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

ul li strong {
  color: #f1c40f; /* Highlighted yellow for key points */
}

ul li::before {
  content: '🍎'; /* Add a food-related icon */
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .meals-info {
    padding: 1.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  ul li {
    font-size: 0.9rem;
  }
}
</style>
