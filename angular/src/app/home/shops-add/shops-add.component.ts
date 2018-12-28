import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Api, Cate } from '../../types/index';

import {
    FormBuilder,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators
} from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
    selector: 'app-shops-add',
    templateUrl: './shops-add.component.html',
    styleUrls: ['./shops-add.component.less']
})
export class ShopsAddComponent implements OnInit {

    validateForm: FormGroup;
    cates: Cate[];
    cateButton = '选择商品类型';
    cate: Cate;
    countAble = true;

    constructor(private fb: FormBuilder, private homeService: HomeService) {
        this.validateForm = this.fb.group({
            name: ['', [Validators.required], [this.userNameAsyncValidator]],
            desc: [''],
            cid: ['1', [Validators.required]],
            goldcoin: ['', [Validators.required]],
            count_status: [true, [Validators.required]],
            count: [''],
            aging: [''],
            unit: [],
        });
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

    selectCate(cate: Cate) {
        this.cateButton = cate.cname;
        this.cate = cate;
    }

    submitForm = ($event, value) => {
        // $event.preventDefault();
        // for (const key of Object.keys(this.validateForm.controls)) {
        //     this.validateForm.controls[key].markAsDirty();
        //     this.validateForm.controls[key].updateValueAndValidity();
        // }
        // this.homeService.setGood(value).subscribe((res: Api) => {
        //     console.log(res);
        // });
    }

    resetForm(e: MouseEvent): void {
        // e.preventDefault();
        // this.validateForm.reset();
        // for (const key of Object.keys(this.validateForm.controls)) {
        //     this.validateForm.controls[key].markAsPristine();
        //     this.validateForm.controls[key].updateValueAndValidity();
        // }
    }

    userNameAsyncValidator = (control: FormControl) => Observable.create((observer: Observer<ValidationErrors>) => {
        // setTimeout(() => {
        //     if (control.value === 'JasonWood') {
        //         observer.next({ error: true, duplicated: true });
        //     } else {
        //         observer.next(null);
        //     }
        //     observer.complete();
        // }, 1000);
    })

}
