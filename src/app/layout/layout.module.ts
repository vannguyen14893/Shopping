import { IdentityService } from './../auth/identity.service';
import { AuthGuard } from './../auth/auth.guard';
import { SettingModule } from './setting/setting.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { UserModule } from './user/user.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    UserModule,
    SettingModule

  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    AuthGuard,
    IdentityService
  ],

})
export class LayoutModule { }
