import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  info = 'Second';

  onTitleClicked(event: Event) {
    console.log(event);
  }
}
