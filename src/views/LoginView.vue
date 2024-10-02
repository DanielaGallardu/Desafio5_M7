<script setup>
import { $auth } from '@/firebaseApp';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SignWithGoogle from '@/components/SignWithGoogle.vue';

const email = ref('');
const password = ref('');
const router = useRouter();

async function handleLogin() {
  try {
    await signInWithEmailAndPassword($auth, email.value, password.value);
    email.value = '';
    password.value = '';
    router.push({ name: 'home' });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert("Error al iniciar sesión, intente nuevamente");
  }
}
</script>

<template>
  <div class="container login">
    <h2 class="mt-5">Iniciar Sesión</h2>
    <form @submit.prevent="handleLogin" class="mt-4">
      <div class="mb-3">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input v-model="email" type="email" id="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input v-model="password" type="password" id="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-dark w-100 mb-3">Iniciar Sesión</button>
      <SignWithGoogle />
      <router-link to="/signup" class="signup-link">¿No tienes cuenta? Regístrate aquí</router-link>
    </form>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin-top: 50px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

h2 {
  color: #9b1c30;
  text-align: center;
}

.signup-link {
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #9b1c30;
  font-weight: bold;
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
}
</style>
