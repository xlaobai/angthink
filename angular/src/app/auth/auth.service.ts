import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { tap, delay, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Form, Api } from '../types/index';
import { Config } from '../config/config';
import { Util } from '../lib/util';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    isLoggedIn = false;

    redirectUrl: string;

    constructor(private http: HttpClient) { }

    login(form: Form, remember: boolean): Observable<any> {
        return this.http.post(
            `${ Config.baseUrl }/admin/base/login`,
            {
                'username': form.username,
                'password': form.password
            },
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        ).pipe(mergeMap(
            (res: Api) => {
                if (res.code === 200) {
                    if ( remember ) {
                        Util.setLocalForm(form);
                    }
                    Util.setLocalAdmin({
                        authKey: res.data['authKey'],
                        sessionId: res.data['sessionId']
                    });
                    return of(res.data).pipe(
                        delay(1000),
                        tap(val => this.isLoggedIn = true)
                    );
                } else {
                    return of(false);
                }
            })
        );
    }

    logout(): void {
        Util.removeLocalAdmin();
        this.isLoggedIn = false;
    }
}
