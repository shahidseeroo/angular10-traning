import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddUserComponent} from './add-user/add-user.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    AddUserComponent
  ],
  declarations: []
})
export class UserModule { }