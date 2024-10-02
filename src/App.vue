<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { signOut } from 'firebase/auth'
import { $auth } from './firebaseApp'
import { useRouter } from 'vue-router'


const router = useRouter()

async function handleSignOut() {
  signOut($auth).then(() => {
    alert('Cerraste Sesión')
    router.push({ name: 'Login' }) // ¿qué paso con redirección?
  })
}
</script>

<template>
  <header class="bg-danger text-white p-4">
    <div class="container text-center">
      <img alt="Vue logo" class="logo mb-3" src="@/assets/logo.svg" width="125" height="125" />
      <h1>¡Bienvenido a Mi App!</h1>
      <nav class="mt-3">
        <RouterLink to="/" class="btn btn-light mx-2">Home</RouterLink>
        <RouterLink to="/login" class="btn btn-light mx-2">Login</RouterLink>
        <RouterLink to="/signup" class="btn btn-light mx-2">Sign Up</RouterLink>
        <RouterLink to="/about" class="btn btn-light mx-2">About</RouterLink>
        <button @click="handleSignOut" class="btn btn-warning mx-2">Sign Out</button>
      </nav>
    </div>
  </header>

  <main class="container mt-5">
    <RouterView />
  </main>
</template>

<style scoped>
header {
  position: relative;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto;
}

nav {
  width: 100%;
  text-align: center;
}

nav a {
  margin: 0 1rem;
}

@media (min-width: 768px) {
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

h1 {
  text-align: center;
  margin-top: 2rem;
  font-size: 2rem;
  color: #333;
}
</style>
