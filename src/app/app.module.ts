import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Shared.Components */
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HeroComponent } from './components/hero/hero.component';

/* Pages */
import { HomeComponent } from './pages/home/home.component';
import { Question1Component } from './pages/question1/question1.component';
import { PointGridComponent } from './components/point-grid/point-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HeroComponent,
    HomeComponent,
    Question1Component,
    PointGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
