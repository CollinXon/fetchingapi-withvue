<script setup></script>

<template>
  <nav id="Navbar-css">
    <RouterLink to="/"> HomePage</RouterLink>
    <RouterLink to="/repositories">Repositories</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
#Navbar-css {
  display: flex;
  position: absolute;
  left: 20px;
  gap: 15px;
  font-size: 15px;
}

#Navbar-css a {
  text-decoration: none;
}

#Navbar-css a:hover {
  opacity: 0.5;
  font-weight: bold;
}
</style>
