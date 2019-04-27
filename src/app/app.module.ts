import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {OpsTreeModule} from '../../projects/ops-tree/src/lib/ops-tree.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OpsTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
