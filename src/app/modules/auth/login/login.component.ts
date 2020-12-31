import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;



  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  onNavigateRegisterPage() {
    this.router.navigate(['/register']);
  }

  onSubmit() {
    let authRequest = {
      "userName": this.loginForm.get('username').value,
      "password": this.loginForm.get('password').value
    }
    this.authService.userAuthentication(authRequest)
      .subscribe(data =>
      {
        console.log(data)
        localStorage.setItem("token", data);
        this.router.navigate(['/home']);
      });
  }
}
