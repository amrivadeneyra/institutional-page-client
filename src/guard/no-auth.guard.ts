import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './authService.service';

export const noAuthGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isAuthenticated()) {
        router.navigate(['/home']); // Redirigir si ya está autenticado
        return false;
    }
    return true; // Permitir acceso si no está autenticado
};
