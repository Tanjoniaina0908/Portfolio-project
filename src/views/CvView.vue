<script setup>
import profilImage from "@/assets/tanjona.jpg";
import phoneIcon from "@/assets/phone.svg";
import locationIcon from "@/assets/location.svg";
import emailIcon from "@/assets/email.svg";
</script>

<template>
  <div class="cv-wrapper">
    <!-- En-tête -->
    <div class="cv-header">
      <img :src="profilImage" alt="Profil" class="profile-img" />
      <div class="contact-infos">
        <h1>RAMPANJATOMAHARAVO Misantatra Tanjoniaina</h1>
        <p class="role">Développeur Web</p>
        <div class="icon-text">
          <img :src="locationIcon" alt="adresse" class="icon-svg" />
          <span>Tsiadana, Antananarivo, Madagascar</span>
        </div>
        <div class="icon-text">
          <img :src="phoneIcon" alt="téléphone" class="icon-svg" />
          <span>+206 32 96 570 31</span>
        </div>
        <div class="icon-text">
          <img :src="emailIcon" alt="email" class="icon-svg" />
          <span>misantatratanjoniaina@gmail.com</span>
        </div>
      </div>
    </div>

    <!-- Sections -->
    <div class="cv-content">
      <div class="cv-card">
        <div class="left-title">Langues</div>
        <div class="center-line"></div>
        <div class="right-content">
          <p class="list-item"><strong>Français :</strong> courant</p>
          <p class="list-item"><strong>Anglais :</strong> intermédiaire</p>
        </div>
      </div>

      <div class="cv-card">
        <div class="left-title">Formation</div>
        <div class="center-line"></div>
        <div class="right-content">
          <p class="list-item">Informatique bureautique (2024)</p>
          <p class="list-item">L1 Mathématiques et Informatique (2024–2025)</p>
        </div>
      </div>

      <div class="cv-card">
        <div class="left-title">Diplômes</div>
        <div class="center-line"></div>
        <div class="right-content">
          <p class="list-item">CEPE – 2015</p>
          <p class="list-item">BEPC – 2020</p>
          <p class="list-item">BACC S – 2023</p>
          <p class="list-item">BACC C – 2024</p>
        </div>
      </div>

      <div class="cv-card">
        <div class="left-title">À propos</div>
        <div class="center-line"></div>
        <div class="right-content">
          <p>Étudiant en Mathématiques et Informatique, passionné par le développement web. Dynamique, organisé, et motivé à résoudre des problèmes concrets avec la technologie.</p>
        </div>
      </div>

      <div class="cv-card">
        <div class="left-title">Expériences</div>
        <div class="center-line"></div>
        <div class="right-content">
          <p><strong>Prise de parole :</strong> présentations régulières, animation de groupe.</p>
          <p><strong>Exposés :</strong> vulgarisation de contenus complexes.</p>
          <p><strong>Délégué :</strong> gestion de projets et conflits.</p>
        </div>
      </div>

      <div class="cv-card">
        <div class="left-title">Professionnel</div>
        <div class="center-line"></div>
        <div class="right-content">
          <p>Bonne maîtrise de Word, Excel, PowerPoint. Expérience en maintenance informatique, Photoshop, installation de logiciels (stage de 2 mois).</p>
        </div>
      </div>

      <div class="cv-card">
        <div class="left-title">Compétences techniques</div>
        <div class="center-line"></div>
        <div class="right-content">
          <div class="skill">
            <span class="skill-name">HTML</span>
            <div class="progress-bar"><div class="progress" style="width: 90%"></div></div>
            <span class="skill-percent">90%</span>
          </div>

          <div class="skill">
            <span class="skill-name">CSS</span>
            <div class="progress-bar"><div class="progress" style="width: 85%"></div></div>
            <span class="skill-percent">85%</span>
          </div>

          <div class="skill">
            <span class="skill-name">JavaScript</span>
            <div class="progress-bar"><div class="progress" style="width: 75%"></div></div>
            <span class="skill-percent">75%</span>
          </div>

          <div class="skill">
            <span class="skill-name">Bureautique</span>
            <div class="progress-bar"><div class="progress" style="width: 80%"></div></div>
            <span class="skill-percent">80%</span>
          </div>

          <div class="skill">
            <span class="skill-name">Git / GitHub</span>
            <div class="progress-bar"><div class="progress" style="width: 70%"></div></div>
            <span class="skill-percent">70%</span>
          </div>

          <div class="skill">
            <span class="skill-name">Vue.js</span>
            <div class="progress-bar"><div class="progress" style="width: 70%"></div></div>
            <span class="skill-percent">70%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cv-wrapper {
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #1e1e2f, #212135);
  color: #fff;
  padding: 2rem 4vw;
  font-family: 'Segoe UI', sans-serif;
  box-sizing: border-box;
}

.cv-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid #333;
  padding-bottom: 1rem;
}

.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1.5rem;
  border: 2px solid #42b883;
}

.contact-infos h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: bold;
}

.contact-infos p.role {
  color: #42b883;
  margin: 0.3rem 0 1rem 0;
  font-weight: 600;
  font-size: 1.3rem; /* ✅ Augmente la taille */
  letter-spacing: 1px; /* Optionnel : meilleure lisibilité */
}

.icon-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.4rem 0;
  font-size: 0.95rem;
  color: #ccc;
}

.icon-svg {
  width: 20px;
  height: 20px;
  object-fit: contain;
  filter: brightness(0) saturate(100%) invert(45%) sepia(92%) saturate(628%) hue-rotate(194deg) brightness(92%) contrast(96%);
}

/* ✅ Grand cadre autour de tous les blocs */
.cv-content {
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 900px;
  margin: 0 auto;
  background-color: #2a2a40;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  border: 1px solid #3a3a4d;
  box-sizing: border-box;
}

/* ✅ Blocs internes collés entre eux, sans fond */
.cv-card {
  display: grid;
  grid-template-columns: 180px 3px 1fr;
  align-items: stretch;
  padding: 1rem 0;
  gap: 1rem;
  color: #ccc;
  border-bottom: 1px solid #444;
  box-sizing: border-box;
  background: transparent;
}

.cv-card:last-child {
  border-bottom: none;
}

.left-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #42b883;
}

/* ✅ Ligne verticale sans espace */
.center-line {
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, #42b883, #5e5eff);
  border-radius: 2px;
  box-sizing: border-box;
}

.right-content {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.95rem;
  color: #ccc;
}

/*✅ Forme en cercle avant les compétence*/ 
.list-item {
  position: relative;
  padding-left: 1.5rem;
  margin: 0.3rem 0;
}

.list-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 10px;
  height: 10px;
  background: linear-gradient(45deg, #42b883, #5e5eff);
  border-radius: 50%;
}

/* ✅ Compétences techniques */
.skill {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #333;
}

.skill:last-child {
  border-bottom: none;
}

.skill-name {
  font-weight: 600;
  color: #eee;
}

.progress-bar {
  background-color: #2a2a2a;
  height: 10px;
  border-radius: 6px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #5e5eff, #42b883);
  transition: width 1.2s ease-in-out;
}

.skill-percent {
  font-weight: 600;
  color: #42b883;
  text-align: right;
  font-size: 0.85rem;
  display: block;
}

</style>
