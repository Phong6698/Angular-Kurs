import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.scss']
})
export class MouseCursorComponent implements OnInit {

  x: number;
  y: number;

  constructor() { }

  ngOnInit() {
  }

  onMousemove($event: MouseEvent) {
    this.x = $event.clientX;
    this.y = $event.clientY;
  }

  onMouseLeave() {
    this.x = null;
    this.y = null;
  }

}
