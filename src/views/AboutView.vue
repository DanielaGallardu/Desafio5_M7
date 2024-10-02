<template>
  <div class="about">
    <div class="content text-center">
      <h1 class="display-4">Acerca de Nosotros</h1>
      <p class="lead mt-3">
        Somos una aplicación dedicada a brindar las mejores funcionalidades para nuestros usuarios.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: #f8f9fa;
  padding: 20px;
}

.content {
  max-width: 600px;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #7b1c2b;
  margin-bottom: 20px;
  font-weight: 600;
}

p {
  color: #555;
}
</style>
