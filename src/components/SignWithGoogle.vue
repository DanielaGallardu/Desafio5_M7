<script setup>
import { $auth } from '@/firebaseApp';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

async function handleGoogleLogin() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup($auth, provider);
    router.push({ name: 'home' }); // Redirigir a Home después de iniciar sesión
  } catch (error) {
    console.error('Error al iniciar sesión con Google:', error);
  }
}
</script>

<template>
  <button @click="handleGoogleLogin" class="btn btn-light w-100">Iniciar Sesión con Google</button>
</template>


<style scoped>
.btn {
  background-color: #9b1c30;
  /* Color guinda */
  color: white;
}

.btn:hover {
  background-color: #7f1424;
  /* Color guinda oscuro en hover */
}
</style>
