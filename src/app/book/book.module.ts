import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookRoutingModule} from './book-routing.module';
import {BookComponent} from './book.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookDataService} from './shared/book-data.service';
import { BookEditComponent } from './book-edit/book-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookNewComponent } from './book-new/book-new.component';
import {TooltipDirective} from '../shared/tooltip.directive';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent,
    TooltipDirective
  ],
  providers: [BookDataService],
})
export class BookModule {
}
