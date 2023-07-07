import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormRegisterService {

  constructor(private _http: HttpClient) { }

  public Url = 'http://localhost:3000/register';

  enroll(user: User){
    return this._http.post<any>(this.Url, user).pipe(catchError(this.errorHandler));

  }
  errorHandler(error: HttpErrorResponse){
    //return throwError(error);
    return throwError(() => error); 
  }
}
