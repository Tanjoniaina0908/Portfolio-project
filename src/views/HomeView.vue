<script setup>
import { ref, onMounted } from "vue";
import backgroundImage from "@/assets/noir.jpg"; // ton image locale

const fullText = "Salut, je suis Tanjona";
const typedMessage = ref("");
let index = 0;

const typeWriter = () => {
  if (index < fullText.length) {
    typedMessage.value += fullText[index];
    index++;
    setTimeout(typeWriter, 100);
  }
};

onMounted(() => {
  typeWriter();
});
</script>

<template>
  <div class="home-hero" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
    <div class="overlay">
      <div class="hero-text">
        <h1 class="typed-text">{{ typedMessage }}</h1>
        <p class="subtitle">Développeur web passionné par l'innovation</p>
        <!-- ⚠️ SCROLL VERS LA SECTION AVEC ID "portfolio" -->
          <a href="#portfolio" class="cta-button">Voir mon Portfolio</a>

      </div>
    </div>
  </div>
</template>

<style scoped>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
}

.home-hero {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(18, 18, 18, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-text {
  position: relative;
  color: white;
  max-width: 90vw;
  text-align: center;
  padding: 20px;
}



.subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: #ccc;
}

.typed-text {
  font-size: 3rem;
  font-weight: bold;
  color: #4dd0e1;
  margin-bottom: 1rem;
  border-right: 3px solid #4dd0e1;
  white-space: nowrap;
  overflow: hidden;
  animation: blink 1s step-start infinite;
}

.cta-button {
  background-color: #4dd0e1;
  color: #121212;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #26c6da;
  color: white;
}

@keyframes blink {
  0%, 100% { border-color: transparent; }
  50% { border-color: #4dd0e1; }
}

</style>
