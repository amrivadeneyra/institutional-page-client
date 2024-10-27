import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // Aquí podrías almacenar el estado de autenticación
    private authenticated = false;

    constructor() { }

    // Método para simular autenticación
    login() {
        this.authenticated = true;
    }

    logout() {
        this.authenticated = false;
    }

    isAuthenticated(): boolean {
        return this.authenticated; // Retorna el estado de autenticación
    }
}
