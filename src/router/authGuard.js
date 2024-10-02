import { onAuthStateChanged } from 'firebase/auth';
import { $auth } from '@/firebaseApp';

export function authGuard(to, from, next) {
  onAuthStateChanged($auth, (user) => {
    if (to.meta.requiresAuth && !user) {
      // Si la ruta requiere autenticación y el usuario no está autenticado, redirige a SignUp
      next({ name: 'signup' });
    } else if ((to.name === 'login' || to.name === 'signup') && user) {
      // Si el usuario está autenticado y trata de ir a Login o SignUp, redirige a Home
      next({ name: 'home' });
    } else {
      // Deja pasar al usuario si todo está bien
      next();
    }
  });
}
