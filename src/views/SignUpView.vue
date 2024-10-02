<script setup>
import { $auth } from '@/firebaseApp';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Importar useRouter
import SignWithGoogle from '@/components/SignWithGoogle.vue';

const email = ref('');
const password = ref('');
const successMessage = ref(''); // Mensaje de éxito
const router = useRouter(); // Inicializar el router

async function handleRegister() {
  try {
    await createUserWithEmailAndPassword($auth, email.value, password.value);
    email.value = '';
    password.value = '';
    successMessage.value = 'Registro exitoso! Redirigiendo a inicio de sesión...';
    setTimeout(() => {
      router.push({ name: 'Login' }); // Redirigir a la página de login
    }, 2000); // Esperar 2 segundos antes de redirigir
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div class="container text-center signup">
    <h2 class="title">Regístrate</h2>
    <form @submit.prevent="handleRegister" class="mt-4 border-form">
      <div class="mb-3">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input type="email" class="form-control" id="email" v-model="email" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input type="password" class="form-control" id="password" v-model="password" required />
      </div>
      <div class="button-container">
        <button type="submit" class="btn btn-danger">Registrarse</button>
        <SignWithGoogle />
      </div>
      <p class="mt-3">
        ¿Ya tienes cuenta? <RouterLink to="/login">Inicia sesión aquí</RouterLink>
      </p>
    </form>
    <p v-if="successMessage" class="text-success mt-3">{{ successMessage }}</p> <!-- Mensaje de éxito -->
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
}

.title {
  font-weight: bolder;
  color: #9b1c30;
  margin-bottom: 20px;
  padding-bottom: 10px;
}

.border-form {
  border: 2px solid #7c1c2b;
  border-radius: 15px;
  padding: 20px;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}
</style>
