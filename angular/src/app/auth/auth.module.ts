import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        NgZorroAntdModule,
        CommonModule
    ],
    declarations: [
        LoginComponent
    ]
})

export class AuthModule {}

