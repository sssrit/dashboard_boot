import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile-quick-links',
  templateUrl: './profile-quick-links.component.html',
  styleUrls: ['./profile-quick-links.component.css']
})
export class ProfileQuickLinksComponent implements OnInit {

  fb_link ="http://facebook.com";
  g_link="http://google.com";
  constructor() { }

  ngOnInit(): void {
  }

}
