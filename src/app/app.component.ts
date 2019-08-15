import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng4-complete-guide';

  navItem: string = 'shopping-list';

  onNavEvent(navItem) {
    this.navItem = navItem;
  }
}
