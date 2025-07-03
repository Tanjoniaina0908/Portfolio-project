<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import OnePageView from "@/views/OnePageView.vue";

const menuOpen = ref(false);
const isScrolled = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}

function handleScroll() {
  isScrolled.value = window.scrollY > 30;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <div class="logo">RMT</div>

      <nav class="nav-links">
        <a href="#accueil">Accueil</a>
        <a href="#apropos">À propos</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#cv">CV</a>
        <a href="#contact">Contact</a>
      </nav>

      <!-- Icônes Desktop -->
      <div class="social-icons">
        <a href="https://github.com" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://wa.me/26133966198" target="_blank"><i class="fab fa-whatsapp"></i></a>
      </div>

      <!-- Menu burger mobile -->
      <button class="burger" @click="toggleMenu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <!-- Menu mobile -->
    <nav class="nav-center" :class="{ open: menuOpen }">
      <a href="#accueil" @click="closeMenu">Accueil</a>
      <a href="#apropos" @click="closeMenu">À propos</a>
      <a href="#portfolio" @click="closeMenu">Portfolio</a>
      <a href="#cv" @click="closeMenu">CV</a>
      <a href="#contact" @click="closeMenu">Contact</a>
      <div class="nav-icons-mobile">
        <a href="https://github.com" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://wa.me/26133966198" target="_blank"><i class="fab fa-whatsapp"></i></a>
      </div>
    </nav>
  </header>

  <main class="page-content">
    <OnePageView />
  </main>
</template>


<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

html, body, #app {
  width: 100vw;
  overflow-x: hidden;
  background: #121212;
  color: white;
  font-family: Arial, sans-serif;
}
</style>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 1rem 0;
  z-index: 1000;
  background-color: rgba(26, 26, 26, 0.7);
  backdrop-filter: blur(10px);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.navbar.scrolled {
  background-color: rgba(26, 26, 26, 0.9);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
}

.nav-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #42b883;
  text-transform: uppercase;
}

/* Onglets centrés */
.nav-links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex: 1;
}

.nav-links a {
  color: white;
  font-weight: bold;
  text-decoration: none;
  background-color: #1a1a1a;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  transition: 0.3s;
}

.nav-links a:hover {
  background-color: #222;
  color: #42b883;
}

/* Icônes desktop */
.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  color: #42b883;
  font-size: 1.3rem;
  transition: transform 0.3s;
}

.social-icons a:hover {
  transform: scale(1.2);
}

/* Burger */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
}

.burger span {
  width: 25px;
  height: 3px;
  background-color: white;
  transition: 0.3s ease;
}

.burger span.open:nth-child(1) {
  transform: rotate(45deg) translateY(8px);
}
.burger span.open:nth-child(2) {
  opacity: 0;
}
.burger span.open:nth-child(3) {
  transform: rotate(-45deg) translateY(-8px);
}

/* Menu mobile */
.nav-center {
  display: none;
}

.nav-center.open {
  display: flex;
  flex-direction: column;
  background: #1a1a1a;
  position: absolute;
  top: 70px;
  right: 1rem;
  padding: 1rem;
  border-radius: 10px;
  z-index: 1000;
}

.nav-center a {
  color: white;
  padding: 0.6rem;
  text-decoration: none;
  font-weight: bold;
}

.nav-icons-mobile {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.nav-icons-mobile a {
  color: #42b883;
  font-size: 1.3rem;
  transition: transform 0.3s;
}

.nav-icons-mobile a:hover {
  transform: scale(1.2);
}

.page-content {
  margin-top: 80px;
  overflow-x: hidden;
  width: 100vw;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .social-icons {
    display: none;
  }

  .burger {
    display: flex;
  }
}
</style>
