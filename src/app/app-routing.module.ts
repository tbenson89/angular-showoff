import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Question1Component } from './pages/question1/question1.component';

const routes: Routes = [
  { path: 'question1', component: Question1Component },
  { path: 'question2', component: Question1Component },
  // Add routes for the other question components here
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
