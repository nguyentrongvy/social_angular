import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../configs/app.config';
import { Book } from '../model/book.class';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookURL = `${AppConfig.ApiURL}/book`

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.bookURL, book, this.httpOptions).pipe(
    )
  }

  listBook(term : string):Observable<Book[]> {
    let url = `${AppConfig.ApiURL}/book?search=${term}`;

    // if(!term.trim()) {
    //   return this.http.get<Book[]>(url, this.httpOptions);
    // }
    return this.http.get<Book[]>(url, this.httpOptions);
  }
}
