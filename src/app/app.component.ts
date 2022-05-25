import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard_boot';
  sideBarOpen = true;

  sideBarToggeler()
  {
    this.sideBarOpen =!this.sideBarOpen;
  }
  ngOnInit(){}
}
