import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { StructuresComponent } from './structures/structures.component';
import { PositionComponent } from './position/position.component';
import { ConfigComponent } from './config/config.component';
import { SexPipe, LoginWayPipe, VipLeavePipe, VipLevelPipe } from './pipes/user.pipe';
import { ShopsComponent } from './shops/shops.component';
import { ShopsAddComponent } from './shops-add/shops-add.component';

@NgModule({
    declarations: [
        HomeComponent,
        UsersComponent,
        GroupsComponent,
        StructuresComponent,
        PositionComponent,
        ConfigComponent,
        SexPipe,
        LoginWayPipe,
        VipLeavePipe,
        VipLevelPipe,
        ShopsComponent,
        ShopsAddComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule
    ]
})
export class HomeModule { }
