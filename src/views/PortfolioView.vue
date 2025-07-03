<script setup>
import { ref, computed } from "vue";

const selectedCategory = ref("Tous");

const projects = [
  {
    title: "Quiz en JavaScript",
    description: "Un mini quiz interactif codé en JS.",
    image: new URL("@/assets/quizz.png", import.meta.url).href,
    link: "https://quizz-tanjona.netlify.app/",
    category: "JavaScript"
  },
  {
    title: "Bouton animé en HTML/CSS",
    description: "Un bouton interactif simple et esthétique.",
    image: new URL("@/assets/boutton html.png", import.meta.url).href,
    link: "https://site-web-personnel-tanjona.netlify.app/",
    category: "HTML/CSS"
  },
  {
    title: "Carte de visite",
    description: "Une carte de visite moderne en HTML/CSS.",
    image: new URL("@/assets/carte de visite.png", import.meta.url).href,
    link: "https://brochure-tanjona.netlify.app/",
    category: "HTML/CSS"
  },
  {
    title: "Calculatrice",
    description: "Une calculatrice simple avec JS.",
    image: new URL("@/assets/calculatrice.png", import.meta.url).href,
    link: "https://calculatrice-t.netlify.app/",
    category: "JavaScript"
  }
];

const categories = ["Tous", "HTML/CSS", "JavaScript"];

const filteredProjects = computed(() => {
  if (selectedCategory.value === "Tous") return projects;
  return projects.filter(p => p.category === selectedCategory.value);
});
</script>

<template>
  <section class="portfolio-wrapper">
    <div class="portfolio">
      <h2>Mon Portfolio</h2>

      <div class="filters">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          :class="{ active: selectedCategory === cat }"
        >
          {{ cat }}
        </button>
      </div>

      <div class="grid">
        <div
          v-for="(project, index) in filteredProjects"
          :key="index"
          class="card fade-in-up"
          :style="{ animationDelay: index * 0.2 + 's' }"
        >
          <img :src="project.image" :alt="project.title" />
          <div class="info">
            <h3><i :class="project.icon" class="project-icon"></i> {{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <a :href="project.link" target="_blank" rel="noopener noreferrer">
              📎 Voir le projet
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");
/* Conteneur fond pleine largeur */
.portfolio-wrapper {
  width: 100vw;
  background-color: #121212;
  padding: 2rem 0;
  box-sizing: border-box;
}

.portfolio {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  color: white;
  box-sizing: border-box;
}

h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: #6a5acd;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filters button {
  background: transparent;
  border: 2px solid #6a5acd;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.filters button:hover,
.filters button.active {
  background-color: #6a5acd;
  color: white;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  width: 100%;
}

.card {
  background: #1f1f2f;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s;
  box-sizing: border-box;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s forwards;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 12px rgba(106, 90, 205, 0.5);
}

.card img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 8px;
}

.info {
  padding: 1rem 0.5rem;
  text-align: center;
}

.info h3 {
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
}

.project-icon {
  color: #6a5acd;
  font-size: 1.2rem;
}

.info p {
  color: #ccc;
  margin-bottom: 1rem;
}

.info a {
  display: inline-block;
  background-color: #6a5acd;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.info a:hover {
  background-color: #5846c4;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .card img {
    height: 220px;
  }
}


</style>
