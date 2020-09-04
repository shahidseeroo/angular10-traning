import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponent } from './second/second.component';
import {UserModule} from './user/user.module';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { FormComponent } from './form/form.component';
import { BootstrapExampleComponent } from './bootstrap-example/bootstrap-example.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataPassingComponent } from './data-passing/data-passing.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule ],
  declarations: [ AppComponent, HelloComponent, FirstComponentComponent, SecondComponent, ForLoopComponent, StyleBindingComponent, FormComponent, BootstrapExampleComponent, DataPassingComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
