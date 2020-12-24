import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogarithmenComponent } from './component/logarithmen/logarithmen.component';
import { MenuComponent } from './component/menu/menu.component';
import { Steckbrief1Component } from './component/steckbrief1/steckbrief1.component';

@NgModule({
  declarations: [
    AppComponent,
    LogarithmenComponent,
    MenuComponent,
    Steckbrief1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
