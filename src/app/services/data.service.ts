import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

// interface CoinsResponse {
//   coins: any[];
// }

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://api.coingecko.com/api/v3/search/trending';

  constructor(private http: HttpClient) { }

  getTrendingCoins(): Observable<{items: any[]}> {
    return this.http.get<{items: any[]}>(this.apiUrl);
  }

  // getTrendingCoins() {
  //   const trendingTokens = this.http
  //     .get<CoinsResponse>(this.apiUrl)
  //     .pipe(map(response => response['coins']));
  //   console.log(trendingTokens);
  //   return trendingTokens;
  // }
}
