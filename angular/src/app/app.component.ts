import { Component, AfterViewInit } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {

    constructor(private globalService: GlobalService) {
        this.globalService.changeAlert('alert', 1, 'test');
    }

    ngAfterViewInit(): void {
    }
}
