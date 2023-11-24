import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private formBuilder = inject(FormBuilder);
  private userService = inject(UsersService);

  public registerForm = this.formBuilder.group({
    name:      ['', [Validators.required, Validators.minLength(2)]],
    email:     ['', [Validators.required, Validators.email]],
    password:  ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
    terms:     [false, [Validators.requiredTrue]]
  })
  
  public passwordConfirmation(): boolean {
    return this.registerForm.get('password')!.value 
    !== this.registerForm.get('password2')!.value 
    && this.registerForm.get('password2')!.touched
    ? true
    : false
  }
  
  public isInputValid(inputName: string): boolean {
    return this.registerForm.get(inputName)!.invalid  && this.registerForm.get(inputName)!.touched
    ? true 
    : false;
  }
  

  public createUser(): void {
    if (this.registerForm.invalid)
      return this.registerForm.markAllAsTouched()

    this.userService.createUser(this.registerForm.getRawValue())
      .subscribe(res => {
        console.log('user created');
        console.log(res);
      }, err => {
        Swal.fire({icon: 'error', title: 'Error', text: err.error.msg})
      })
  }
}
