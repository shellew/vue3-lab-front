<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/login">サインイン</RouterLink>
    <a href="#">サインアウト</a>
  </header>

  <RouterView />
</template>

<style>
header {
  text-align: right;
  line-height: 50px;
  height: 50px;
  background-color: #555c64;
}

header a {
  padding-right: 10px;
  color: #fff;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
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
</style>
