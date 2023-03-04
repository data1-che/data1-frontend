import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;


  constructor( private formBuilder: FormBuilder, 
    private authenticationService: AuthenticationService,
    private ruta:Router) {
    this.form=this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      nombreUsuario: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(8)]]

    })
  }

  ngOnInit() {

  }

  //get Email(){
  //  return this.form.get('email');
  //}

  get nombreUsuario (){
    return this.form.get('nombreUsuario')
  }

  get Password(){
    return this.form.get('password');
  }

  onLogin(event:Event ){
    event.preventDefault;
    !this.authenticationService.login(this.form.value).subscribe(data => {
    console.log("Archivo OnLogin Component , seteo del token: ", data.token);
    sessionStorage.setItem('token', data.token);
    this.authenticationService.setToken(data.token);
    this.ruta.navigate(['/portfolio']);
    });
  }

}
