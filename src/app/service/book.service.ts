import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../configs/app.config';
import { Book } from '../model/book.class';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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
}
