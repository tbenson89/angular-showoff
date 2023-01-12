import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { Question1Component } from './pages/question1/question1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    Question1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
