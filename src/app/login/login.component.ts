import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private formBuilder:FormBuilder,
    private cookieService:CookieService,
    private router:Router
    ){}
  loginForm!: FormGroup;
  
  submitted:boolean = false;
  ngOnInit(): void {
    this.initializeForm();
   
  }
  initializeForm()
  {
    this.loginForm = this.formBuilder.group({
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
     });
  }

  isLoggedin() {
    if (this.cookieService.get('email')){
      return true
    }
    else
    {
      return false
    }
  }
  
  async onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);

    if(this.loginForm.invalid){
      return
    }

    else{
      console.log(this.loginForm.value);
      this.cookieService.set('email',this.loginForm.value.email);
      this.cookieService.set('password',this.loginForm.value.password);
      this.router.navigate(['/homepage'])
    }
  }
}