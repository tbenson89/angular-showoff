import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  counter: number = 0;


  constructor() { }

  ngOnInit(): void {
    // Note: Stream of values
    // Every click you do is a stream of values
    document.addEventListener('click', event => {
      // This will stream all values of click events!
      console.log(event);
    });

    // Often found streamers JS intervals
    // Preiodically exec by the runtime in order to
    // perform a certain task such as long polling in bg?
    setInterval(() => {
      console.log(this.counter);
      this.counter++;
    }, 1000);

    // THIS IS A STREAM just emits 1 value and times out!
    setTimeout(() => {
      console.log("FINISHED!");
    }, 3000)
  }

}
