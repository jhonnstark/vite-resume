<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">{{ $t('menu.home') }}</RouterLink>
        <RouterLink to="/about">{{ $t('menu.about') }}</RouterLink>
        <RouterLink to="/portfolio">{{ $t('menu.portfolio') }}</RouterLink>
        <RouterLink to="/services">{{ $t('menu.services') }}</RouterLink>
        <RouterLink to="/contact">{{ $t('menu.contact') }}</RouterLink>
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
  text-align: center;
  justify-content: center;
  padding: 1.7rem 0;
  transition: 0.4s;
  font-size: 1rem;
}

nav a {
  text-decoration: none;
  color: hsl(343, 100%, 39%);
  transition: 0.4s;
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

@media (hover: hover) {
  header:hover {
    background-color: var(--vt-c-black-hard);
    transition: 0.4s;
  }
  nav a:hover {
    /*background-color: hsla(0, 100%, 37%, 0.2);*/
    padding: 0 1.4rem;
  }
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

    a {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
}

@media only screen and (max-width: 550px) {
  .wrapper {
    padding: 0 1rem;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: auto;
    font-size: 15px;
  }

  nav a {
    padding: 0.5rem 7px;
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

  nav a:hover {
    padding: 0.5rem 7px;
  }
}

@media only screen and (max-width: 370px) {
  nav {
    font-size: 12px;
  }
}
</style>
