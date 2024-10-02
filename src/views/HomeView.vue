<script setup>
</script>

<template>
  <main class="text-center py-5">
    <h1 class="display-4">Bienvenido</h1>
    <p class="lead mt-3">Has iniciado sesión con éxito. Ahora explora y disfruta de nuestras funcionalidades.</p>
    <router-link to="/about" class="btn btn-custom mt-4">Más información</router-link>
  </main>
</template>

<style scoped>
main {
  padding: 50px 15px;
  background-color: #f8f9fa;
}

h1 {
  color: #7b1c2b;
  font-weight: 500
}

p {
  color: #555;
  font-weight: bold;
}

.btn-custom {
  background-color: #7b1c2b;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
}

.btn-custom:hover {
  background-color: #641623;
}
</style>
