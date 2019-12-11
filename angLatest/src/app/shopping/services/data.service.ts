import { NotFoundError } from '../../shared/common/not-found-error';
import { BadInput } from '../../shared/common/bad-input';
import { AppError } from '../../shared/common/app.error';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })

export class DataService {
  constructor(private url: string, private http: HttpClient) {
  }

  // Get Service===============================================================
  getAll(endpoint) {
    return this.http.get(this.url + endpoint)
    .pipe(catchError(this.handleError));
  }

  // Create Service===============================================================
  create(endpoint, resource) {
    return this.http.post(this.url + endpoint, JSON.stringify(resource), {
          headers: new HttpHeaders({
          'Content-Type': 'application/json'
          }),
      })
    .pipe(catchError(this.handleError));
  }



  getUser(endpoint) {
    return this.http.get(this.url + endpoint, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        }),
    })
    .pipe(catchError(this.handleError));
  }





  // update Service===============================================================
  update(endpoint, resource) {
    return this.http.put(this.url + endpoint, JSON.stringify(resource), {
          headers: new HttpHeaders({
          'Content-Type': 'application/json'
          }),
      })
    .pipe(catchError(this.handleError));
  }






  // Delete Service===============================================================
  delete(endpoint, deleteId) {
    return this.http.delete(this.url + endpoint + '/' + deleteId)
    .pipe(catchError(this.handleError));
  }



  private handleError(error: Response) {
    // if (error.status === 400 ) {
    //   return throwError(new BadInput(error.json()));
    // }
    // if (error.status === 404 ) {
    //   return throwError(new NotFoundError(error));
    // }
    return throwError(new AppError(error));
  }


}
