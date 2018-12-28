import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Util } from '../lib/util';
import { Admin, Api } from '../types/index';
import { Observable } from 'rxjs';
import { Config } from '../config/config';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    admin: Admin;

    constructor(private http: HttpClient) {
        this.admin = Util.getLocalAdmin();
    }

}
