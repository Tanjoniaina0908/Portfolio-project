<script setup>
import HomeView from "./HomeView.vue"
import AboutView from "./AboutView.vue"
import PortfolioView from "./PortfolioView.vue"
import CvView from "./CvView.vue"
import ContactView from "./ContactView.vue"
</script>

<template>
  <div class="onepage">
    <section id="accueil" class="no-gap-section">
      <HomeView />
    </section>

    <section id="apropos" class="no-gap-section">
      <AboutView />
    </section>

    <section id="portfolio" class="no-gap-section">
      <PortfolioView />
    </section>

    <section id="cv" class="no-gap-section">
      <CvView />
    </section>

    <section id="contact" class="no-gap-section">
      <ContactView />
    </section>
  </div>
</template>

<style scoped>
.onepage {
  width: 100vw;
  overflow-x: hidden;
  background: #121212;
}

/* Supprime tout padding/margin entre sections */
.no-gap-section {
  margin: 0;
  padding: 0;
}
</style>
