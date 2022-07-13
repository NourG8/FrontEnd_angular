
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = "http://localhost:8000/api/users/";
  
  private apiURL1 = "http://localhost:8000/api/verif/";
  private apiURL2 = "http://localhost:8000/api/create";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }
  

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    let jwt =JSON.parse(localStorage.getItem('user') || '[]') || [];
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
   return this.httpClient.get<User[]>(this.apiURL,this.httpOptions);
  
 }

 create(user :any): Observable<any> {
   return this.httpClient.post<any>(this.apiURL2, JSON.stringify(user), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id:any): Observable<User> {
   return this.httpClient.get<User>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id:any, user:any): Observable<any> {
   return this.httpClient.put<any>(this.apiURL + id, JSON.stringify(user), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id:any){
   return this.httpClient.delete<User>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 verif(mail:any){
  return this.httpClient.get<User>(this.apiURL1 + mail, this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

 errorHandler(error:any) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }

}
