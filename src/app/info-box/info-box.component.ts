import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  @Input() infoText: string;
  @Output() titleClicked = new EventEmitter<string>();

  isHidden = false;

  constructor() { }

  ngOnInit() {
  }

  toggleHidden() {
    this.isHidden = !this.isHidden;
  }

  sendPing() {
    this.titleClicked.emit(`${this.infoText} Clicked`);
  }

}
