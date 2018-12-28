import { Admin, Form } from '../types/index';

export class Util {
    public static getLocalForm(): Form {
        return {
            username: localStorage.getItem('username'),
            password: localStorage.getItem('password')
        };
    }

    public static setLocalForm(form: Form): void {
        localStorage.setItem('username', form.username);
        localStorage.setItem('password', form.password);
    }

    public static removeLocalForm(): void {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    public static getLocalAdmin(): Admin {
        return {
            authKey: sessionStorage.getItem('authKey'),
            sessionId: sessionStorage.getItem('sessionId')
        };
    }

    public static setLocalAdmin(admin: Admin): void {
        sessionStorage.setItem('authKey', admin.authKey);
        sessionStorage.setItem('sessionId', admin.sessionId);
    }

    public static removeLocalAdmin(): void {
        sessionStorage.removeItem('authKey');
        sessionStorage.removeItem('sessionId');
    }
}
