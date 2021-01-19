import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  onClickMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onOpenMenu() {
    this.onClickMenu = !this.onClickMenu
  }
}
