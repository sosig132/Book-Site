import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public register: FormGroup;


  ngOnInit(): void {
    this.register = new FormGroup({
      username: new FormControl('', [
        Validators.required, Validators.minLength(4)]),
      password: new FormControl ('', Validators.required),
      email: new FormControl ('', [Validators.email, Validators.required]),
    });
  }
  get username() { return this.register.get('username') as FormControl };
  get password() { return this.register.get('password') as FormControl};
  get email() { return this.register.get('email') as FormControl};

  onSubmit() {
    
      //alert('User form is not valid!')
    

    
  }
}
