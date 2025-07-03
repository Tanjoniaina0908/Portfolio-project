<script setup>
import photo from "@/assets/tanjona.jpg";
</script>

<template>
  <div class="about-full fade-in">
    <div class="about-wrapper">
      <!-- Colonne gauche : image -->
      <div class="about-left">
        <div class="image-wrapper">
          <img :src="photo" alt="Photo de profil" class="about-img" />
        </div>
      </div>

      <!-- Colonne droite : infos -->
      <div class="about-right">
        <!-- Métier / titre principal -->
        <h2 class="title">Développeur</h2>

        <div class="about-info">
          <div class="info-left">
            <div class="info-block">
              <h3 class="info-title">Mon nom est</h3>
              <p class="info-text">RAMPANJATOMAHARAVO Misantatra Tanjoniaina</p>
            </div>
            <div class="info-block">
              <h3 class="info-title">Téléphone</h3>
              <p class="info-text">+261 33 96 61 98</p>
            </div>
            <div class="info-block">
              <h3 class="info-title">Email</h3>
              <p class="info-text">misantatratanjoniaina@gmail.com</p>
            </div>
          </div>
          <div class="info-right">
            <div class="info-block">
              <h3 class="info-title">Adresse</h3>
              <p class="info-text">Tsiadana, Antananarivo, MADAGASCAR</p>
            </div>
            <div class="info-block">
              <h3 class="info-title">Disponibilité</h3>
              <p class="info-text">Oui</p>
            </div>
            <div class="info-block">
              <h3 class="info-title">Freelance</h3>
              <p class="info-text">Oui</p>
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="about-description">
          <p>
            Étudiant en Informatique et Mathématiques, passionné par le développement web et les technologies modernes.
            Depuis janvier 2025, je me forme activement pour concevoir des sites et applications performants et attractifs.
          </p>
          <p>
            Motivé, curieux et rigoureux, je m'efforce de transformer des idées en solutions concrètes et utiles.
          </p>
        </div>

        <!-- Bouton contact -->
        <a href="#contact" class="contact-button">
          <svg class="icon-mail" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.5 5L18 8m-15 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
            Discutons de votre projet
        </a>


      </div>
    </div>
  </div>
</template>

<style scoped>
.about-full {
  min-height: 100vh;
  width: 100vw;
  background-color: #0e0e0e; /* fond sombre global */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem; /* padding ici */
  box-sizing: border-box;
}

.about-wrapper {
  display: flex;
  flex-direction: column;
  color: #eee;
  max-width: 1100px;
  width: 100%;
  /* Suppression du fond gris, padding et arrondi */
}

/* Image + ombre décalée */
.about-left {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.image-wrapper {
  position: relative;
  display: inline-block;
  border-radius: 10px;
  overflow: visible; /* Important pour voir l'ombre */
  width: 260px;
  height: 340px;
}

.image-wrapper::before {
  content: "";
  position: absolute;
  top: 25px;
  left: 25px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(106, 90, 205, 0.7);
  background: transparent;
  z-index: 0;
  pointer-events: none;
}

.about-img {
  position: relative;
  display: block;
  width: 260px;
  height: 340px;
  object-fit: cover;
  border-radius: 10px;
  z-index: 1;
}

.about-right {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* TITRE METIER */
.title {
  font-size: 2rem;
  color: #7b68ee;
  font-weight: 900;
  margin-bottom: 1.2rem;
  animation: fadeInTitle 1s ease forwards;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: default;
}

.title:hover {
  text-shadow: 0 0 8px #7b68eeaa;
}

@keyframes fadeInTitle {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}

.info-left,
.info-right {
  flex: 1;
  min-width: 200px;
}

.info-block {
  margin-bottom: 1.2rem;
}

.info-title {
  font-size: 1rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.info-text {
  font-size: 1rem;
  color: #ccc;
}

.about-description p {
  font-size: 1rem;
  line-height: 1.6;
  color: #ddd;
  margin-top: 0.5rem;
}

.contact-button {
  margin-top: 1.5rem;
  background-color: #6a5acd;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  gap: 0.5rem;
  font-size: 1rem;
}

.contact-button:hover {
  background-color: #5746c6;
}

.icon-mail {
  width: 20px;
  height: 20px;
  stroke: white;
}


.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 1024px) {
  .about-wrapper {
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
  }

  .about-left {
    flex: 1;
    margin-bottom: 0;
  }

  .about-right {
    flex: 2;
  }

  .image-wrapper {
    width: 300px;
    height: 380px;
  }

  .image-wrapper::before {
    top: 30px;
    left: 30px;
  }

  .about-img {
    width: 300px;
    height: 380px;
  }
}
</style>
