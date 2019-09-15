import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book.class';
import { BookService } from '../../service/book.service';
import { HttpErrorResponse } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book: Book = new Book();

  constructor(
    private bookService: BookService,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
  }

  save() {
    this.bookService.addBook(this.book).subscribe(
      book => {
        console.log('Successfully saved person', book);
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          console.log('err', err)
        }
      }
    )
  }

  onSubmit() {
    this.bookService.addBook(this.book).subscribe(
      book => {
        this.toastr.success('add success');
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          console.log('err', err)
        }
      }
    )
  }

}
