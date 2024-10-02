<script setup>
import { $auth } from '@/firebaseApp';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SignWithGoogle from '@/components/SignWithGoogle.vue';

const email = ref('');
const password = ref('');
const successMessage = ref('');
const router = useRouter();

async function handleRegister() {
  try {
    await createUserWithEmailAndPassword($auth, email.value, password.value);
    email.value = '';
    password.value = '';
    successMessage.value = 'Registro exitoso! Redirigiendo a inicio de sesión...';
    setTimeout(() => {
      router.push({ name: 'Login' });
    }, 1000); // Esperar un segundo de redirigir
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div class="container text-center signup">
    <h2 class="title">Regístrate Aquí</h2>
    <form @submit.prevent="handleRegister" class="mt-4">
      <div class="mb-3">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input type="email" class="form-control" id="email" v-model="email" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input type="password" class="form-control" id="password" v-model="password" required />
      </div>
      <div class="button-container">
        <button type="submit" class="btn btn-dark w-100 mb-3">Registrarse</button>
        <SignWithGoogle />
      </div>
      <p class=" mt-3">
        ¿Ya tienes cuenta? <RouterLink to="/login" class="signup-link">Inicia sesión aquí</RouterLink>
      </p>
    </form>
    <p v-if="successMessage" class="text-success mt-3">{{ successMessage }}</p>
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

.title {
  font-weight: bolder;
  color: #9b1c30;
  margin-bottom: 20px;
  padding-bottom: 10px;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
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
