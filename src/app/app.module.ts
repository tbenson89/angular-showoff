import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

/* Shared.Components */
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HeroComponent } from './components/hero/hero.component';

/* Pages */
import { HomeComponent } from './pages/home/home.component';
import { Question1Component } from './pages/question1/question1.component';
import { PointGridComponent } from './components/point-grid/point-grid.component';
import { CardGridComponent } from './components/card-grid/card-grid.component';
import { PerformanceModule } from './performance/performance.module';

/* Services */
import { DataService } from './services/data.service';
import { DarkmodeTogglerComponent } from './components/darkmode-toggler/darkmode-toggler.component';
import { StartsWithFilterTsPipe } from './pipes/starts-with-filter.ts.pipe';
import { CardComponent } from './components/card/card.component';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HeroComponent,
    HomeComponent,
    Question1Component,
    PointGridComponent,
    CardGridComponent,
    DarkmodeTogglerComponent,
    StartsWithFilterTsPipe,
    CardComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerformanceModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
