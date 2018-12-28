import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { StructuresComponent } from './structures/structures.component';
import { PositionComponent } from './position/position.component';
import { GroupsComponent } from './groups/groups.component';
import { ConfigComponent } from './config/config.component';
import { ShopsComponent } from './shops/shops.component';
import { ShopsAddComponent } from './shops-add/shops-add.component';

import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    {
                        path: 'users/list',
                        component: UsersComponent
                    },
                    {
                        path: 'groups/list',
                        component: GroupsComponent
                    },
                    {
                        path: 'structures/list',
                        component: StructuresComponent
                    },
                    {
                        path: 'position/list',
                        component: PositionComponent
                    },
                    {
                        path: 'config/add',
                        component: ConfigComponent
                    },
                    {
                        path: 'shops/list',
                        component: ShopsComponent
                    },
                    {
                        path: 'shops/add',
                        component: ShopsAddComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
