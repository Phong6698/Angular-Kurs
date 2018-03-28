import { Component, OnInit } from '@angular/core';

import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {BookDataService} from '../shared/book-data.service';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private bookData: BookDataService) {
    this.form = this.formBuilder.group({
      'title': ['', [Validators.required, Validators.minLength(5)]],
      'subtitle': ['', Validators.required],

    });
  }

  ngOnInit() {

  }

  create() {
    this.bookData.createBook(this.form.value).subscribe(book => console.log(book));
  }

}
