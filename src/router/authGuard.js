import { onAuthStateChanged } from 'firebase/auth';
import { $auth } from '@/firebaseApp';

export function authGuard(to, from, next) {
  onAuthStateChanged($auth, (user) => {
    if (to.meta.requiresAuth && !user) {
      next({ name: 'signup' });
    } else if ((to.name === 'login' || to.name === 'signup') && user) {
      next({ name: 'home' });
    } else {
      next();
    }
  });
}
