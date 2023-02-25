import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArcaptchaAngularModule } from 'arcaptcha-angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ArcaptchaAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
