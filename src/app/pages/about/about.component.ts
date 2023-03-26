import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {
  catchError,
  concatMap,
  fromEvent,
  interval,
  mergeMap,
  Observable,
  of,
  timer
} from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  counter: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.confusingMergeConcatMaps();
  }

  confusingMergeConcatMaps() {
    of('1', '2', '3')
      .pipe(
        concatMap(number => this.dataService.getData()),
        catchError((err: { status: any; }) => of(err.status))
      )
      // MergeMap example! doesn't really work well :/
      .pipe(
        mergeMap(number => this.dataService.getData()),
        catchError((err: { status: any; }) => of(err.status))
      )
      .subscribe(console.log);
  }

  runDemo() {
    this.streamsDemo();

    this.multiStreamsDemo();

    this.clickStreamDemo();
  }

  clickStreamDemo() {
    // Define a stream of clicks using the rxjs from event method
    const click$: Observable<Event> = fromEvent(document, 'click');
    click$.subscribe(e => console.log(`The Event Stream: ${e}`));
  }

  multiStreamsDemo() {
    // Create definition of a rxjs stream
    const interval$: Observable<number> = interval(1000);
    // Create first stream of values / observables!
    interval$.subscribe(value => console.log(`stream #1: ${value}`));

    // Create second stream of values
    interval$.subscribe(value => console.log(`stream #1: ${value}`));

    // Third stream of values timer(delay,time)
    const timer$: Observable<number> = timer(3000, 1000);
    timer$.subscribe(value => console.log(value));
  }

  streamsDemo() {
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
      // console.log(this.counter);
      this.counter++;
    }, 1000);

    // THIS IS A STREAM just emits 1 value and times out!
    setTimeout(() => {
      console.log("FINISHED!");
    }, 3000);
  }
}
