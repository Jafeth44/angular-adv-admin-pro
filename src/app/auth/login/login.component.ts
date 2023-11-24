import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private router      = inject(Router);
  private userService = inject(UsersService);
  private formBuilder = inject(FormBuilder);

  public loginForm = this.formBuilder.group({
    email:    ["", Validators.required],
    password: ["", Validators.required],
    remember: [false],
  })

  public login(): void {
    // this.router.navigateByUrl('/');
    if (this.loginForm.invalid)
      return this.loginForm.markAllAsTouched()

    this.userService.loginUser(this.loginForm.getRawValue())
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      })
  }
}
