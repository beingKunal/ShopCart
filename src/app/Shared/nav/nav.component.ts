import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../Auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm() {
    this.loginForm = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  login() {
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        this.toastr.success('login Successful','',{positionClass: 'toast-bottom-right'});
      },
      (error) => {
        this.toastr.error('Login Error');
      },
      () => {
        this.router.navigate(['']);
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  Logout() {
    localStorage.removeItem('token');
    this.toastr.success('LogOut Succesfully','',{positionClass: 'toast-bottom-right'});
    this.router.navigate(['']);
  }

  Register() {
    this.router.navigate(['/register']);
  }
}
