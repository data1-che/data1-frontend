import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthenticationService } from './../../services/authentication.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginActive: Boolean = true;
  registerActive: Boolean = false;
  portfolioActive : Boolean = false;
  pageNotFoundActive: Boolean = false;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }
  ngOnInit(): void {
    console.log("CHE Ruta activa: ",this.router.url);

    switch(this.router.url) {
      case '/login': {
         this.loginActive = true;
         this.registerActive = false;
         this.portfolioActive = false;
         this.pageNotFoundActive = false;
         break;
      }
      case '/register': {
        this.registerActive = true;
        this.loginActive = false;
        break;
     }
     case '/portfolio': {
      this.portfolioActive = true;
      this.registerActive = false;
      this.loginActive = false;
      break;
   }
      default: {
        this.pageNotFoundActive = true;
        this.portfolioActive = false;
        this.registerActive = false;
        this.loginActive = false;
         break;
      }
   }
  }


  logout( event : Event){
    event.preventDefault;
    Swal.fire({
      title: '¿CERRAR SESIÓN?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#747174',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#00b5ff',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem('token');
         this.authenticationService.removeToken();
          console.log("Token removido, notifico desde archivo banner", sessionStorage.getItem('token'));
          this.router.navigate(['/login']);
          }
        }
      )

  }
 }


