import { RoleAddComponent } from './add-role/add-role.component';
import { RoleListComponent } from './list-role/list-role.component';
import { RoleRoutingModule } from './role-routing.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoleComponent } from './role-component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { roleReducer } from '../role/role-state/role-reducer';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoleEffect } from '../role/role-state/role-effects';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { RoleEditComponent } from './edit-role/edit-role.component';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzAlertModule } from 'ng-zorro-antd/alert';
@NgModule({
  imports: [
    CommonModule,
    RoleRoutingModule,
    NzTableModule,
    NzButtonModule,
    EffectsModule.forFeature([RoleEffect]),
    StoreModule.forFeature(
      'roles', roleReducer
    ),
    ReactiveFormsModule, FormsModule, CommonModule,
    NzModalModule,
    NzInputModule,
    NzFormModule,
    NzPopconfirmModule,
    NzAlertModule
  ],
  declarations: [
    RoleListComponent,
    RoleComponent,
    RoleAddComponent,
    RoleEditComponent
  ],
  providers: [

  ],

})
export class RoleModule { }
