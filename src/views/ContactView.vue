<script setup>
import { ref } from "vue";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const message = ref("");
const successMsg = ref("");
const errorMsg = ref("");

function handleSubmit() {
  successMsg.value = "";
  errorMsg.value = "";

  if (!firstName.value || !lastName.value || !email.value || !message.value) {
    errorMsg.value = "Merci de remplir tous les champs obligatoires.";
    return;
  }

  setTimeout(() => {
    successMsg.value = "Merci pour votre message, je vous répondrai rapidement !";
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
  }, 1000);
}
</script>

<template>
  <section class="contact-section">
    <div class="container">
      <div class="text-center">
        <h2 class="title">Contactez-moi</h2>
        <p class="subtitle">Discutons de votre projet</p>
        <p class="description">
          Vous avez besoin d’un site web professionnel ou vous souhaitez concrétiser un projet numérique ?<br />
          N’hésitez pas à me laisser un message ci-dessous, je vous répondrai dans les plus brefs délais.
        </p>
      </div>

      <div class="contact-grid">
        <!-- Formulaire -->
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <input type="text" placeholder="Prénom" v-model="firstName" required />
            <input type="text" placeholder="Nom" v-model="lastName" required />
          </div>
          <input type="email" placeholder="Adresse e-mail" v-model="email" required />
          <textarea placeholder="Votre message" v-model="message" rows="5" required></textarea>
          <button type="submit">Envoyer</button>
          <p class="success" v-if="successMsg">{{ successMsg }}</p>
          <p class="error" v-if="errorMsg">{{ errorMsg }}</p>
        </form>

        <!-- Cartes info -->
        <div class="info-boxes">
          <div class="info-card purple">
            <h3>Adresse e-mail</h3>
            <p>misantatratanjoniaina@gmail.com</p>
          </div>
          <div class="info-card pink">
            <h3>Téléphone</h3>
            <p>+261 33 96 61 98</p>
          </div>
          <div class="info-card blue">
            <h3>Réseaux sociaux</h3>
            <div class="icons">
              <a href="#"><i class="fab fa-github"></i></a>
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

.contact-section {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(to bottom, #1e1e2f, #121212);
  color: white;
  padding: 4rem 2rem;
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
  margin-bottom: 3rem;
}

.title {
  font-size: 2.4rem;
  font-weight: bold;
}

.subtitle {
  color: #bbb;
  margin-top: 0.5rem;
}

.description {
  color: #aaa;
  max-width: 700px;
  margin: 1rem auto 0;
  line-height: 1.6;
  font-size: 0.95rem;
}

.contact-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

@media (min-width: 900px) {
  .contact-grid {
    flex-direction: row;
    gap: 4rem;
    align-items: flex-start;
    justify-content: center;
  }
}

.contact-form {
  flex: 1;
  background-color: #2e2e48; 
  padding: 2rem;
  border-radius: 16px;
  backdrop-filter: blur(8px);
  max-width: 500px;
  width: 100%;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  background: transparent; /* fond transparent */
  color: white;
  border: none;            /* pas de bordure */
  border-bottom: 1px solid #6a5acd; /* une ligne fine sous le champ */
  padding: 0.5rem 0;       /* padding vertical léger */
  margin-bottom: 1.5rem;
  font-size: 1rem;
  outline: none;           /* plus de contour bleu au focus */
  transition: border-color 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-bottom-color: #42b883; /* couleur différente au focus */
  background: transparent;
  color: white;
}


.form-row {
  display: flex;
  gap: 1rem;
}

.form-row input {
  flex: 1;
}

.contact-form button {
  background-color: #6a5acd;
  border: none;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
}

.contact-form button:hover {
  background-color: #5846c4;
}

.success {
  color: #50fa7b;
  margin-top: 1rem;
}

.error {
  color: #ff6b6b;
  margin-top: 1rem;
}

.info-boxes {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
  width: 100%;
}

.info-card {
  background-color: #2e2e48; background-color: #2e2e48; /* ✅ Bloc noir (identique au formulaire) */
  padding: 1rem 1.2rem;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-left: 3rem;
  color: white;
}

/* ✅ Cercle décoratif avec linear-gradient */
.info-card::before {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  left: 1rem;
  top: 1.2rem;
}

/* ✅ Dégradés dans les cercles (pas dans les blocs !) */
.info-card.purple::before {
  background: linear-gradient(to right, #7f00ff, #e100ff);
}

.info-card.pink::before {
  background: linear-gradient(to right, #ff416c, #ff4b2b);
}

.info-card.blue::before {
  background: linear-gradient(to right, #2193b0, #6dd5ed);
}


.icons {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.icons a {
  color: white;
  font-size: 1.4rem;
  transition: transform 0.2s;
}

.icons a:hover {
  transform: scale(1.2);
}
</style>
