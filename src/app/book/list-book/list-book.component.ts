import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Observable, Subject } from 'rxjs';
import { Book } from '../../model/book.class';
import {
  debounceTime, distinctUntilChanged, switchMap, map
} from 'rxjs/operators';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {

  // books: Observable<Book[]>;
  search1:string;
  books: any;
  private searchTerms = new Subject<string>();

  constructor(
    private bookService: BookService
  ) { }


  ngOnInit() {
    this.bookService.listBook(this.search1).subscribe(
      res => {
        this.books = res;
        console.log('res', res)
      })

    // this.books = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),

    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),

    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.bookService.listBook(term))
    // )

    // console.log('book', this.books)
  }

  onChange(event) {
    this.bookService.listBook(event).subscribe(res => {
      console.log('res', res)
    });
  }

  search(term : string) {
    this.searchTerms.next(term);
  }

}
