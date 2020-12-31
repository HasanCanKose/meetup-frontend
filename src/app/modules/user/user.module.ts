import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [UserProfileComponent, UserSettingsComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class UserModule { }
