import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponent } from './second/second.component';
import {UserModule} from './user/user.module';
import { ForLoopComponent } from './for-loop/for-loop.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FirstComponentComponent, SecondComponent, ForLoopComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
