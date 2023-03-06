import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  urlLogin="http://localhost:4200/"; 
  urlNuevo="http://localhost:8080/"; 
  /* url="http://localhost:4200/login"; */
  usuario: BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    console.log("EL SERVICIO DE AUTENTICACION ESTA CORRIENDO");
    this.usuario = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('token') || '{}'));
  }
  login(credenciales:any):Observable<any>{
    /* return this.http.post(this.urlLogin , credenciales);
  } */

  /* login(credenciales:any):Observable<any>{ */
    /* return this.http.post(this.urlLogin , credenciales); */
   /* return this.http.post(this.url, credenciales).pipe(map(data => {
      console.log("Archivo Autenticacion Service , credenciales: ", credenciales);
      console.log("Archivo Autenticacion Service , mapeo de data: ", data);
      this.usuario.next(data);
      return data;
    }))
    */
       return this.http.post(this.urlLogin, credenciales).pipe(map(data=>{
         sessionStorage.setItem('usuario', JSON.stringify(data));
         return data;
       }))
    }
 
  
  register(credenciales:any):Observable<any>{
    return this.http.post(this.urlNuevo , credenciales);
  }
  
  token(){
    console.log("Archivo Autenticacion Service, token(): ", sessionStorage.getItem('token') );
    return  sessionStorage.getItem('token');
  }
  
  setToken(token:string): void {
    sessionStorage.setItem('token', token);
  }
  
  removeToken(): void {
    sessionStorage.removeItem('token');
    console.log("Token removido, desde archivo autentication service", sessionStorage.getItem('token'));
  }

}  
