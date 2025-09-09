import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout-module';
import { PeopleModule } from './people/people-module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    LayoutModule,
    PeopleModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
