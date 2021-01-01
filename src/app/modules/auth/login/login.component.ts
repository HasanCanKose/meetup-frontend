import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {UserResponseModel} from '../../user/models/user-response.model';
import {UserService} from '../../../services/user.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

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
        this.userService.getUser()
          .subscribe(res => {
            this.router.navigate(['/home']);
          });
      });


  }
}
