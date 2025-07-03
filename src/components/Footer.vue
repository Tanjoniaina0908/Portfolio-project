<script setup>
// Pas besoin d'import explicite de router-link ici car on l’utilise en kebab-case <router-link>
</script>


<template>
  <footer class="footer">
    <div class="footer-content container">
      <div class="footer-left">
        <p>© 2025 RAMPANJATOMAHARAVO Misantatra Tanjoniaina</p>
        <p>Développeur Web - Antananarivo, Madagascar</p>
      </div>
      <div class="footer-right">
        <nav>
          <router-link to="/" class="footer-link">Accueil</router-link>
          <router-link to="/about" class="footer-link">À propos</router-link>
          <router-link to="/portfolio" class="footer-link">Portfolio</router-link>
          <router-link to="/contact" class="footer-link">Contact</router-link>
        </nav>
      </div>
    </div>
  </footer>
</template>


<style scoped>
.footer {
  background-color: #121212;
  color: #bbb;
  padding: 1.2rem 0;
  border-top: 1px solid #333;
  font-size: 0.9rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.footer-content {
  width: 100%;
}

.footer-left p {
  margin: 0.2rem 0;
}

.footer-right nav {
  display: flex;
  gap: 1rem;
}

.footer-link {
  color: #bbb;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #42b883; /* Vert typique Vue */
}
</style>
