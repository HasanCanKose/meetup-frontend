import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { StyleService } from '../../../services/style.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  isRegisterPage;

  constructor(private userService: UserService, private router: Router, private styleService: StyleService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
    });
    this.isRegisterPage = true;
    this.styleService.registerPage$.next(this.isRegisterPage);
  }

  ngOnDestroy() {
    this.isRegisterPage = false;
    this.styleService.registerPage$.next(this.isRegisterPage);
  }

  onSubmit() {
    let request = {
      name: this.registerForm.get('firstname').value,
      surname: this.registerForm.get('lastname').value,
      userName: this.registerForm.get('username').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
    };
    if (this.registerForm.get('password').value === this.registerForm.get('confirmPassword').value) {
      this.userService.userRegister(request).subscribe((data) => console.log(data));
      this.router.navigate(['/login']);
    }
  }
}
