import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Book} from './book';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class BookDataService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
  }

  getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:4730/books/${isbn}`);
  }

  createBook(book: Book): Observable<Book>  {
    return this.http.post<Book>('http://localhost:4730/books', book, httpOptions);
  }

  saveBook(book: Book ): Observable<Book> {
    return this.http.put<Book>(`http://localhost:4730/books/${book.isbn}`, book, httpOptions);

  }

}
