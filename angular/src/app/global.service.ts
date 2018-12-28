import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {

    isAlert = false;
    alertType = 'error';
    alertCont = 'test';

    constructor() {
    }

    changeAlert(action: string, type: number, cont: string): void {
        switch (action) {
            case 'alert':
                this.isAlert = true;
                break;
            case 'disAlert':
                this.isAlert = false;
                break;
            default:
                this.isAlert = false;
        }
        switch (type) {
            case 1:
                this.alertType = 'success';
                break;
            case 2:
                this.alertType = 'info';
                break;
            case 3:
                this.alertType = 'warning';
                break;
            case 4:
                this.alertType = 'error';
                break;
            default:
                this.alertType = 'error';
        }
        this.alertCont = cont;
    }
}
