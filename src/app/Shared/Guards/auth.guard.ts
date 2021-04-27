import { AuthService } from '../Auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private route: Router,
    private authService : AuthService,
    private toastr: ToastrService
  ) {}
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    else{
     this.toastr.warning("Please login to see Cart!!!");
      this.route.navigate(['']);
      return false;
    }
  }
}
