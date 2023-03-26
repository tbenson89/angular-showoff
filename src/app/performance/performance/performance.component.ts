import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
// import { Observable } from 'rxjs/internal/Observable';
// import { of } from 'rxjs/internal/observable/of';
import { DataService } from 'src/app/services/data.service';

// Implement the OnPush change detection strategy by setting the changeDetection
// property of the @Component decorator to ChangeDetectionStrategy.OnPush.
@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush, // only updates the component when an input property changes / event is emitted by one of the child components
})
export class PerformanceComponent implements OnInit {
  data$: any;
  // data$: Observable<any> | undefined;
  coins: any;
  coinExample: any;

  constructor(private dataService: DataService) {
    // this.data$ = new Observable((observer) => {
    //   setTimeout(() => {
    //     observer.next('Data Loaded');
    //   }, 2000);
    // });
  }

  ngOnInit(): void {
    this.data$ = this.dataService.getTrendingCoins();
    this.data$.subscribe((data: any) => {
      const { items }: { items: any[] } = data;
      this.coins = items;
      console.log(this.coins);
    });
  }


  // ngOnInit(): void {
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

  ngOnDestroy(): void {
    this.data$ = undefined;
  }
}
