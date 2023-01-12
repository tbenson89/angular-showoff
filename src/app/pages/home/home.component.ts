import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  questions = [
    {
      title: 'Question 1',
      description: 'Can you describe your experience working with Angular 2+?',
      link: 'question1'
    },
    {
      title: 'Question 2',
      description: 'What are your thoughts on the Angular framework, and why do you prefer it over other front-end technologies?',
      link: 'question2'
    },
    // Add the other questions here
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
