import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class FlipcardsService {

  constructor(private http: HttpClient) { }

  // getFlipcards(): Observable<Object> {
  //   return of(this.http.get('/get-flipcard'));
  // }


  getFlipcards(): Observable<object> {
    return of(this.http.get('/api/get-flipcard'));
  }

  getFlipcardsShuffled(): Observable<object> {
    return of(this.http.get('/api/get-flipcard-shuffle'));
  }

  removeFlipcard( flipcard: Object ) {
    this.http.post('/api/remove-flipcard', flipcard)
    .subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log(err);
      }
    );
  }

}