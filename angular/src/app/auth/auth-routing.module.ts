import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const anthRouters: Routes = [
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(anthRouters)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {}
