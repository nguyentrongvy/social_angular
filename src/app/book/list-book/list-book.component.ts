import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Observable, Subject } from 'rxjs';
import { Book } from '../../model/book.class';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {

  books: Observable<Book[]>

  constructor(
    private bookService: BookService
  ) { }


  ngOnInit() {
    this.bookService.listBook().subscribe(
      res => {
        // this.books = res;
        console.log('res', res)
      })
  }

}
