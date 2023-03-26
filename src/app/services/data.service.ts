import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface CoinsResponse {
  coins: any[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://api.coingecko.com/api/v3/search/trending';
  coins$: any;

  constructor(private http: HttpClient) { }

  getTrendingCoins() {
    this.coins$ = this.http
      .get<CoinsResponse>(this.apiUrl)
      .pipe(map(response => response['coins']));
    return this.coins$;
  }

  // Following along with a video about mergeMap/concatMap rxjs
  getData() {
    const data = this.http.get(this.apiUrl);
    return data;
  }

  // getTrendingCoins(): Observable<{items: any[]}> {
  //   const data = this.http.get<{items: any[]}>(this.apiUrl);
    
  //   console.log(data);
  //   return data;
  // }

}
