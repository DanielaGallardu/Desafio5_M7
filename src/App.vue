<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { signOut } from 'firebase/auth'
import { $auth } from './firebaseApp'
import { useRouter } from 'vue-router'


const router = useRouter()

async function handleSignOut() {
  signOut($auth).then(() => {
    alert('Cerraste Sesión')
    router.push({ name: 'Login' })
  })
}
</script>

<template>
  <header class="text-white p-4">
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
  background-color: #7c113a;
  color: #fff;
  padding: 4rem 0;
  text-align: center;
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

button,
nav a {
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
}

nav a.btn-light {
  background-color: #f8f9fa;
  border: 2px solid #7b1c2b;
  color: #7b1c2b;
  font-weight: bold;
}

nav a.btn-light:hover {
  background-color: #6e1533;
  color: #fff;

}

button.btn-warning {
  background-color: #3d0417;
  color: #ffffff;
  border: none;
  font-weight: bold;
}

button.btn-warning:hover {
  background-color: #d6af13;
  color: #fff;
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
  color: #fff;
}
</style>
