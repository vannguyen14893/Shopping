import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './list-user/list-user.component';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { PaginatorModule } from 'primeng/paginator';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd/icon';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { AddUserComponent } from './add-user/add-user.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './user-state/user-efffect';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../user/user-state/user-reducer';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill];
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    PaginatorModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    CalendarModule,
    NzTableModule,
    NzPaginationModule,
    NzCheckboxModule,
    NzToolTipModule,
    NzTimePickerModule,
    NzDatePickerModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzFormModule,
    NzRadioModule,
    NzPopconfirmModule,
    NzSwitchModule,
    NzInputNumberModule,
    NzUploadModule,
    NzDropDownModule,
    NzAvatarModule,
    EffectsModule.forFeature([UserEffect]),
    StoreModule.forFeature(
      'users', userReducer
    ),
  ],
  declarations: [
    UserListComponent,
    UserComponent,
    DetailUserComponent,
    EditUserComponent,
    AddUserComponent,

  ],
  providers: [
    UserService,
    DatePipe,
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' },
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class UserModule { }
