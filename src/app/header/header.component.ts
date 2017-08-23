import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  clicked = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.clicked = !this.clicked;

  }

}
