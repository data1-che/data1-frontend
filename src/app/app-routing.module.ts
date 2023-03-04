import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './../app/components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  { path: 'portfolio',  component: PortfolioComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login' , pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
// canActivate:[GuardGuard] ,
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
