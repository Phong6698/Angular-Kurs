import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from "./book/book-list/book-list.component";
import {BookDetailComponent} from "./book/book-detail/book-detail.component";
import {BookComponent} from "./book/book.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/books'},
  {path: 'books', loadChildren: './book/book.module#BookModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
