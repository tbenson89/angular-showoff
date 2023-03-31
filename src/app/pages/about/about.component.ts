import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {
  catchError,
  concatMap,
  fromEvent,
  interval,
  map,
  filter,
  mergeMap,
  Observable,
  of,
  timer,
  BehaviorSubject,
  combineLatest,
  tap,
  shareReplay
} from 'rxjs';

// TODO: Rename and link component/page === RxJS from about!
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  counter: number = 0;
  users = [
    { id: 1, name: 'John', isActive: true },
    { id: 2, name: 'Jack', isActive: true },
    { id: 3, name: 'Billy', isActive: true },
  ];
  // Create stream of data for users map pipe async 2 streams.
  users$ = of(this.users);
  // To Transform data using rxjs w/o subs
  usernames1$ = this.users$.pipe(map((users) => users)); // Note: returns observable obj sub / async pipe to read the data!
  // Username2 is deprecated but we have stuff in the HTML in the notes so we'll keep it here!
  usernames2$ = this.users$.pipe(map((users) => users.map((user) => user.name))) // NOTE: returns an array of the names Observable<string[]>
  // create filter stream! of active users
  // Note: We can combine the methods to one stream.
  // Note: I'm going to take the userName2 delete it and move it into filteredUsers$ stream.
  // Note: After We check if all users are active!
  filteredUsers$ = this.users$.pipe(
    filter(users => users.every(user => user.isActive)), // Filter if all users are active
    // map((users) => users.map((user) => user.name)) // IF SO map/tranform and list only names[] // Note: removed for the combineLatest()
  );
  // Create BehaviorSubject Stream of users // Note: You must add the default value(defualt)
  user$ = new BehaviorSubject<{id: string; name: string} | null>(null);
  // Create FROMEVENT DOM event stream :)
  documentClick$ = fromEvent(document, 'click');

  // Create combined stream of ALL streams
  data$ = combineLatest([
    this.users$,
    this.usernames1$,
    this.filteredUsers$
  ]).pipe(map(([users, usernames, filteredUsers]) => ({
    users,
    usernames,
    filteredUsers
  })));


  constructor(private dataService: DataService) { }


  ngOnInit(): void {

    // WOrking on Errors
    const http$ = this.dataService.getAllUsers();
    const usrs$: Observable<any> = http$
      .pipe(
        tap(() => console.log("HTTP request executed")),
        map(res => Object.values(document)),
        shareReplay()
      )
  }

  updateUserBehaveSubject() {
    setTimeout(() => {
      this.user$.next({ id: '4', name: 'Tyler' });
      this.user$.subscribe((user) => {
        console.log('User', user);
      });
    }, 2000);
  }

  runDemo() {
    this.streamsDemo();

    this.multiStreamsDemo();

    this.clickStreamDemo();

    this.confusingMergeConcatMaps();

    this.testUsers1();

    this.fromEventDemo();

    this.updateUserBehaveSubject();
  }

  fromEventDemo() {
    // FROMEVENT
    this.documentClick$.subscribe((e) => {
      console.log('e', e)
    });
  }

  testUsers1() {
    // Below are notes from this YT video: https://youtu.be/2T3F5TfrYwI
    this.filteredUsers$.subscribe(console.log);
    this.users$.subscribe(console.log) // NOTE: not intended to use subscribe use ASYNC PIPE! rxjs!
    this.usernames1$.subscribe(console.log) // NOTE: not intended to use subscribe use ASYNC PIPE! rxjs!
    this.usernames2$.subscribe(console.log);
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
