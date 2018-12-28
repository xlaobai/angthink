import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Util } from '../../lib/util';
import {
    Router,
    NavigationExtras,
} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, AfterViewInit {

    validateForm: FormGroup;

    submitForm(): void {
        for (const i of Object.keys(this.validateForm.controls)) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        this.authService.login(
            {
                username: this.validateForm.value.username,
                password: this.validateForm.value.password
            },
            this.validateForm.value.remember
        ).subscribe((res) => {
            if (this.authService.isLoggedIn) {
                console.log(res);
                const navigationExtras: NavigationExtras = {
                    queryParams: res,
                    fragment: 'anthor'
                };
                const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
                this.router.navigate([redirect], navigationExtras);
            } else {
                console.log('false');
            }
        });
    }

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    }

    ngOnInit(): void {
        const form = Util.getLocalForm();
        this.validateForm = this.fb.group({
            username: [form.username, [Validators.required]],
            password: [form.password, [Validators.required]],
            remember: [true]
        });
    }
    ngAfterViewInit() {
    }

}
