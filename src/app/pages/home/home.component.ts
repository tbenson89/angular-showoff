import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeHeroData = {
    title: {
      t1: 'Angular is for Lovers',
      t2: 'Angular: The Jedi of web development',
      t3: 'The Jedi of web development',
      t4: 'Ignite Apps with Angular'
    },
    tagline: 'A. Tyler Benson Angular Developer',
    summary: 'A nice playground to show off different angular best practices, personal experience, somewhat of a portfolio project.',
    btn1txt: 'Learn More',
    btn1link: '#link1',
    btn2txt: 'Explore Me',
    btn2link: '#link2',
  };
  pointGridData = [
    {
      title: 'Point Number 1',
      summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: 'nature'
    },
    {
      title: 'Point Number 2',
      summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: 'currency_bitcoin'
    },
    {
      title: 'Point Number 3',
      summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: 'flight_takeoff'
    },
    {
      title: 'Point Number 4',
      summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: 'surfing'
    },
  ];
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

  ngOnInit(): void { }

}
