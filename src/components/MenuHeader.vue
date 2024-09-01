<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <RouterLink to="/charity">Charity</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrapper {
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--section-gap);
}

nav {
  display: flex;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  justify-content: center;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;

    .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
@media only screen and (max-width: 550px) {
  .wrapper {
    padding: 0 1rem;
  }
}
@media only screen and (max-width: 550px) {
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 1em;
    width: auto;
    font-size: 15px;
  }

  nav a {
    padding: 0.5rem 10px;
    border: 0;
  }

  nav a.router-link-exact-active {
    animation: borderColor 0.6s ease-in-out 1 forwards;
    margin-left: 10px;
  }

  nav a:first-of-type {
    margin-left: 0;
    animation-direction: reverse;
    animation-duration: 0s;
  }
}
@media only screen and (max-width: 370px) {
  nav {
    font-size: 12px;
  }
}
</style>
