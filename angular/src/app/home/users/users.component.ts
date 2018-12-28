import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Api } from '../../types/index';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

    dataSet = [];
    total = 1;      // 由服务端返回
    pageSize = 15;
    pageIndex = 1;
    loading = false;

    constructor(private homeService: HomeService) {
        this.pageIndexChange();
    }

    ngOnInit() {
    }

    pageIndexChange() {
        // this.loading = true;
        // this.homeService.getUsers(this.pageIndex - 1).subscribe((res: Api) => {
        //     this.dataSet = res.data['users'];
        //     this.total = res.data['total'];
        //     this.loading = false;
        // });
    }
}
