import { Component, OnInit } from '@angular/core';
import {Book} from '../shared/book';
import {ActivatedRoute} from '@angular/router';
import {BookDataService} from '../shared/book-data.service';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit() {
    this.route.params.subscribe((params: {isbn: string}) => {
      this.bookData.getBook(params.isbn).subscribe(book => this.book = book);
    });
  }

  save(formValue) {
    this.bookData.saveBook(this.book).subscribe(book => console.log(book));
  }

}
