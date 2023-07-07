import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { studentInterface } from './studentObsFormat';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  constructor( private _http: HttpClient) { }

  private _url = "../assets/data/studentdata.json";

  getDetails(): Observable<studentInterface[]>{
    
    return this._http.get<studentInterface[]>(this._url).pipe(catchError(
      e => { 
              return throwError(() => new Error(e.message || 'unknown Error'));
            })
    );
    
    //Deprecated
    //return this._http.get<studentInterface[]>(this._url).pipe(catchError(this.errorHandler));

  }

  errorHandler(error: HttpErrorResponse){
        return throwError(() => new Error(error.message || 'unknown Server Error'));
      //return throwError(error.message || "unknown Server Error");
  }
  

  //Dependency Injection(DI)
  getStudent(){
    return[ 
    {"id": 1, "name": "Mahi", "course": "Angular"},
    {"id": 2, "name": "Mahesh", "course": "SpringBoot"},
    {"id": 3, "name": "Jay", "course": "AWS"},
    {"id": 4, "name": "MJ", "course": "Full Stack"},
    ];
  }

  getCourse(){
    return[  
    {"id": 1, "course": "Angular"},
    {"id": 2, "course": "SpringBoot"},
    {"id": 3, "course": "AWS"},
    {"id": 4, "course": "Full Stack"},
    ];

  
  }

}
