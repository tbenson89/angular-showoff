import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, catchError } from 'rxjs';

interface CoinsResponse {
  coins: any[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://api.coingecko.com/api/v3/search/trending';
  coins$: any;

  // TODO: MOVE THIS TO A NEW SERVICE!
  // Create obj with both listings & users
  grease_base_api = 'http://localhost:3333/';
  greaseApiPaths = { listing: 'listings', users: 'users/getAllUsers' };
  listings$: any;
  users$: any;

  constructor(private http: HttpClient) { }

  getAllListings() {
    this.listings$ = this.http
      .get(this.grease_base_api + this.greaseApiPaths.listing)
      .pipe(map(res => res));

    return this.listings$;
  }

  getAllUsers() {
    this.users$ = this.http
      .get(this.grease_base_api + this.greaseApiPaths.users)
      .pipe(map((res => res)))

    return this.users$;
  }

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
  //   const data = this.http.get(this.apiUrl);
    
  //   console.log(data);
  //   return data;
  // }
}


  // NOTE: SAVE catchError
  // catchError(error => {
  //   console.log('Caught in CatchError. Returning 0')
  //   return of(0);     //return from(['A','B','C'])
  // })
