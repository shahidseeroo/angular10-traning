import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponent } from './second/second.component';
import {UserModule} from './user/user.module'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FirstComponentComponent, SecondComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
