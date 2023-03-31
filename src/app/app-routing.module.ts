import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PracticeComponent } from './pages/practice/practice.component';
import { Question1Component } from './pages/question1/question1.component';
import { PerformanceComponent } from './performance/performance/performance.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'question1', component: Question1Component },
  { path: 'about', component: AboutComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
