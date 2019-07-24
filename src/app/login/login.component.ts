import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from  '@angular/forms';
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  submitText = "Login";
  heads = "Login";
  registering=false;

  loginForm: FormGroup;


 constructor(private formBuilder: FormBuilder, private movieService: MovieService){
   this.loginForm = new FormGroup({
     name: new FormControl() ,
     username: new FormControl(),
     password: new FormControl()
   });
 }
  submit() {
    if(this.registering)
      this.movieService.register(this.loginForm.value)
    else
      this.movieService.login(this.loginForm.value)
  }

  register(){
    this.heads = "Register";
    this.submitText="Register";
    this.registering = true;
  }
}
