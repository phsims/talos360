import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface ApiResponse {
  data: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {
  private apiUrl = 'https://meowfacts.herokuapp.com?count=6';

  constructor(private http: HttpClient) { }
  getCatFacts() {
    return this.http.get<ApiResponse>(this.apiUrl)
      .pipe(
        map(response => response.data), // Extract 'data' property from the API response
        map((data: string[]) => {
          return data.map((fact, idx) => ({
            catId: data.length + idx,
            catFact: fact
          }));
        }),
        catchError((error: any) => {
          console.error('An error occurred:', error);
          return throwError(() => error);
        })
      );
  }
}
