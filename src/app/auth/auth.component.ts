import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less', '../globalStyle.less']
})
export class AuthComponent implements OnInit {
  isLogin: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

}
