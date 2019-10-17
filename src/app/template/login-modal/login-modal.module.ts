import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './login-modal.component';
import { BackdropComponent } from 'src/app/module/backdrop/backdrop.component';
import { LoginModule } from 'src/app/pages/login/login.module';

@NgModule({
  declarations: [LoginModalComponent, BackdropComponent],
  imports: [
    CommonModule,
    LoginModule
  ],
  exports: [LoginModalComponent]
})
export class LoginModalModule { }
