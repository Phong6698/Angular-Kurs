import { Component, OnInit } from '@angular/core';
import {Book} from '../shared/book';
import {BookDataService} from '../shared/book-data.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookData: BookDataService) { }

  ngOnInit() {
    this.loadBookData();
  }

  loadBookData() {
    // Take 1 -> wenn man weiss das es nur einmal aufruft. Es holt einamal und unsubscribed.
    this.bookData.getBooks().take(1).subscribe(books => this.books = books);
  }

}
