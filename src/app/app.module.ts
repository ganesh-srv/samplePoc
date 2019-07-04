import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { DashBoardModule } from './dashboard/dashboard.module';
import { TopfieldsModule } from './topfields/topfields.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    DashBoardModule,
    TopfieldsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
