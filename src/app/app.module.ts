import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgUniversalCookiesModule } from 'nguniversal-cookies'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgUniversalCookiesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
