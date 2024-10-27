export class SignInResponse {
    constructor(init?: Partial<SignInResponse>) {
        Object.assign(this, init);
    }

    success: boolean = false;
    error: string = '';
    userRole: string = '';
}