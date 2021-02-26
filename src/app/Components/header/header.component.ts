import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  onClickMenu: boolean = false;
  isAtuhenticated: boolean = false;
  private userSub: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAtuhenticated = !!user;
    });
  }

  onOpenMenu() {
    this.onClickMenu = !this.onClickMenu;
  }

  onLoginMode() {
    if (this.isAtuhenticated) {
      this.authService.logout();
      this.router.navigate(['login'])
    } else {
      this.authService.isLoginMode = true;
      this.router
        .navigateByUrl('/', { skipLocationChange: true })
        .then(() => this.router.navigate(['login']));
    }
  }

  onRegisterMode() {
    this.authService.isLoginMode = false;
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['login']));
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
