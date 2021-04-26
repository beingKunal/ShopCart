import { Router } from '@angular/router';
import { AuthService } from './../_Services/Auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loginForm: FormGroup ;
  constructor(private fb : FormBuilder , private authService : AuthService , private router : Router) { }

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm(){
    this.loginForm = this.fb.group({
      Username:['',Validators.required],
      Password:['',Validators.required]
    })
  }
  login(){
    this.authService.login(this.loginForm.value).subscribe((response)=>{
      console.log("login Successful");
    })
  }
  loggedIn(){
    return this.authService.loggedIn();
  }
  Logout(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
