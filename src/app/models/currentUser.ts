import { Role } from "./const/role";

export class CurrentUser {

    constructor(init?: Partial<CurrentUser>) {
        Object.assign(this, init);
    }

    _id: string = '';
    name: string = '';
    last_name: string = '';
    rol: Role = null;
    avatar: string = '';
    email: string = '';
}