import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceComponent } from './performance/performance.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: PerformanceComponent },
];


@NgModule({
  declarations: [
    PerformanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class PerformanceModule { }
