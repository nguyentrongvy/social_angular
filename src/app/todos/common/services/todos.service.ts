import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Todo } from '../models/todo';
import { headers } from '../headers/headers';

@Injectable({
    providedIn: 'root'
})
export class TodosService {
 
    baseUrl: string;
   
    constructor(private http: HttpClient) {
      this.baseUrl = 'http://localhost:3000';
    }
   
    getAPITodos() {
      return this.http.get(`${this.baseUrl}/book`, { headers })
        .pipe(catchError((error: any) => throwError(error.message)));
    }
}