import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less', '../globalStyle.less'],
})
export class AuthComponent implements OnInit {
  isLogin: boolean = this.authService.isLoginMode;
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    let authObs: Observable<AuthResponseData> 

    if (this.isLogin) {
      authObs = this.authService.singin(email, password)
    } else {
      authObs = this.authService.singup(email, password)
    }

    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/main'])
      },
      (error) => {
        alert(error.error.error.message);
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
