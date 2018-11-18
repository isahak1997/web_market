import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SendFormDataService {

  private url = 'https://angular.io/guide/http';

  constructor(private http: HttpClient) {
  }

  sendData(data): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.url, data, httpOptions).pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred:', error.error.message);
    } else {
      console.log(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
