import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from 'src/app/services/data.service';

// Implement the OnPush change detection strategy by setting the changeDetection
// property of the @Component decorator to ChangeDetectionStrategy.OnPush.
@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush, // only updates the component when an input property changes / event is emitted by one of the child components
})
export class PerformanceComponent implements OnInit {
  data$: Observable<any> | undefined;

  // TODO: MOVE ALL LISTING LOGIC TO IT"S OWN COMPONENT!
  listings$: Observable<any> | undefined;
  users$: Observable<any> | undefined;

  constructor(private dataService: DataService) {
    // REMOVED STUFF
    // coins: any;
    // coinExample: any;
    // this.data$ = new Observable((observer) => {
    //   setTimeout(() => {
    //     observer.next('Data Loaded');
    //   }, 2000);
    // });
  }

  ngOnInit(): void {
    this.getSomeCoins();

    this.getListings();
    this.getUsers();
  }

  getListings() {
    this.listings$ = this.dataService.getAllListings();
  }

  getUsers() {
    this.users$ = this.dataService.getAllUsers();
  }

  getSomeCoins() {
    this.data$ = this.dataService.getTrendingCoins();
    // console.log(this.data$)
  }


  // REMOVED STUFFS
  // ngOnInit(): void {
  // this.data$.subscribe((data: any) => {
  //   const { items }: { items: any[] } = data;
  //   this.coins = items;
  //   console.log(this.coins);
  // });
  //   this.data$ = this.dataService.getTrendingCoins();
  //   this.data$.subscribe((data: { coins: any; }) => {
  //     this.coins = data.coins;
  //     console.log(this.coins);
  //   });
  // }

  // ngOnInit(): void {
  //   this.data$ = this.dataService.getTrendingCoins().subscribe(data => {
  //     this.data$ = data;
  //     this.coins = this.data$.coins;
  //     this.coinExample = this.coins.forEach((coin: any) => {
  //        console.log(coin.item)
  //     });
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.data$ = undefined;
  // }
}
