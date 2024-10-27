import { Role } from "../const/role";

export class AuthResponse {
    constructor(init?: Partial<AuthResponse>) {
        Object.assign(this, init);
    }

    _id: string = '';
    name: string = '';
    last_name: string = '';
    rol: Role = null;
    avatar: string = '';
    email: string = '';
    token: Token = new Token();

}

class Token {

    constructor(init?: Partial<Token>) {
        Object.assign(this, init);
    }

    accessToken: string = '';
    refresh_token: string = '';
}