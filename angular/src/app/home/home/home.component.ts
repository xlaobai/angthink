import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Api } from '../../types/index';
import { ActivatedRoute, Router } from '@angular/router';
import { Util } from '../../lib/util';
import { AuthService } from '../../auth/auth.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    menu: any;
    parent: string;
    child: string;
    name: string;

    constructor(private homeService: HomeService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private authService: AuthService) { }

    ngOnInit() {
        // this.homeService.getAdminInfo().subscribe((res: Api) => {
        //     if (res.error === 0) {
        //         this.menu = JSON.parse(res.data['menu']).child;
        //     } else {

        //     }
        // });
        // this.name = Util.getLocalForm().admin;
        this.activatedRoute.queryParamMap.pipe(map((params) => {
            console.log(params.get('authKey'));
        }));
    }

    routeChange(url: string, child: string, parent: string) {
        this.router.navigateByUrl(url);
        this.child = child;
        this.parent = parent;
    }

    logout(): void {
        this.authService.logout();
        this.router.navigateByUrl(`/login`);
    }

}
