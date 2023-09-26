import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://library.prsu.ac.in'; // Replace with your API URL
  // private apiUrl = 'https://cat-fact.herokuapp.com'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Example API call function
  getItems(): Observable<any> {
    const endpoint = '/api/newsPosting'; // Replace with your API endpoint
    // const endpoint = '/facts'; // Replace with your API endpoint
    const url = this.apiUrl + endpoint;

    return this.http.get(url);
  }
  Data(){
    return this.http.get(environment.apiUrl).pipe(tap(res => { res
    }),
    catchError(e => {        
      throw new Error(e);
    })
  );
  }

}
