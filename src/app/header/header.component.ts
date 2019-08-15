import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navEvent = new EventEmitter<string>();
  navItem: string;

  constructor() { }

  ngOnInit() {
  }

  onNavClick(event) {
    this.navItem = event.target.id;
    this.navEvent.emit(this.navItem);
  }

}
