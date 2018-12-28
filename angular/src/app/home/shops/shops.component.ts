import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Api, Cate } from '../../types/index';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.less']
})
export class ShopsComponent implements OnInit {

    dataSet = [];
    total = 1;      // 由服务端返回
    pageSize = 15;
    pageIndex = 1;
    loading = false;
    cates: Cate[];
    cateButton = '选择商品类型';
    cate: Cate;

    constructor(private homeService: HomeService) {
        this.getCates();
    }

    ngOnInit() {
    }

    getCates() {
        // this.homeService.getCates().subscribe((res: Api) => {
        //     if ( res.error === 0 ) {
        //         this.cates = res.data;
        //     }
        // });
    }

    getGoods(cate: Cate) {
        // this.cateButton = cate.cname;
        // this.cate = cate;
        // this.loading = true;
        // this.homeService.getGoods(this.pageIndex - 1, this.cate.cid).subscribe((res: Api) => {
        //     if ( res.error === 0 ) {
        //         this.total = res.data['total'];
        //         this.dataSet = res.data['goods'];
        //     }
        //     console.log(this.dataSet);
        //     this.loading = false;
        // });
    }

}
